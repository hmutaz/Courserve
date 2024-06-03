import React from 'react';
import Image from 'next/image';
import { LoginForm } from '@/components/auth/login-form';

const LoginPage = () => {
  return (
    <>
      <div className='grid grid-cols-2 items-center gap-16'>
        <Image 
          src={"/reglog-img.png"}
          height={590}
          width={468}
          alt={"RegLog Image"}
        />
        <LoginForm />
      </div>
    </>
  );
}

export default LoginPage