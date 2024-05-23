import { Dispatch } from "react";

export default async function getDataApi(
  setError: Dispatch<string> 
) {
  try {
    const responseData = await fetch("https://restcountries.com/v3.1/all", {
      method: "GET",
    });
    if (!responseData.ok) {
      setError("server error");
      throw new Error("server error");
    }
    const listCountries = await responseData.json();      
    return listCountries;
  } catch (error) {
    if (error instanceof Error) {
      error.message==='Failed to fetch'?
      setError('Server error: Нет связи с сервером, попробуйте обновить страницу')
      :setError(error.message);
      throw new Error(error.message);
    } else {
      setError("new server error");
      throw new Error("new server error");
    }
  }
}
