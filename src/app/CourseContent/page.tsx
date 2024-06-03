"use client";
import SideNavbar from "@/components/SideNavbar";
import Image from "next/image";

const CourseContent = () => {
    return (
        <div className="m-10 p-10 pl-20">
            <SideNavbar />
            <div className="ml-20 pl-20 flex flex-col items-center">
                <h1 className="font-sans font-bold text-xl-9 leading-5 pb-7">Course Name</h1>
                <Image
                    src={"/course-content.png"}
                    width={1080}
                    height={244}
                    alt="Course Content Image"
                />
                <div className="p-4">
                    <p className="block font-sans text-base leading-7 font-normal antialiased py-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat illum ad earum voluptates accusantium asperiores laudantium voluptatibus velit perspiciatis, repellat iusto numquam sequi ex consectetur dolore facere, fuga maxime consequatur similique cumque ipsa hic. Laboriosam distinctio nobis ratione accusamus cupiditate, eveniet consequatur suscipit, ab mollitia vero deleniti similique, iste aliquam.</p>
                    <p className="block font-sans text-base leading-7 font-normal antialiased py-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat illum ad earum voluptates accusantium asperiores laudantium voluptatibus velit perspiciatis, repellat iusto numquam sequi ex consectetur dolore facere, fuga maxime consequatur similique cumque ipsa hic. Laboriosam distinctio nobis ratione accusamus cupiditate, eveniet consequatur suscipit, ab mollitia vero deleniti similique, iste aliquam.</p>
                    <p className="block font-sans text-base leading-7 font-normal antialiased py-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat illum ad earum voluptates accusantium asperiores laudantium voluptatibus velit perspiciatis, repellat iusto numquam sequi ex consectetur dolore facere, fuga maxime consequatur similique cumque ipsa hic. Laboriosam distinctio nobis ratione accusamus cupiditate, eveniet consequatur suscipit, ab mollitia vero deleniti similique, iste aliquam.</p>
                </div>
            </div>        
        </div>
    );
}

export default CourseContent;
