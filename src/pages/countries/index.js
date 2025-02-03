import Card from '@/components/molecules/CountryCard';
import Layout from '@/components/templates/Layout';
import useCountries from '@/hooks/useCountries';
import useLogin from '@/hooks/useLogin';
import { getAllCountries } from '@/services/getCountries';
import { useCallback, useEffect, useState } from 'react';

export default function Countries({ countries }) {
  // const countries = useCountries();
  const user = useLogin()

  const [search, setSearch] = useState([]);
  useEffect(() => {
    if (countries.length) {
      if (user){
        setSearch(countries);
      } else {
        setSearch(countries.filter((country) => country.subregion === 'South-Eastern Asia'));
      }
    }
  }, [countries, user]);

  const handleChange = useCallback(
    (e) => {
      const text = e.target.value;
      if (text.length >= 1) {
        const filtered = countries.filter((item) =>
          item.name.common.toLowerCase().includes(text.toLowerCase())
        );
        setSearch(filtered);
      } else {
        setSearch(countries);
      }
    },
    [countries]
  );

  return (
    <Layout>
      <div className="w-full lg:mt-10 mt-5 md:w-[768px] lg:w-[1024px]">
        <div className="flex justify-center px-5">
          <input
            onChange={handleChange}
            className="mt-5 py-1 px-2 w-full border border-blue-400 focus:border-blue-700 outline-none rounded-md"
            type="text"
            placeholder="Seach Countries"
          />
        </div>
        <div className="lg:mt-10 mt-5 p-5">
          <div className="flex gap-5 flex-wrap justify-center">
            {search?.map((country) => (
              <Card
                key={country.name.common}
                name={country.name}
                cca3={country.cca3}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const countries = await getAllCountries();

  return {
    props: { countries },
  };
};
