import React, { useEffect, useState } from "react";
import getDataApi from "../../api/getDataApi";
import styles from "./list.module.css";
import { useNavigate } from "react-router-dom";
import { elementType, nameType, propsInterface } from "../../types/types";
import dLike from '../../../public/dlike.png'
import like from '../../../public/like.png'
import { setAllCountries } from "../../store/slices/listCountriesSlice";
import { useDispatch } from "react-redux";


export default function ListCountriesPage({ setError }: propsInterface) {
      
  const [listCountries, setListCountries] = useState([]);
  const [renewCountries, setRenewCountries] = useState(false);
  const [filterOn, setFilterOn] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const countryClick = (name: string): void => {
    navigate(`/country/${name}`);
  };

  const countryClickLike = (name: string): void => {
    let tempArr:[] = JSON.parse(localStorage.getItem('listCountries')||'')
    tempArr.forEach((el:nameType)=>{el.name.common===name?
    (el.name.isLiked===true?el.name.isLiked=false:el.name.isLiked=true):''})
    localStorage.setItem('listCountries', JSON.stringify(tempArr))
    setListCountries(tempArr)
  };

  const countryClickDelete = (name: string, e:React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.stopPropagation();
    let tempArr:[] = JSON.parse(localStorage.getItem('listCountries')||'')
    let newArr =tempArr.filter((el:nameType)=>{return el.name.common!==name})
    localStorage.setItem('listCountries', JSON.stringify(newArr))
    setListCountries(newArr)
    };

  const countryFilterLiked = (): void => {    
    let tempArr:[] = JSON.parse(localStorage.getItem('listCountries')||'')
    let newArr =tempArr.filter((el:nameType)=>{return el.name.isLiked===true})
    setListCountries(newArr)
    setFilterOn(true)
    };

  const countryFilterAll = (): void => {    
      let tempArr:[] = JSON.parse(localStorage.getItem('listCountries')||'')
      setListCountries(tempArr)
      setFilterOn(false)
      };
    
  const countriesRenew = (): void => {    
        localStorage.removeItem('listCountries')
        setRenewCountries(!renewCountries)
        };

  useEffect(() => { 
    setFilterOn(false)  
    setError("");
    getDataApi(setError)
      .then((data) => { 
      dispatch(setAllCountries(data))
      return data
      }).then((data)=>{        
        data?setListCountries(JSON.parse(localStorage.getItem('listCountries')||'')):''
      })
      .catch((err) => {
        console.log(err);
      });
  }, [renewCountries]);
  
  return (
    <div className={styles.content__countries_list}>
      <span>Фильтр:</span>
      <div className={styles.filter__block}>
        {!filterOn&&<button onClick={countryFilterLiked} className={styles.filter__block_button}>Избранные</button>}
        {filterOn&&<button onClick={countryFilterAll} className={styles.filter__block_button}>Все</button>}
        <button onClick={()=>countriesRenew()} className={styles.filter__block_button}>Сброс</button>
      </div>
      {listCountries
        ? listCountries.map((el: elementType, index) => {
            return (           
              <div onClick={()=>{countryClick(el.name.common)}} key={index} className={styles.countries__list_element}>
                <div className={styles.list__element_container}> 
                <h2 className={styles.content__country_name}>
                  {el.name.common}
                </h2>
                <div>
                  <span className={styles.list__text}>Столица:</span>
                  <span className={styles.content__county_capital}>
                    {" "}
                    {el.capital}
                  </span>
                </div>
                <span className={styles.list__text}>Флаг страны:</span>
                <div  onClick={()=>{countryClick(el.name.common)}}  className={styles.content__country_flag}>
                  <img className={styles.country__flag_img} src={el.flags.png} alt={el.flags.alt} />
                </div>
                <div>
                  <span className={styles.list__text}>Регион:</span>
                  <span className={styles.content__county_region}>
                    {" "}
                    {el.region}
                  </span>
                  <span className={styles.content__county_region}>
                    {" "}
                    - {el?.subregion}
                  </span>
                </div>
                <div>
                  <span className={styles.list__text}>Население:</span>
                  <span className={styles.content__county_population}>
                    {" "}
                    {el.population}
                  </span>
                </div>
                </div>
                <div className={styles.list__actions}>
                  <div onClick={(e)=>{e.stopPropagation()}}>
                    <div>
                      {!el.name.isLiked&&<img onClick={()=>{countryClickLike(el.name.common)}} src={dLike} alt="dislike" />}
                      {el.name.isLiked&&<img onClick={()=>{countryClickLike(el.name.common)}} src={like} alt="like" />}
                    </div>
                  </div>
                  <button onClick={(e)=>{countryClickDelete(el.name.common,e)}}>удалить</button>
                </div>  
                </div>        
            );
          })
        : ""}
    </div>
  );
}
