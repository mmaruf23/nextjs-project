import Button from '@/components/atoms/Button';
import Option from '@/components/atoms/OptionCountries';
import Link from 'next/link';
import { useRef } from 'react';

export default function CountryForm({ aseanCountries }) {
  const countryRef = useRef();
  function handleClick() {
    console.log(countryRef.current);
    alert(countryRef.current.value);
  }
  aseanCountries.map((country) => {
    console.log(country.name.common);
  });

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

        <Button onClick={handleClick}>This is my country!</Button>
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
