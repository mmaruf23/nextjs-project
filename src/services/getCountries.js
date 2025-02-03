import axios from 'axios';
const api = process.env.NEXT_PUBLIC_API;

const getAllCountries = async () => {
  try {
    const response = await axios.get(`${api}/all`)
    return response.data;
  } catch (error) {
    console.log('Axios err : ', error);
  }
}

export { getAllCountries };
