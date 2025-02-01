import Link from 'next/link';
import { useRef } from 'react';

export default function CountryPage() {
  const country = useRef();
  function handleClick() {
    console.log(country.current);
    alert(country.current.value);
  }

  return (
    <div className="mt-44 flex flex-col gap-7">
      <p className="text-center">
        Pick your country to continue.
      </p>
      <div className="flex gap-1">
        <select
          ref={country}
          className="w-52 rounded-lg bg-black p-2 text-white"
          name="mycountry"
          id="mycountry"
        >
          <option value="Indonesia">Indonesia</option>
          <option value="Malaysia">Malaysia</option>
          <option value="Singapure">Singapure</option>
          <option value="Japan">Japan</option>
        </select>
        <button
          onClick={handleClick}
          className="rounded-lg bg-blue-400 p-2 text-white hover:bg-blue-600"
        >
          This is my country!
        </button>
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
