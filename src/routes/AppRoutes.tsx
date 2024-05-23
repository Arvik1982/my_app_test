import { Route, Routes } from "react-router-dom";
import ListCountriesPage from "../pages/ListPage/ListCountriesPage";
import CountryPage from "../pages/CountryPage/CountryPage";
import ErrPage from "../pages/ErrorPage/ErrPage";
import { propsInterface } from "../types/types";

export default function AppRoutes ({setError}:propsInterface) {
  return (
    <Routes>
      <Route path="/" element={<ListCountriesPage setError={setError} />} />
      <Route path="/country/:id" element={<CountryPage setError={setError}/>} />
      <Route path="*" element={<ErrPage/>}/>
    </Routes>
  );
}
