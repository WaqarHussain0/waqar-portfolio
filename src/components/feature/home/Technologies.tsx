/* eslint-disable react/no-unescaped-entities */

import Row from '@/components/common/Row';

import { GrTechnology } from 'react-icons/gr';

import TextElement from '@/components/common/TextElement';
import AnimatedIcon from '@/components/common/AnimatedIcon';
import { Card, CardTitle } from '@/components/ui/card';
import { ISkillCategory } from '@/assets/data/skill.data';

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
    <Row className="w-full items-center justify-center">
      <Row className="w-full flex-col items-center gap-3">
        {/* Header */}
        <Row className="flex-col items-center gap-2 text-[#291c3a]">
          <Row className="items-center gap-2">
            <AnimatedIcon Icon={GrTechnology} />
            <TextElement as="h2">Technologies</TextElement>
          </Row>
          <TextElement as="p">
            Technologies I've been working with recently
          </TextElement>
        </Row>

        {/* Categories */}
        <Card className="w-full gap-3 bg-white p-3 md:p-6">
          {skills.map(category => (
            <div key={category.title} className="w-full">
              {/* Category Title */}
              <TextElement as="h3" className="mb-2 text-[#291c3a]">
                {category.title}
              </TextElement>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
                {category.skills.map(skill => (
                  <Card
                    key={skill.name}
                    className="w-full flex-col items-center justify-center p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-5"
                  >
                    <skill.icon className="size-[30px] text-[#211F20] md:size-[35px]" />
                    <CardTitle className="text-center text-sm font-medium md:text-base">
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
