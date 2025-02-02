import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import RegisterForm from '@/components/organism/Forms/RegisterForm';
import Layout from '@/components/templates/Layout';
import Link from 'next/link';

export default function Register() {
  return (
    <div>
      <Layout>
        <RegisterForm />
      </Layout>
    </div>
  );
}
