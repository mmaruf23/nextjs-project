import Button from '@/components/atoms/Button';
import CountryDetail from '@/components/molecules/CountryDetail';
import CountryFlag from '@/components/molecules/CountryFlag';
import Layout from '@/components/templates/Layout';
import useCountries from '@/hooks/useCountries';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function CountryById() {
  const [disabledButton, setDisabledButton] = useState(false);
  const router = useRouter();
  const countries = useCountries();
  const [id, setId] = useState('');
  const [detailCountry, setDetailCountry] = useState(null);

  useEffect(() => {
    if (id && countries.length > 0) {
      setDetailCountry(countries.find((country) => country.cca3 == id) || null);
    }
  }, [id, countries]);
  useEffect(() => {
    if (router.query.id) {
      setId(router.query.id.toUpperCase());
    }
  }, [router.query.id]);

  function handleClick() {
    setDisabledButton(true);
  }

  return (
    <Layout>
      <div className="w-full flex flex-col gap-5 justify-center">
        <div className="flex justify-start items-center mt-16 p-4">
          <p className="text-4xl font-bold font-serif">
            About this country :
            <span className="px-5 text-5xl font-serif font-extrabold text-red-700 uppercase">
              {detailCountry?.name?.common}
            </span>
          </p>
        </div>
        <div className="">
          <div className="min-h-[500px] text-lg font-semibold font-sans flex flex-col lg:flex-row gap-5 p-4">
            {detailCountry && (
              <>
                <CountryDetail dataCountry={detailCountry} />
                <CountryFlag
                  imageSource={detailCountry?.flags?.svg}
                  imageDetail={detailCountry?.flags?.alt}
                />
              </>
            )}
          </div>
          <div className="flex justify-center my-10">
            <Link href={'/countries'}>
              <Button onClick={handleClick} isDisabled={disabledButton}>Check Other Countries</Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
