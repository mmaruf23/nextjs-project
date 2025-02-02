import axios from 'axios';
const regiterapi = process.env.NEXT_PUBLIC_API_REGISTER;
const api = process.env.NEXT_PUBLIC_API_LOGIN;

const register = async (payload) => {
  try {
    const response = await axios.post(`${regiterapi}/register`, payload);
    console.log(response);
    
    return response;
  } catch (error) {
    // console.log('axios register err : ', error);
    return error.response;
  }
};
const login = async (payload) => {
  try {
    const response = await axios.post(`${api}/auth/login`, payload);
    return response;
  } catch (error) {
    // console.log('axios register err : ', error);
    return error.response;
  }
};

const getUsername = async (id) => {
  try {
    const response = await axios.get(`${api}/users/${id}`)
    return response;
  } catch (error) {
    return error.response;
  }
}


export { register, login, getUsername };