import { Dispatch } from 'react';
export default async function getCountryInfoApi(name: string, setError: Dispatch<string>) {
  try {
    const responseData = await fetch(`https://restcountries.com/v3.1/name/${name}`, {
      method: 'GET',
    });
    if (!responseData.ok) {
      setError('server error');
      throw new Error('server error');
    }
    const listCountry = await responseData.json();

    return listCountry;
  } catch (error) {
    if (error instanceof Error) {
      setError(error.message);
      throw new Error(error.message);
    } else {
      console.log(error);
      setError('new server error');
      throw new Error('new server error');
    }
  }
}
