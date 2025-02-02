import Button from '@/components/atoms/Button';
import Option from '@/components/atoms/OptionCountries';
import { setCountries, setUserCountry } from '@/redux/countrySlice';
import { getAllCountries } from '@/services/getCountries';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function CountryForm() {
  const dispatch = useDispatch();
  const countryRef = useRef();
  const countries = useSelector((state) => state.country.countries); // ini adalah state yang menampung data countries dari api
  const aseanCountries = countries.filter((country) => {
    // ini filter data hanya negara asean untuk user guest
    return country.subregion === 'South-Eastern Asia';
  });

  // -- Mengambil data negara dari API
  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await getAllCountries();
        dispatch(setCountries(response));
      } catch (error) {
        console.log('err fetchCountries :', error);
      }
    }

    fetchCountries();
  }, [dispatch]);

  useEffect(() => {
    const userCountry = localStorage.getItem('userCountry') ?? '';
    dispatch(setUserCountry(userCountry));
  }, [dispatch]);

  function handleClick() {
    // alert(countryRef.current.value);
    console.log(countryRef.current.value, "akan didispatch dan disimpan ke localStorage");
    dispatch(setUserCountry(countryRef.current.value));
    localStorage.setItem('userCountry', countryRef.current.value);
    console.log(countryRef.current.value, "selesai didispatch dan disimpan ke localStorage");
  }

  return (
    <div className="mt-44 flex flex-col gap-7">
      <p className="text-center">Pick your country to continue.</p>
      <div className="flex gap-1">
        <select
          ref={countryRef}
          className="w-52 rounded-lg bg-black p-2 text-white"
          name="mycountry"
          id="mycountry"
        >
          {aseanCountries.map((country) => (
            <Option
              key={country.cca2}
              value={country.cca3}
              text={country.name.common}
            />
          ))}
        </select>

        <Button onClick={handleClick} typeButton="button">This is my country!</Button>
      </div>
      <p className="text-center">
        Please{' '}
        <span>
          <Link href="/login" className="text-blue-700">
            login
          </Link>
        </span>{' '}
        to get access for all countries
      </p>
      <div className="flex justify-center text-red-500">
        <button
          onClick={() => alert('Aku alien')}
          className="rounded-xl border border-red-500 p-3 hover:bg-red-400 hover:text-white font-semibold"
        >
          <span>I live on Mars, sir!</span>
        </button>
      </div>
    </div>
  );
}
