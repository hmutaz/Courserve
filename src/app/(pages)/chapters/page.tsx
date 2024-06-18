import Image from "next/image";
import Button from "@/components/ui/custom-button";
import Link from "next/link";
import PayButton from "@/components/PayButton";
import { auth } from "../../../../auth";

interface Chapter {
    id: string,
    title: string,
    summary: string,
    courseId: string
}

async function getCourse(id: string) {
    const res = await fetch('http://localhost:3000/api/courses?id=' + id, {
        next: {
            revalidate: 0
        }
    })
    return await res.json()
}

async function getChapters(id: string) {
    const res = await fetch('http://localhost:3000/api/chapters?id=' + id, {
        next: {
            revalidate: 0
        }
    })
    return await res.json()
}

const Course = async ({ params, searchParams }: {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
}) => {
    const id = searchParams?.id as string
    const course = await getCourse(id)
    const chapters = await getChapters(id)
    console.log(chapters)

    return (
        <>
            <div>
                <div className='grid grid-cols-3 p-20'>
                    <div className="flex flex-col gap-5 col-span-2 items-center">
                        {
                            chapters.map((chapter: Chapter) => (
                                <Button className='border border-[#A6A6A6] text-left p-4 rounded-[10px] w-[90%] flex gap-4' key={chapter.id}>
                                    <span className="font-bold ">{chapter.title} </span>
                                    <span className="text-ellipsis line-clamp-1 text-[#A6A6A6]">{chapter.summary}</span>
                                </Button>
                            ))
                        }
                    </div>
                    <div className='flex justify-center'>
                        <div className="flex flex-col w-min text-gray-700 bg-white shadow-xl bg-clip-border rounded-xl items-center">
                            <div className="w-[390px] mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl">
                                <Image
                                    className="h-[244px] object-cover"
                                    src={course.image}
                                    width={390}
                                    height={244}
                                    alt="Course Image"
                                />
                            </div>
                            <div className="flex flex-col p-4 gap-4 text-left w-full">
                                <h1 className="text-xl leading-10 font-bold text-center">
                                    {course.title}
                                </h1>
                                <p className="text-sm leading-6">
                                    {course.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Course