import Row from "@/components/common/Row";

import TextElement from "@/components/common/TextElement";
import AnimatedReact from "@/components/common/AnimatedReact";
import Image from "next/image";

const Banner = () => {
  return (
    <Row className="w-full justify-center max:h-[27vh] md:h-[65vh] relative overflow-hidden">
      <Row className="w-[90%]   justify-between items-center ">
        <Row className=" w-[65%] md:w-[60%] items-end  pl-2 md:pl-3 gap-1 ">
          <AnimatedReact />

          <Row className="flex-col items-start">
            <TextElement as="p" className="text-[#e1ebed] text-[10px] ">
              Hello 👋, I'm
            </TextElement>

            <TextElement
              as="h2"
              className="cotoris font-light! text-[#8121d0] text-[22px] md:text-[50px] lg:text-[60px] name-animation border-none"
            >
              Waqar Hussain
            </TextElement>

            <TextElement
              as="p"
              className="text-white line-clamp-none text-start text-[10px] md:text-[16px] "
            >
              Full-Stack MERN Developer | Building scalable SaaS platforms,
              multi-tenant architectures, and real-time web applications. I
              specialize in delivering high-performance, maintainable, and
              production-ready solutions.
            </TextElement>
          </Row>
        </Row>

        <div className=" w-[35%]  md:w-[40%] rounded-sm overflow-hidden">
          <Image
            src="/waqar.png"
            alt="Profile Pic"
            width={600}
            height={600}
            className="w-full h-auto object-contain"
          />
        </div>
      </Row>
    </Row>
  );
};

export default Banner;
