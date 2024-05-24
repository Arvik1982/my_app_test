import { useEffect, useState } from 'react';
import getDataApi from '../../api/getDataApi';
import styles from './list.module.css';
import { IRootStoreType, elementType, propsInterface } from '../../types/types';
import {
  setAllCountries,
  setCountryFilterAll,
  setCountryFilterLiked,
  setFilterOn,
  setListCountriesStore,
} from '../../store/slices/listCountriesSlice';
import { useDispatch, useSelector } from 'react-redux';
import ListElement from '../../components/ListElement/ListElement';

export default function ListCountriesPage({ setError, error }: propsInterface) {
  const [renewCountries, setRenewCountries] = useState(false);
  const [displayLoader, setDisplayLoader] = useState(false);
  const listCountries = useSelector((state: IRootStoreType) => state.countriesReducer.listCountriesStore);
  const filterOn = useSelector((state: IRootStoreType) => state.countriesReducer.filterOn);

  const dispatch = useDispatch();

  const countriesRenew = (): void => {
    localStorage.removeItem('listCountries');
    setRenewCountries(!renewCountries);
    dispatch(setFilterOn(false));
  };

  useEffect(() => {
    setDisplayLoader(true);
    setError('');
    getDataApi(setError)
      .then((data) => {
        dispatch(setAllCountries(data));
        return data;
      })
      .then((data) => {
        setDisplayLoader(false);
        data ? dispatch(setListCountriesStore(JSON.parse(localStorage.getItem('listCountries') || ''))) : '';
      })
      .catch((err) => {
        console.log(err);
      });
  }, [renewCountries]);

  return (
    <div className={styles.content__countries_list}>
      <span>Фильтр:</span>
      <div className={styles.filter__block}>
        {!filterOn && (
          <button onClick={() => dispatch(setCountryFilterLiked())} className={styles.filter__block_button}>
            Избранные
          </button>
        )}
        {filterOn && (
          <button onClick={() => dispatch(setCountryFilterAll())} className={styles.filter__block_button}>
            Все
          </button>
        )}
        <button onClick={() => countriesRenew()} className={styles.filter__block_button}>
          Сброс
        </button>
      </div>
      {!error && <div>{displayLoader && <h3>Loading data...</h3>}</div>}
      {listCountries
        ? listCountries.map((el: elementType, index) => {
            return <ListElement key={index} el={el} />;
          })
        : ''}
    </div>
  );
}
