"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import CourseCard from '@/components/CourseCard';

const Transaction = () => {
    return (
        <div className='flex justify-between mx-40 my-10'>
            <div className='p-10 font-sans'>
                <h1 className='pb-10 font-bold text-center'>Masukkan Detail Informasi</h1>
                <form>
                    <input type="text" className='w-full border border-gray-300 text-black text-base rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black' placeholder='Email' required />
                    <input type="text" className='w-full border border-gray-300 text-black text-base rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black' placeholder='Username' required />
                    <input type="text" className='w-full border border-gray-300 text-black text-base rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black' placeholder='No.Telp' required />
                    <p className='text-base text-center leading-5 py-5'>Dengan melanjutkan pembelian ini Anda telah menyetujui Syarat dan Kondisi</p>
                    <div className='flex justify-center'>
                        <button type="submit" className='w-1/2 bg-custom-teal-2 text-white py-2 rounded hover:bg-black font-semibold text-xl2'>Bayar</button>
                    </div>
                </form>
            </div>
            <div className='p-10'>
                <CourseCard />
            </div>
        </div>
    )
}

export default Transaction