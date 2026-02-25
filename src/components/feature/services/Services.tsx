import { TbPoint } from "react-icons/tb";
import Row from "@/components/common/Row";
import { PiDiamondsFourFill } from "react-icons/pi";

import AnimatedIcon from "@/components/common/AnimatedIcon";
import TextElement from "@/components/common/TextElement";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

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

              <Row className="flex-col gap-2">
                {service.points.map((point, idx) => (
                  <Row key={idx} className="items-center w-full">
                    <TbPoint size={25} className="text-[#291c3a]" />
                    <CardDescription className="line-clamp-1 poppinsRegular ">
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
