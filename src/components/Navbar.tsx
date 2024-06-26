'use client'
import React from "react";
import Link from "next/link";
import CustomButton from "./ui/custom-button";
import NavbarLink from "./NavbarLink";
import SearchBar from "./SearchBar";
import { LogoutButton } from "./auth/logout-button";
import { Session } from "next-auth";

interface Props {
  session: Session | null
}


const Navbar = (props: Props) => {
  const { session } = props

  return (
    <>
      <div className="bg-white shadow-md flex justify-between px-[42px] py-5 items-center">
        <div className="flex gap-10 items-center">
          <Link
            className="text-[42px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#193E2D] to-[#F6E5AF]"
            href="/"
          >
            Courserve
          </Link>
          <ul className="flex gap-10">
            <li><NavbarLink href="/dashboard">Beranda</NavbarLink></li>
            <li><NavbarLink href="/course">Kursus</NavbarLink></li>
            <li><NavbarLink href="/about">Tentang</NavbarLink></li>
          </ul>
        </div>
        {/* <SearchBar /> */}
        <div className="flex gap-10 items-center">
          <div className="flex gap-1 items-center">
            {
              !session && (
                <>
                  <Link href="/auth/login"><CustomButton className="px-6 bg-[#E4E4E4] text-[#000E23] text-lg rounded-[10px]">Masuk</CustomButton></Link>
                  <Link href="/auth/register"><CustomButton className="px-6 bg-[#536F3E] text-[#E4E4E4] text-lg rounded-[10px]">Daftar</CustomButton></Link>
                </>
              )
            }
            {
              session && (
                <>
                  <CustomButton className="px-6 bg-[#536F3E] text-[#E4E4E4] text-lg rounded-[10px]">

                    <LogoutButton>
                      Keluar
                    </LogoutButton>
                  </CustomButton>
                </>
              )
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
