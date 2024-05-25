import React from 'react';
import Image from 'next/image';
import { RegisterForm } from '@/components/auth/register-form';

const RegisterPage = () => {
  return (
    <div className='grid grid-cols-2 items-center gap-16'>
      <Image 
        src={"/reglog-img.png"}
        height={590}
        width={468}
        alt={"RegLog Image"}
      />
      <RegisterForm />
    </div>
  );
}

export default RegisterPage