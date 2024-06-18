import Image from "next/image";

const about = () => {
    return (
      <>
        <div className='grid grid-cols-2 items-center p-20'>
          <Image 
            src={"/reglog-img.png"}
            height={590}
            width={468}
            alt={"RegLog Image"}
          />
          <div className="items-center">
            <h1 className="font-sans font-bold text-lg md-5">Tentang Kami</h1>
            <p className="font-sans text-base my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil a magni nobis est eligendi quaerat illo veritatis, tempora hic, soluta explicabo veniam minima perspiciatis. Totam, accusamus temporibus in placeat consequatur quidem laudantium velit quia minima vitae, voluptatibus ut deleniti natus maxime perspiciatis, cumque rerum dicta tempora pariatur voluptatem saepe mollitia. Rem quae, quod temporibus cum molestias adipisci? Earum asperiores accusamus, tempore nobis perspiciatis quasi laboriosam quia maxime architecto fugit facere consequatur animi ipsum quod corrupti nesciunt aut harum cupiditate assumenda! Quas rem, fuga, laboriosam eaque iste reprehenderit veritatis, quam expedita tempore ipsam corrupti suscipit repellendus. Architecto optio consequatur eos dolorum.</p>
            <p className="font-sans text-base my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil a magni nobis est eligendi quaerat illo veritatis, tempora hic, soluta explicabo veniam minima perspiciatis. Totam, accusamus temporibus in placeat consequatur quidem laudantium velit quia minima vitae, voluptatibus ut deleniti natus maxime perspiciatis, cumque rerum dicta tempora pariatur voluptatem saepe mollitia. Rem quae, quod temporibus cum molestias adipisci? Earum asperiores accusamus, tempore nobis perspiciatis quasi laboriosam quia maxime architecto fugit facere consequatur animi ipsum quod corrupti nesciunt aut harum cupiditate assumenda! Quas rem, fuga, laboriosam eaque iste reprehenderit veritatis, quam expedita tempore ipsam corrupti suscipit repellendus. Architecto optio consequatur eos dolorum.</p>
            <p className="font-sans text-base my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil a magni nobis est eligendi quaerat illo veritatis, tempora hic, soluta explicabo veniam minima perspiciatis. Totam, accusamus temporibus in placeat consequatur quidem laudantium velit quia minima vitae, voluptatibus ut deleniti natus maxime perspiciatis, cumque rerum dicta tempora pariatur voluptatem saepe mollitia. Rem quae, quod temporibus cum molestias adipisci? Earum asperiores accusamus, tempore nobis perspiciatis quasi laboriosam quia maxime architecto fugit facere consequatur animi ipsum quod corrupti nesciunt aut harum cupiditate assumenda! Quas rem, fuga, laboriosam eaque iste reprehenderit veritatis, quam expedita tempore ipsam corrupti suscipit repellendus. Architecto optio consequatur eos dolorum.</p>
          </div>
        </div>
      </>
    );
  }

export default about;