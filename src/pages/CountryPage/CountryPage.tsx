import { useEffect, useState } from 'react';
import styles from './country.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { IRootStoreType, elementType, nameType, propsInterface } from '../../types/types';
import { useSelector } from 'react-redux';

export default function CountryPage({ setError }: propsInterface) {
  const listCountries = useSelector((state: IRootStoreType) => state.countriesReducer.allCountries);

  const [country, setCountry] = useState([]);
  const navigate = useNavigate();

  const params = useParams();
  useEffect(() => {
    setError('');
    if (params.id) {
      const tempArr: [] =
        listCountries.length !== 0 ? listCountries : JSON.parse(localStorage.getItem('listCountries') || '');
      const newArr = tempArr.filter((el: nameType) => {
        return el.name.common === params.id;
      });
      setCountry(newArr);
    }
  }, []);

  return (
    <div className={styles.content__country}>
      <button onClick={() => navigate('/')}>Назад к списку</button>

      {country.length !== 0
        ? country.map((el: elementType, index) => {
            return (
              <div key={index} className={styles.content__county_list}>
                <h2 className={styles.content__county_name}>{el.name.common}</h2>
                <div>
                  <span className={styles.list__text}>Столица:</span>
                  <span className={styles.content__county_capital}> {el.capital}</span>
                </div>
                <span className={styles.list__text}>Флаг страны:</span>
                <div className={styles.content__county_flag}>
                  <img src={el.flags.png} alt={el.flags.alt} />
                </div>
                <div>
                  <span className={styles.list__text}>Регион:</span>
                  <span className={styles.content__county_region}> {el.region}</span>
                  <span className={styles.content__county_region}> - {el?.subregion}</span>
                </div>
                <div>
                  <span className={styles.list__text}>Население:</span>
                  <span className={styles.content__county_population}> {el.population}</span>
                </div>
              </div>
            );
          })
        : ''}
    </div>
  );
}
