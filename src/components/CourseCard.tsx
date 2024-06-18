import React from "react";
import Image from "next/image";
import { MouseEvent } from "react";

interface Props {
  className?: string;
  image: string;
  title: string;
  description: string;
}

const CourseCard = ({className, image, title, description}: Props) => {
  return (
    <div className={"flex flex-col w-96 text-gray-700 bg-white shadow-xl bg-clip-border rounded-xl items-center hover:scale-105 duration-100 "+className}>
      <div className="mx-4 mt-4 text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-max">
        <Image 
            className="h-[180px] object-cover"
            src={image}
            width={336}
            height={180}
            alt="Course Image"
        />
      </div>
      <div className="flex flex-col w-full justify-between h-full">
        <div className="flex flex-col p-6 gap-4 text-left w-full">
          {/* <p className="block font-sans text-xs text-[#6C6C6C] antialiased font-normal leading-5">
            Organization
          </p> */}
          <h4 className="block mb-2 font-sans text-xl antialiased font-bold leading-5 tracking-normal">
            {title}
          </h4>
          <p className="  font-sans text-xs text-[#6C6C6C] antialiased font-normal leading-5 line-clamp-5">
              {description}
          </p>
        </div>
        <div className="flex p-6 pt-2 gap-2 w-full">
          {/* <Image 
              src={"/database.svg"}
              width={22}
              height={25}
              alt="Database Icon"
          />
          <p className="block font-sans text-xs text-[#6C6C6C] antialiased font-normal leading-5">
            X Modul - Y Bulan
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
