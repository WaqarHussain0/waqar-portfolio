'use client';
import AnimatedIcon from '@/components/common/AnimatedIcon';
import Row from '@/components/common/Row';
import TextElement from '@/components/common/TextElement';
import { Card, CardTitle } from '@/components/ui/card';
import { PAGES_ROUTES } from '@/constants/page-route.constant';
import { PiDiamondsFourFill } from 'react-icons/pi';
import ServicesData from '@/assets/data/service.data';
import Link from 'next/link';

const ServiceMeta = () => {
  const services = ServicesData;

  return (
    <Row className="w-full flex-col space-y-3">
      <Row className="w-full items-end justify-between">
        <Row className="flex-col items-start gap-1 text-[#291c3a]">
          <Row className="gap-2">
            <AnimatedIcon Icon={PiDiamondsFourFill} />
            <TextElement as="h2">Services</TextElement>
          </Row>

          <TextElement as="p">
            I provide a range of services to help you achieve your goals
          </TextElement>
        </Row>

        <Link
          href={PAGES_ROUTES.SERVICES}
          className="poppinsRegular cursor-pointer text-[10px] text-blue-800 underline md:text-[16px]"
        >
          View All
        </Link>
      </Row>
      <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {services.map(service => (
          <Card
            key={service.heading}
            className="gap-0 px-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <Row className="w-full items-center justify-between">
              <CardTitle className="poppins font-medium text-[#291c3a]">
                {service.heading}
              </CardTitle>

              <div className="flex size-[35px] items-center justify-center rounded-full bg-[#291c3a] shadow-sm md:size-[50px] lg:size-[50px]">
                <service.icon className="size-[25px] object-contain text-[#8121d0] md:size-[30px]" />
              </div>
            </Row>
          </Card>
        ))}
      </div>
    </Row>
  );
};

export default ServiceMeta;
