import { useNavigate } from 'react-router-dom';
import dLike from '../../../public/dlike.png';
import like from '../../../public/like.png';
import styles from './list.module.css';
import { useDispatch } from 'react-redux';
import { setCountryClickDelete, setCountryClickLike } from '../../store/slices/listCountriesSlice';
import { listElPropType } from '../../types/types';

export default function ListElement({ el }: listElPropType) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const countryClick = (name: string): void => {
    navigate(`/country/${name}`);
  };
  return (
    <div
      onClick={() => {
        countryClick(el.name.common);
      }}
      className={styles.countries__list_element}
    >
      <div className={styles.list__element_container}>
        <h2 className={styles.content__country_name}>{el.name.common}</h2>
        <div>
          <span className={styles.list__text}>Столица:</span>
          <span className={styles.content__county_capital}> {el.capital}</span>
        </div>
        <span className={styles.list__text}>Флаг страны:</span>
        <div
          onClick={() => {
            countryClick(el.name.common);
          }}
          className={styles.content__country_flag}
        >
          <img className={styles.country__flag_img} src={el.flags.png} alt={el.flags.alt} />
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
      <div className={styles.list__actions}>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div>
            {!el.name.isLiked && (
              <img
                onClick={() => {
                  dispatch(setCountryClickLike(el.name.common));
                }}
                src={dLike}
                alt="dislike"
              />
            )}
            {el.name.isLiked && (
              <img
                onClick={() => {
                  dispatch(setCountryClickLike(el.name.common));
                }}
                src={like}
                alt="like"
              />
            )}
          </div>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(setCountryClickDelete(el));
          }}
        >
          удалить
        </button>
      </div>
    </div>
  );
}
