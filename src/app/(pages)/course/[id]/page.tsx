import Image from "next/image";
import Button from "@/components/ui/custom-button";
import Review from "@/components/Review";
import Rating from "@/components/Rating";
import {
    Users,
    ShoppingCart
} from 'lucide-react'
import { auth } from "../../../../../auth";
import { useRouter } from "next/router";
import Link from "next/link";
import PayButton from "@/components/PayButton";

async function getCourse(id: string) {
    const res = await fetch('http://localhost:3000/api/courses?id=' + id, {
        next: {
            revalidate: 0
        }
    })
    return await res.json()
}

async function isCoursePaid(courseId: string, userId: string | undefined){
    const res = await fetch('http://localhost:3000/api/courses/is-paid?id=' + userId + "&course_id=" + courseId, {
        next: {
            revalidate: 0
        }
    })
    return await res.json()
}

const Course = async ({ params }: { params: { id: string } }) => {
    const session = await auth()
    const headerStyle = {
        backgroundImage: 'linear-gradient(to right, #000E23, #536F3E)',
        color: 'white',
        font: 'sans',
        padding: '50px 80px',
        margin: '0px 0px 30px 0px'
    };
    const id = params.id
    const course = await getCourse(id)
    const isPaid = await isCoursePaid(id, session?.user.id)

    return (
        <>
            <div>
                <div className='grid grid-cols-2 p-20 px-40 bg-gradient-to-r from-[#000E23] to-[#536F3E]'>
                    <div className="flex flex-col gap-5 mt-16">
                        {/* <h2 className="text-base leading-10 font-bold text-white">
                            Organization
                        </h2> */}
                        <h1 className="text-4xl leading-10 font-extrabold text-white relative">
                            <Image
                                className='absolute -left-10'
                                src={"/course-line.svg"}
                                width={12}
                                height={40}
                                alt="Line Decor"
                            />
                            {course.title}
                        </h1>
                        <p className="text-[14px] leading-10 text-white">
                            {course.description}
                        </p>
                        {/* <div className="text-white flex gap-2 mt-3">
                            <Rating />
                            <p className="text-xs mr-6">4 (1.345 ulasan)</p>
                            <Image
                                src={"/people.svg"}
                                width={20}
                                height={23}
                                alt="People Icon"
                            />
                            <p className="text-xs">x pelajar</p>
                        </div> */}
                    </div>
                    <div className='flex justify-center relative'>
                        <div className="flex flex-col w-min text-gray-700 bg-white shadow-xl bg-clip-border rounded-xl items-center absolute">
                            <div className="w-[390px] mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl">
                                <Image
                                    className="h-[244px] object-cover"
                                    src={course.image}
                                    width={390}
                                    height={244}
                                    alt="Course Image"
                                />
                            </div>
                            <div className="flex flex-col p-4 gap-2 text-left w-full">
                                {
                                    !isPaid.isPaid && 
                                    <>
                                        <p className="block my-4 text-center text-[30px] font-bold leading-10">
                                            {
                                                (course.price == 0) && "Gratis"
                                            }
                                            {
                                                (course.price != 0) && "Rp. " + course.price
                                            }
                                        </p>
                                        <PayButton
                                            userid={session?.user.id}
                                            courseid={course.id}
                                            gross_amount={course.price}
                                        />
                                    </>
                                }
                                {
                                    isPaid.isPaid &&
                                    <Link href='/' className="flex">
                                        <Button className='w-full p-2 gap-4 rounded-[10px] items-center bg-[#536F3E] text-[#E4E4E4]'>
                                            Buka Kursus
                                        </Button>
                                    </Link>
                                }
                                
                                {/* <h4 className="block font-sans text-base font-bold leading-5 tracking-normal">
                                    X Bulan Y Minggu
                                </h4>
                                <h4 className="block font-sans text-base font-bold leading-5 tracking-normal">
                                    Dibawakan dalam Bahasa Indonesia
                                </h4> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="grid grid-cols-2">
                    <div className="mt-10 p-10 ml-32">
                        <div>
                            <h2 className="text-lg font-bold">Ulasan:</h2>
                            <div className="flex-auto">
                                <Review />
                                <Review />
                                <Review />
                                <Review />
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Course