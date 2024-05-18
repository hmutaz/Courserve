import Image from "next/image";
import Button from "@/components/Button";
import Review from "@/components/Review";
import Rating from "@/components/Rating";

const Course = () => {
    const headerStyle = { 
        backgroundImage: 'linear-gradient(to right, #000E23, #536F3E)',
        color: 'white',
        font: 'sans',
        padding: '50px 80px',
        margin: '0px 0px 30px 0px'
    };

    return (
        <main>
            <div className="flex justify-between relative">
                <div>
                    <div style={headerStyle} className="w-full">
                        <h2 className="px-8 text-base font-bold">Universitas Padjadjaran</h2>
                        <div className="flex gap-2 w-full my-5">
                            <div className="bg-custom-teal-3 h-13 p-1.5"></div>
                            <h1 className="px-2.5 text-5xl font-bold">Design Thinking</h1>
                        </div>
                        <h3 className="px-8 text-base my-2 leading-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, voluptates perferendis?</h3>
                        <div className="px-8 flex gap-2 mt-8">
                            <Rating />
                            <p className="text-xs mr-6">4 (1.345 ulasan)</p>
                            <Image 
                                src={"/people.svg"}
                                width={20}
                                height={23}
                                alt="People Icon"
                            />
                            <p className="text-xs">8.2k pelajar</p>
                        </div>
                    </div>
                    <div className="mt-20 p-10 ml-20">
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
                </div>
                <div></div>
            </div>
        </main>
    )
}

export default Course