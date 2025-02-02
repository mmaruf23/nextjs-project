import axios from 'axios';
const api = process.env.NEXT_PUBLIC_API_USER;

const register = async (payload) => {
  try {
    const response = await axios.post(`${api}/register`, payload);
    return response;
  } catch (error) {
    // console.log('axios register err : ', error);
    return error.response;
  }
};
const login = async (payload) => {
  try {
    const response = await axios.post(`${api}/login`, payload);
    return response;
  } catch (error) {
    // console.log('axios register err : ', error);
    return error.response;
  }
};

export { register, login };