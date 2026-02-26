import { TbPoint } from "react-icons/tb";
import Row from "@/components/common/Row";
import { PiDiamondsFourFill } from "react-icons/pi";

import AnimatedIcon from "@/components/common/AnimatedIcon";
import TextElement from "@/components/common/TextElement";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { FaRegCircleCheck } from "react-icons/fa6";

export interface IServicePoint {
  heading: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  points: string[];
}

interface IServicesSectionProps {
  services: IServicePoint[];
}

const ServicesSection: React.FC<IServicesSectionProps> = ({ services }) => {
  return (
    <Row id="service" className="w-full justify-center">
      <Row className="px-2 md:px-0 w-full flex-col justify-between items-center gap-4">
        <Row className="items-center gap-3 text-[#291c3a]">
          <AnimatedIcon Icon={PiDiamondsFourFill} />

          <Row className="flex-col gap-2 items-start md:items-center">
            <TextElement as="h2">Services</TextElement>
            <TextElement as="p">
              I provide a range of services to help you achieve your goals
            </TextElement>
          </Row>
        </Row>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((service) => (
            <Card
              key={service.heading}
              className="px-3 shadow-sm gap-0 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <Row className="w-full items-center justify-between">
                <CardTitle className="text-[#291c3a] poppins font-medium">
                  {service.heading}
                </CardTitle>

                <div className="bg-[#291c3a] shadow-sm flex size-[35px] md:size-[50px] lg:size-[50px] justify-center items-center rounded-full">
                  <service.icon className="size-[25px] md:size-[30px]  object-contain text-[#8121d0]" />
                </div>
              </Row>

              <Row className="w-full flex-col gap-2 mt-3">
                {service.points.map((point, idx) => (
                  <Row key={idx} className="items-center w-full gap-2">
                    <FaRegCircleCheck className="mt-1 text-green-600 shrink-0" />
                    <CardDescription className="poppinsRegular ">
                      {point}
                    </CardDescription>
                  </Row>
                ))}
              </Row>
            </Card>
          ))}
        </div>
      </Row>
    </Row>
  );
};

export default ServicesSection;
