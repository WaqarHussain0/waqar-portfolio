import Row from '@/components/common/Row';

import TextElement from '@/components/common/TextElement';
import AnimatedReact from '@/components/common/AnimatedReact';
import Image from 'next/image';

const Banner = () => {
  return (
    <Row className="max:h-[27vh] relative w-full justify-center overflow-hidden md:h-[65vh]">
      <Row className="w-[90%] items-center justify-between">
        <Row className="w-[65%] items-end gap-1 pl-2 md:w-[60%] md:pl-3">
          <AnimatedReact />

          <Row className="flex-col items-start">
            <TextElement as="p" className="text-[10px] text-[#e1ebed]">
              Hello 👋, I'm
            </TextElement>

            <TextElement
              as="h2"
              className="cotoris name-animation border-none text-[22px] font-light! text-[#8121d0] md:text-[50px] lg:text-[60px]"
            >
              Waqar Hussain
            </TextElement>

            <TextElement
              as="p"
              className="line-clamp-none text-start text-[10px] text-white md:text-[16px]"
            >
              Full-Stack MERN Developer | Building scalable SaaS platforms,
              multi-tenant architectures, and real-time web applications. I
              specialize in delivering high-performance, maintainable, and
              production-ready solutions.
            </TextElement>
          </Row>
        </Row>

        <div className="w-[35%] overflow-hidden rounded-sm md:w-[40%]">
          <Image
            src="/waqar.png"
            alt="Profile Pic"
            width={600}
            height={600}
            sizes="(max-width: 768px) 35vw, 40vw"
            priority
            fetchPriority="high"
            className="h-auto w-full object-contain"
          />
        </div>
      </Row>
    </Row>
  );
};

export default Banner;
