import CustomButton from "@/components/ui/custom-button";
import CourseCard from "@/components/CourseCard";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex md:flex-row flex-col justify-center items-center p-36 gap-24">
        <div className="relative">
          <Image
            src={"/home-page.png"}
            width={555}
            height={381}
            alt="Home Page Image"
          />
          <Image
            src={"/dots.svg"}
            width={128}
            height={128}
            alt="dots"
            className="absolute -top-[60px] -end-[60px] -z-10"
          />
          <Image
            src={"/dots.svg"}
            width={128}
            height={128}
            alt="dots"
            className="absolute -bottom-[60px] -start-[60px] -z-10"
          />
        </div>
        <div className="flex flex-col gap-8 max-w-md">
          <h1 className="font-extrabold text-left text-5xl">
            DAPATKAN SKILL ANDA DI SINI!!!
          </h1>
          <p className="text-xl leading-10">
            Dengan Courserve Anda bisa mendapatkan lebih dari 10 keterampilan
            yang Anda inginkan dan bersiap untuk wawancara kerja berikutnya!
          </p>
          <CustomButton className="text-xl leading-10 bg-[#536F3E] text-white rounded-[10px] w-[55%]">
            Dapatkan Kursus
          </CustomButton>
        </div>
      </div>
      <div className="flex justify-center bg-gradient-to-b from-white to-[#E4E4E4] w-full md:p-4 p-36">
        <Carousel className="w-10/12 bg-transparent">
          <CarouselContent>
            <CarouselItem className="flex justify-center basis-1/2">
              <CourseCard />
            </CarouselItem>
            <CarouselItem className="flex justify-center basis-1/2">
              <CourseCard />
            </CarouselItem>
            <CarouselItem className="flex justify-center basis-1/2">
              <CourseCard />
            </CarouselItem>
            <CarouselItem className="flex justify-center basis-1/2">
              <CourseCard />
            </CarouselItem>
            <CarouselItem className="flex justify-center basis-1/2">
              <CourseCard />
            </CarouselItem>
            <CarouselItem className="flex justify-center basis-1/2">
              <CourseCard />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

      </div>
    </main>
  );
}
