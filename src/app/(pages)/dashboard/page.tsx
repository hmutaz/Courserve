import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
    ListFilter
} from "lucide-react"
import Button from "@/components/ui/custom-button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import CourseCard from "@/components/CourseCard"
import Link from "next/link"
import { validate } from "uuid"
import { auth } from "../../../../auth"

interface Course {
    id: string
    image: string
    title: string
    description: string
}

async function getCourses() {
    const session = await auth()
    console.log(session?.user.id)

    const res = await fetch('http://localhost:3000/api/courses/details?id=664a01de82238d1397b1f501', {
        next: {
            revalidate: 0
        }
    })
    const test = await res.json()
    return test
}

const Course = async () => {
    const courses = await getCourses()

    return (
        <>
            <div className="flex flex-col mx-32 my-16 gap-8">
                <h1 className="font-extrabold text-center">
                    Kursus Saya
                </h1>
                <div className="flex items-center justify-between">
                    <p className="text-xl leading-10">Ditemukan {courses.length} Kursus</p>
                </div>
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 flex-col gap-x-8 gap-y-4 justify-between">
                    {
                        courses.map((course: Course) => (
                            <Link key={course.id} href={'/course/' + course.id}>
                                <CourseCard
                                    className="w-[300px] h-full"
                                    image={course.image}
                                    title={course.title}
                                    description={course.description}
                                />
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Course