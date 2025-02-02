import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import { setToken, setUser } from '@/redux/authSlice';
import { login } from '@/services/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { jwtDecode } from 'jwt-decode';

export default function LoginForm() {
  const router = useRouter();
  const [status, setStatus] = useState('');
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.token);
  const [disabledButton, setDisabledButton] = useState(false);
  

  useEffect(() => {
    // -- Menyimpan token yang ada di local ke redux jika ada
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(setToken(token));
      // const id = jwtDecode(token);
      // console.log(id);
      
    }
  }, [dispatch]);

  useEffect(() => {
    // -- Jika sudah login akan dialihkan ke Home
    if (isLogin) {
      alert('Already logged in!');
      router.back();
    }
  }, [isLogin, router]);

  async function handleSubmit(event) {
    event.preventDefault();
    setDisabledButton(true);
    console.log("button disable");
    
    const payload = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    const response = await login(payload);
    setDisabledButton(false);
    console.log("button enable");
    
    if (response.status === 200) {
      localStorage.setItem('token', response.data.token);
      // dispatch(setToken(response.data.token));

      setStatus('Login success. redirecting...');
      router.push('/');
    } else {
      setStatus(response.data);
    }
  }
  

  return (
    <div className="mt-32 border border-blue-400 px-10 py-8 rounded-2xl">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <Input name={'username'} type="text">
            Username
          </Input>
          <Input name={'password'} type="password">
            Password
          </Input>
          <Button isDisabled={disabledButton}>Login</Button>
        </div>
      </form>
      <div className="mt-6 text-center">
        <p className="mb-2 text-red-600">{status}</p>
        <p className="">
          {`Don't have any account?`}
          <span>
            {' please '}
            <Link className="text-blue-600" href={'/register'}>
              sign up
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}
