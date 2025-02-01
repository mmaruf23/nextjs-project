import CountryPage from "@/components/organism/CountryPage";
import CountryForm from "@/components/organism/Forms/CountryForm";
import Layout from "@/components/templates/Layout";
import { getAseanCountries } from "@/services/getCountries";

export default function Home({aseanCountries}) {
  return (
    <Layout>
      <CountryPage />
      {/* <CountryForm aseanCountries={aseanCountries} /> */}
    </Layout>
  );
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
