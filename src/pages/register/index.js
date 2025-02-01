import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Layout from "@/components/templates/Layout";
import Link from "next/link";
import { useRef } from "react";


export default function Register() {
  const refUsername = useRef();
  const refPassword = useRef();

  function handleClick() {
    console.log(refUsername.current.value);
    console.log(refPassword.current.value);
  }
  return (
    <div>
      <Layout>
        <div className="mt-32 border border-blue-400 px-10 py-8 rounded-2xl">
          <div className="flex flex-col gap-4">
            <Input refName={refUsername} name={'username'} type="text">Username</Input>
            <Input refName={refPassword} name={'password'} type="passeord">Password</Input>
            <Button onClick={handleClick}>Sign Up</Button>
          </div>
          <div className="mt-7 text-center">
            <p>{`Already have account?`}
              <span className="text-blue-600"> <Link href={'/login'}>login</Link></span>
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
};
