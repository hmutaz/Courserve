import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

function SideNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="">
            <Disclosure as="nav">
                <Disclosure.Button className=" absolute top-25 left-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
                    <GiHamburgerMenu
                    className="block md:hidden h-6 w-6"
                    aria-hidden="true"
                    />
                </Disclosure.Button>
                <div className="p-6 w-1/2 h-screen bg-white z-20 fixed top-20 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200 mt-5">
                    <div className="flex flex-col justify-start item-center">
                        <h1 className="text-base text-center font-bold border-b border-gray-100 pb-4 w-full">Course Name</h1>
                        <div className="relative flex flex-col items-center">
                            <button
                                onClick={() => setIsOpen((prev) => !prev)} 
                                className="p-4 text-base text-center font-bold w-full flex items-center justify-between border-b border-gray-100">
                                    Chapters
                                {!isOpen ? (
                                    <AiOutlineCaretDown className="h-4" />
                                ) : (
                                    <AiOutlineCaretUp className="h-4" />
                                )}
                            </button>

                            {isOpen && (
                                <div>
                                    <div className="text-sm w-full flex flex-col font-bold">
                                        <h4 className="p-2">Chapter 1</h4>
                                        <h4 className="p-2">Chapter 2</h4>
                                        <h4 className="p-2">Chapter 3</h4>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Disclosure>
        </div>
    );
};

export default SideNavbar;