"use client";
import AnimatedIcon from "@/components/common/AnimatedIcon";
import Row from "@/components/common/Row";
import TextElement from "@/components/common/TextElement";
import { Card, CardTitle } from "@/components/ui/card";
import { PAGES_ROUTES } from "@/constants/page-route.constant";
import { useRouter } from "next/navigation";
import { PiDiamondsFourFill } from "react-icons/pi";
import ServicesData from "@/assets/data/service.data";

const ServiceMeta = () => {
  const services = ServicesData;
  const router = useRouter();

  const handleViewAll = () => {
    router.push(PAGES_ROUTES.SERVICES);
  };
  return (
    <Row className="flex-col w-full space-y-3">
      <Row className="w-full justify-between items-end">
        <Row className="flex-col items-start gap-1 text-[#291c3a]">
          <Row className="gap-2">
            <AnimatedIcon Icon={PiDiamondsFourFill} />
            <TextElement as="h2">Services</TextElement>
          </Row>

          <TextElement as="p">
            I provide a range of services to help you achieve your goals
          </TextElement>
        </Row>
        <TextElement as="a" onClick={handleViewAll}>
          View All
        </TextElement>
      </Row>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {services.map((service) => (
          <Card
            key={service.heading}
            className="px-3 shadow-sm hover:shadow-md gap-0"
          >
            <Row className="w-full items-center justify-between">
              <CardTitle className="text-[#291c3a] poppins font-medium line-clamp-1">
                {service.heading}
              </CardTitle>

              <div className="bg-[#291c3a] shadow-sm flex size-[35px] md:size-[50px] lg:size-[50px] justify-center items-center rounded-full">
                <service.icon className="size-[25px] md:size-[30px]  object-contain text-[#8121d0]" />
              </div>
            </Row>
          </Card>
        ))}
      </div>
    </Row>
  );
};

export default ServiceMeta;
