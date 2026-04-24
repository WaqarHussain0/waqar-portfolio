/* eslint-disable react/no-unescaped-entities */

'use client';

import { IProject } from '@/assets/data/project.data';
import AnimatedIcon from '@/components/common/AnimatedIcon';
import Row from '@/components/common/Row';
import TextElement from '@/components/common/TextElement';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PAGES_ROUTES } from '@/constants/page-route.constant';
import Link from 'next/link';
import { PiDiamondsFourFill } from 'react-icons/pi';

interface IProjectMetaProps {
  projects: IProject[];
}

const ProjectMeta: React.FC<IProjectMetaProps> = ({ projects }) => {
  return (
    <Row className="w-full flex-col space-y-3">
      <Row className="w-full items-end justify-between">
        <Row className="flex-col items-start gap-1 text-[#291c3a]">
          <Row className="gap-2">
            <AnimatedIcon Icon={PiDiamondsFourFill} />
            <TextElement as="h2">Projects</TextElement>
          </Row>

          <TextElement as="p">
            Here are some of the projects I've been working on recently
          </TextElement>
        </Row>

        <Link
          href={PAGES_ROUTES.PROJECTS}
          className="poppinsRegular cursor-pointer text-[10px] text-blue-800 underline md:text-[16px]"
        >
          View All
        </Link>
      </Row>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {projects.slice(0, 6).map(project => (
          <Card
            key={project.id}
            className="group w-full gap-3 rounded-2xl border border-gray-200 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <CardHeader className="w-full p-0">
              {/* Title + Status + Description*/}
              <Row className="w-full flex-col items-start justify-between gap-2 md:gap-0">
                <Row className="w-full flex-col items-start justify-between space-y-2">
                  <CardTitle className="text-base text-[#291c3a]">
                    {project.name}
                  </CardTitle>

                  <Badge variant="secondary" className="">
                    {project.role}
                  </Badge>
                </Row>
              </Row>
            </CardHeader>

            <CardContent className="m-0 p-0">
              {/* Tech Stack */}
              <Row className="mt-3 flex-wrap gap-2">
                {project.techStacks.map((tech: string) => (
                  <Badge key={tech} variant={'outline'}>
                    {tech}
                  </Badge>
                ))}
              </Row>
            </CardContent>
          </Card>
        ))}
      </div>
    </Row>
  );
};

export default ProjectMeta;
