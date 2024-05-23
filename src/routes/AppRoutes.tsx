import { Route, Routes } from 'react-router-dom';
import ListCountriesPage from '../pages/ListPage/ListCountriesPage';
import CountryPage from '../pages/CountryPage/CountryPage';
import ErrPage from '../pages/ErrorPage/ErrPage';
import { propsInterface } from '../types/types';

export default function AppRoutes({ setError, error }: propsInterface) {
  return (
    <Routes>
      <Route path="/" element={<ListCountriesPage setError={setError} error={error} />} />
      <Route path="/country/:id" element={<CountryPage setError={setError} error={error} />} />
      <Route path="*" element={<ErrPage />} />
    </Routes>
  );
}
