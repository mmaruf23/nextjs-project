import CountryPage from '@/components/organism/CountryPage';
import CountryForm from '@/components/organism/Forms/CountryForm';
import Layout from '@/components/templates/Layout';
import { useSelector } from 'react-redux';

export default function Home({ aseanCountries }) {
  const userCountry = useSelector((state) => state.country.userCountry);
  return <Layout>{userCountry ? <CountryPage /> : <CountryForm />}</Layout>;
}

// export async function getServerSideProps() {
//   try {
//     console.log("Data geting")
//     const res = await getAseanCountries();

//     return {
//       props: {
//         aseanCountries: res || [],
//       }
//     };
//   } catch (error) {
//     console.log("getData err", error)
//   }
// }
