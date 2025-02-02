import CountryPage from '@/components/organism/CountryPage';
import CountryForm from '@/components/organism/Forms/CountryForm';
import Layout from '@/components/templates/Layout';
import { setUser } from '@/redux/authSlice';
import { getUsername } from '@/services/auth';
import { jwtDecode } from 'jwt-decode';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const userCountry = useSelector((state) => state.country.userCountry);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   async function getUser() {
  //     const token = localStorage.getItem('token');
  //     if (token) {
  //       const id = jwtDecode(localStorage.getItem('token')).sub;
  //       const res = await getUsername(id);
  //       const username = `${res.data.name.firstname} ${res.data.name.lastname}`;
  //       // console.log(username);

  //       dispatch(setUser(username));
  //     }
  //   }
  //   getUser();
  // }, [dispatch]);

  

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
