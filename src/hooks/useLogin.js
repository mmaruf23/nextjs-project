import { setUser } from '@/redux/authSlice';
import { getUsername } from '@/services/auth';
import { jwtDecode } from 'jwt-decode';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function useLogin() {
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  useEffect(() => {
    async function getUser() {
      if (!user) {
        const token = localStorage.getItem('token');
        if (token) {
          const id = jwtDecode(token).sub;
          const res = await getUsername(id);
          const username = `${res.data.name.firstname} ${res.data.name.lastname}`;
          dispatch(setUser(username));
        }
      }
    }
    getUser();
  }, [dispatch, user]);

  return user;
}
