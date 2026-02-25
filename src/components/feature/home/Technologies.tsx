import Row from "@/components/common/Row";

import { GrTechnology } from "react-icons/gr";

import TextElement from "@/components/common/TextElement";
import AnimatedIcon from "@/components/common/AnimatedIcon";
import { Card, CardTitle } from "@/components/ui/card";

export interface ISkillData {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
}

interface ITechnologiesSectionProps {
  skills: ISkillData[];
}

const TechnologiesSection: React.FC<ITechnologiesSectionProps> = ({
  skills,
}) => {
  return (
    <Row className="w-full justify-center items-center">
      <Row className=" md:px-0 w-full flex-col justify-between gap-4 items-center   ">
        <Row className="items-center gap-3 text-[#291c3a]">

          <Row className="flex-col gap-2 items-start md:items-center">

            <Row className="gap-2">
          <AnimatedIcon Icon={GrTechnology} />

            <TextElement as="h2">Technologies</TextElement>
            </Row>
            <TextElement as="p">I've been working with recently</TextElement>
          </Row>
        </Row>

        <div className="w-full flex flex-wrap justify-between gap-2 md:gap-3">
          {skills.map((val) => (
            <Card
              key={val.name}
              className="p-6 w-[48%] md:w-[18%] flex-col items-center  justify-center"
            >
              <CardTitle className="poppins font-medium text-[#291c3a] text-center">
                {val.name}
              </CardTitle>

              <val.icon className="size-[25px] md:size-[30px] lg:size-[40px] object-contain text-[#211F20] " />
            </Card>
          ))}
        </div>
      </Row>
    </Row>
  );
};

export default TechnologiesSection;
