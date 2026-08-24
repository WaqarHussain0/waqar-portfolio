import Row from '@/components/common/Row';

import TextElement from '@/components/common/TextElement';
import AnimatedReact from '@/components/common/AnimatedReact';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <Row className="relative h-[21vh] w-full justify-center overflow-hidden md:h-[45vh] md:py-0 lg:h-[75vh]">
      <Row className="w-[90%] items-center justify-between">
        <Row className="w-[65%] items-end gap-1 pl-2 md:w-[60%] md:pl-3">
          <AnimatedReact />

          <Row className="flex-col items-start gap-3">
            <TextElement
              as="h2"
              className="cotoris name-animation border-none text-[22px] font-light! text-[#8121d0] md:text-[50px] lg:text-[60px]"
            >
              Waqar Hussain
            </TextElement>

            <TextElement
              as="h3"
              className="poppins line-clamp-none text-start text-[12px] font-medium text-white md:text-[30px]"
            >
              Full-Stack Software Engineer
            </TextElement>

            <TextElement
              as="p"
              className="line-clamp-none text-start text-[8px] text-[#e1ebed] md:text-[15px]"
            >
              Building multi-tenant SaaS platforms in production. I own
              full-stack systems end-to-end - from tenant-isolated databases to
              shared infrastructure used across multiple applications.
            </TextElement>

            <Row className="flex-wrap gap-2 md:gap-3">
              <Button
                asChild
                size={"sm"}
                className="bg-[#8121d0] text-white hover:bg-[#8121d0c7]"
              >
                <a href="#selected-work">View Work</a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
              
                size={"sm"}
              >

                <Link
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </Link>
              </Button>
            </Row>
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
