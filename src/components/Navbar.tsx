import React from 'react';
import Link from 'next/link';
import Button from './Button';

const Navbar = () => {
    return (
        <>
            <ul className='bg-gradient-to-r from-[#315DC1] to-[#45C99B] flex justify-between px-[42px] py-5 items-center'>
                <div>
                    <Link className='text-[42px] font-extrabold' href="/">
                        Courserve
                    </Link>
                </div>
                <div className='flex gap-10 items-center'>
                    <Link href="/dashboard">
                        <li>Dashboard</li>
                    </Link>
                    <div className='flex gap-2 items-center'>
                        <Button classes='px-4 bg-[#E4E4E4] text-[#1F1F1F] text-lg rounded-l-[50px] rounded-r-[5px]'>
                            Login
                        </Button>
                        <Button classes='px-4 bg-[#315DC1] text-[#E4E4E4] text-lg rounded-r-[50px] rounded-l-[5px]'>
                            Register
                        </Button>
                    </div>
                </div>                
            </ul>
        </>
    );
};

export default Navbar;