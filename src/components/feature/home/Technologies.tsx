import Row from "@/components/common/Row";

import { GrTechnology } from "react-icons/gr";

import TextElement from "@/components/common/TextElement";
import AnimatedIcon from "@/components/common/AnimatedIcon";
import { Card, CardTitle } from "@/components/ui/card";
import { ISkillCategory } from "@/assets/data/skill.data";

export interface ISkillData {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
}

interface ITechnologiesSectionProps {
  skills: ISkillCategory[];
}

const TechnologiesSection: React.FC<ITechnologiesSectionProps> = ({
  skills,
}) => {
  return (
    <Row className="w-full justify-center items-center">
      <Row className="w-full flex-col gap-3 items-center">
        {/* Header */}
        <Row className="flex-col gap-2 items-center text-[#291c3a]">
          <Row className="gap-2 items-center">
            <AnimatedIcon Icon={GrTechnology} />
            <TextElement as="h2">Technologies</TextElement>
          </Row>
          <TextElement as="p">
            Technologies I've been working with recently
          </TextElement>
        </Row>

        {/* Categories */}
        <Card className="w-full p-3 md:p-6  gap-3 bg-white">
          {skills.map((category) => (
            <div key={category.title} className="w-full">
              {/* Category Title */}
              <TextElement as="h3" className=" mb-2 text-[#291c3a]">
                {category.title}
              </TextElement>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {category.skills.map((skill) => (
                  <Card
                    key={skill.name}
                    className="p-5 w-full flex-col items-center justify-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <skill.icon className="size-[30px] md:size-[35px] text-[#211F20]" />
                    <CardTitle className="text-sm md:text-base font-medium text-center">
                      {skill.name}
                    </CardTitle>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </Card>
      </Row>
    </Row>
  );
};

export default TechnologiesSection;
