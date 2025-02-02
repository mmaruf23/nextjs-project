import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import { login } from '@/services/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function LoginForm() {
  const router = useRouter();
  const [status, setStatus] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const payload = {
      email: event.target.username.value,
      password: event.target.password.value,
    };
    const response = await login(payload);
    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
      setStatus('Login success. redirecting...');
      router.push('/')
    } else {
      setStatus(response.data.error);
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
          <Button>Login</Button>
        </div>
      </form>
      <div className="mt-6 text-center">
        <p className='mb-2 text-red-600'>{status}</p>
        <p className=''>
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
