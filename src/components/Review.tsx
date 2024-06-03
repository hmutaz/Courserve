import React from "react";
import Image from "next/image";
import Rating from "./Rating";

const Review= () => {
    return (
        <div className="flex justify-between gap-x-6 border px-10 py-5 w-full my-3">
            <div className="flex min-w-0 gap-x-4">
                <div className="flex-none rounded-full bg-gray-50">
                    <Image 
                        src={"/profile.png"}
                        width={47}
                        height={8}
                        alt="Profile Image"
                    />
                </div>
                <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">Cathrene V.</p>
                    <p className="mt-1 truncate text-sm leading-5 text-gray-500">Ilmu yang bermanfaat!</p>
                </div>
            </div>
            <div className="mt-1 overflow-x-hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <Rating />
                <p className="mt-2 text-xs leading-5 text-gray-500"><time dateTime="2023-01-23T13:23Z">2 hari yang lalu</time></p>
            </div>
        </div>
    );
};

export default Review