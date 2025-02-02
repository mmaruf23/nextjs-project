import { useDispatch, useSelector } from 'react-redux';
import useLogin from './useLogin';
import { setCountries } from '@/redux/countrySlice';
import { useEffect, useMemo } from 'react';
import { getAllCountries } from '@/services/getCountries';

export default function useCountries() {
  
  const dispatch = useDispatch();
  const user = useLogin();

  const countries = useSelector((state) => state.country.countries);

  // -- Mengambil data negara dari API : ini mode csr
  useEffect(() => {
    async function fetchCountries() {
      try {
        if (!countries.length) {
          const response = await getAllCountries();
          dispatch(setCountries(response));
        }
      } catch (error) {
        console.log('err fetchCountries :', error);
      }
    }

    fetchCountries();
  }, [dispatch, countries.length]);

  return useMemo(() => {
    if (user) {
      return countries;
    }
    return countries.filter((country) => {
      return country.subregion === 'South-Eastern Asia';
    });
  }, [user, countries]);
}
