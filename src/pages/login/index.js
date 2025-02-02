import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import LoginForm from "@/components/organism/Forms/LoginForm";
import Layout from "@/components/templates/Layout";
import Link from "next/link";
import { useRef } from "react";


export default function Login() {
  const refUsername = useRef();
  const refPassword = useRef();



  return (
    <div className="">
      <Layout>
        <LoginForm />
      </Layout>
    </div>
  );
};
