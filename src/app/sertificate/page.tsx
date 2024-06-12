import SertificateBox from "@/components/SertificateBox";

const Sertificate = () => {
    return (
        <div>
            <div className='p-20 px-20 bg-gradient-to-r from-[#000E23] to-[#536F3E] flex item-center'>
                <div className="flex flex-col gap-5">
                    <h1 className="text-4xl leading-10 font-extrabold text-white relative text-center">
                        Seritifikat Kursus
                    </h1>
                    <p className="text-[14px] leading-10 text-white text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur consequuntur, fuga perspiciatis quae blanditiis aliquid alias vitae debitis nam quam labore quidem excepturi, dolore repellendus in tempore consequatur vel error.
                    </p>
                </div>
            </div>
            <div className=" flex m-20 p-10 item-center">
                <SertificateBox />
                <SertificateBox />
                <SertificateBox />
                <SertificateBox />
            </div>
        </div>
    );

};

export default Sertificate;