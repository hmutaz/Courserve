import Button from '@/components/Button'
import {
    Users,
    ShoppingCart
} from 'lucide-react'
import Image from 'next/image'

const Course = () => {
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
                    <span className='flex items-center gap-4 text-white text-xs leading-10'>
                        <Users />
                        X Pelajar
                    </span>
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