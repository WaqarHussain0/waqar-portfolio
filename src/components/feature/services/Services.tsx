import Row from '@/components/common/Row';
import { PiDiamondsFourFill } from 'react-icons/pi';

import AnimatedIcon from '@/components/common/AnimatedIcon';
import TextElement from '@/components/common/TextElement';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { FaRegCircleCheck } from 'react-icons/fa6';

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
      <Row className="w-full flex-col items-center justify-between gap-4 px-2 md:px-0">
        <Row className="items-center gap-3 text-[#291c3a]">
          <AnimatedIcon Icon={PiDiamondsFourFill} />

          <Row className="flex-col items-start gap-2 md:items-center">
            <TextElement as="h2">Services</TextElement>
            <TextElement as="p">
              I provide a range of services to help you achieve your goals
            </TextElement>
          </Row>
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

              <Row className="mt-3 w-full flex-col gap-2">
                {service.points.map((point, idx) => (
                  <Row key={idx} className="w-full items-center gap-2">
                    <FaRegCircleCheck className="shrink-0 text-green-600" />
                    <CardDescription className="poppinsRegular">
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
