import Button from '@/components/atoms/Button';
import CountryDetail from '@/components/molecules/CountryDetail';
import CountryFlag from '@/components/molecules/CountryFlag';
import useCountries from '@/hooks/useCountries';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function CountryPage() {
  const [disabledButton, setDisabledButton] = useState(false);

  const userCountry = useSelector((state) => state.country.userCountry);
  // const countries = useSelector((state) => state.country.countries);
  const countries = useCountries();
  const detailUserCountry = countries.find(
    (country) => country.cca3 === userCountry
  );

  function handleClick() {
    setDisabledButton(true);
  }
  return (
    <div className="w-full flex flex-col gap-5 justify-center">
      <div className="flex justify-start items-center mt-16 p-4">
        <p className="text-4xl font-bold font-serif">
          About your country :
          <span className="px-5 text-5xl font-serif font-extrabold text-red-700 uppercase">
            {detailUserCountry?.name.common}
          </span>
        </p>
      </div>
      <div className="">
        <div className="min-h-[500px] text-lg font-semibold font-sans flex flex-col lg:flex-row gap-5 p-4">
          <CountryDetail dataCountry={detailUserCountry} />
          <CountryFlag
            imageSource={detailUserCountry?.flags.svg}
            imageDetail={detailUserCountry?.flags.alt}
          />
        </div>
        <div className="flex justify-center my-10">
          <Link href={'/countries'}>
            <Button onClick={handleClick} isDisabled={disabledButton}>Check Other Countries</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
