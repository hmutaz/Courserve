import Image from "next/image";
import Button from "@/components/Button";
import Review from "@/components/Review";
import Rating from "@/components/Rating";
import {
    Users,
    ShoppingCart
} from 'lucide-react'

const Course = () => {
    const headerStyle = { 
        backgroundImage: 'linear-gradient(to right, #000E23, #536F3E)',
        color: 'white',
        font: 'sans',
        padding: '50px 80px',
        margin: '0px 0px 30px 0px'
    };

    return (
        <>
            <div className='grid grid-cols-2 p-20 px-40 bg-gradient-to-r from-[#000E23] to-[#536F3E]'>
                <div className="flex flex-col gap-5">
                    <h2 className="text-base leading-10 font-bold text-white">
                        Organization
                    </h2>
                    <h1 className="text-4xl leading-10 font-extrabold text-white relative">
                        <Image
                            className='absolute -left-10'
                            src={"/course-line.svg"}
                            width={12}
                            height={40}
                            alt="Line Decor"
                        />
                        Course Name
                    </h1>
                    <p className="text-[14px] leading-10 text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur consequuntur, fuga perspiciatis quae blanditiis aliquid alias vitae debitis nam quam labore quidem excepturi, dolore repellendus in tempore consequatur vel error.
                    </p>
                    <div className="text-white flex gap-2 mt-3">
                            <Rating />
                            <p className="text-xs mr-6">4 (1.345 ulasan)</p>
                            <Image 
                                src={"/people.svg"}
                                width={20}
                                height={23}
                                alt="People Icon"
                            />
                            <p className="text-xs">x pelajar</p>
                    </div>
                </div>
                <div className='flex justify-center relative'>
                    <div className="flex flex-col w-min text-gray-700 bg-white shadow-xl bg-clip-border rounded-xl items-center absolute">
                        <div className="w-[390px] mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl">
                            <Image
                                src={"/course-card.png"}
                                width={390}
                                height={244}
                                alt="Course Image"
                            />
                        </div>
                        <div className="flex flex-col p-6 gap-6 text-left w-full">
                            <p className="block my-4 text-center text-[30px] font-bold leading-10">
                                Rp. XXX.XXX
                            </p>
                            <Button className='flex p-2 gap-4 rounded-[10px] items-center justify-center bg-black text-white'>
                                <ShoppingCart/>
                                Beli Sekarang
                            </Button>
                            <h4 className="block font-sans text-base font-bold leading-5 tracking-normal">
                                X Bulan Y Minggu
                            </h4>
                            <h4 className="block font-sans text-base font-bold leading-5 tracking-normal">
                                Dibawakan dalam Bahasa Indonesia
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Course