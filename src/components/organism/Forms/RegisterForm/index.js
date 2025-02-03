import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import useLogin from '@/hooks/useLogin';
import { register } from '@/services/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function RegisterForm() {
  const router = useRouter();
  const isLogin = useSelector((state) => state.auth.token);
  const [disabledButton, setDisabledButton] = useState(false);

  useEffect(() => {
    // -- Jika sudah login akan dialihkan ke Home
    if (isLogin) {
      alert('Already logged in!');
      router.push('/');
    }
  }, [isLogin, router]);

  async function handleSubmit(event) {
    event.preventDefault();
    setDisabledButton(true);
    const payload = {
      email: event.target.username.value,
      password: event.target.password.value,
    };
    const response = await register(payload);
    setDisabledButton(false);

    if (response.status === 200) {
      alert('Register Success.\n\nPlease login.');
      router.push('/login');
    } else {
      alert(`Register Failed.\n\n${response.data.error}`);
    }
  }

  return (
    <div className="mt-32 border border-blue-400 px-10 py-8 rounded-2xl">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <Input name={'username'} type="text">
            Email
          </Input>
          <Input name={'password'} type="password">
            Password
          </Input>
          <Button isDisabled={disabledButton}>Sign Up</Button>
        </div>
      </form>
      <div className="mt-7 text-center">
        <p>
          {`Already have an account?`}
          <span className="text-blue-600">
            {' '}
            <Link href={'/login'}>login</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
