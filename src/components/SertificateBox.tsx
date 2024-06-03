import React from "react";
import Image from "next/image";

const SertificateBox = () => {
    return (
        <div className="flex flex-col w-96 text-gray-700 bg-white border items-center m-5 shadow-lg">
            <div className="flex flex-col p-6 gap-4 text-left w-full">
                <p className="block font-sans text-xs text-[#6C6C6C] antialiased font-normal leading-5">
                Organization
                </p>
                <h4 className="block mb-2 font-sans text-xl antialiased font-bold leading-5 tracking-normal">
                Course Name
                </h4>
                <p className="block font-sans text-xs text-[#6C6C6C] antialiased font-normal leading-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam commodi aliquid quae placeat magnam et dolorum, consequuntur ex incidunt molestiae culpa necessitatibus quam aspernatur suscipit obcaecati laboriosam iure, sed quidem!
                </p>
            </div>
            <button className="bg-black py-3 w-full text-white text-base font-bold font-sans">Lihat Sertifikat</button>
        </div>
    );
};

export default SertificateBox;