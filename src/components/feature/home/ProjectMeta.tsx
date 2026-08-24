'use client';

import { useState } from 'react';
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

const renderWithPlaceholders = (text: string) => {
  const parts = text.split(/(\[NEED INFO:[^\]]*\])/g);
  return parts.map((part, i) =>
    part.startsWith('[NEED INFO:') ? (
      <span
        key={i}
        className="rounded border border-dashed border-amber-500 bg-amber-50 px-1 text-amber-700"
      >
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
};

const ProjectMeta: React.FC<IProjectMetaProps> = ({ projects }) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <Row id="selected-work" className="w-full flex-col space-y-3">
      <Row className="w-full items-end justify-between">
        <Row className="flex-col items-start gap-1 text-[#291c3a]">
          <Row className="gap-2">
            <AnimatedIcon Icon={PiDiamondsFourFill} />
            <TextElement as="h2">Selected Work</TextElement>
          </Row>

          <TextElement as="p">
            Full-stack ownership across two multi-tenant SaaS platforms and
            client projects
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
        {projects.slice(0, 6).map(project => {
          const isCaseStudy = Boolean(project.caseStudy);
          const isExpanded = expandedId === project.id;

          return (
            <Card
              key={project.id}
              className={`group w-full gap-3 rounded-2xl border border-gray-200 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                isCaseStudy ? 'md:col-span-3' : ''
              }`}
            >
              <CardHeader className="w-full p-0">
                <Row className="w-full flex-col items-start justify-between gap-2 md:gap-0">
                  <Row className="w-full flex-col items-start justify-between space-y-2">
                    <CardTitle className="text-base text-[#291c3a]">
                      {project.name}
                    </CardTitle>

                    <Badge variant="secondary">{project.role}</Badge>
                  </Row>
                </Row>
              </CardHeader>

              <CardContent className="m-0 space-y-3 p-0">
                {!isCaseStudy && (
                  <TextElement
                    as="p"
                    className="line-clamp-none text-[12px] text-[#211F20] md:text-[14px]"
                  >
                    {project.description}
                  </TextElement>
                )}

                {isCaseStudy && project.caseStudy && (
                  <>
                    <TextElement
                      as="p"
                      className="line-clamp-none text-[12px] text-[#211F20] md:text-[14px]"
                    >
                      {project.caseStudy.context}
                    </TextElement>

                    {isExpanded && (
                      <Row className="w-full flex-col items-start gap-3">
                        <Row className="w-full flex-col items-start gap-1">
                          <TextElement
                            as="h4"
                            className="poppins text-sm font-semibold text-[#291c3a]"
                          >
                            My Role & Scope
                          </TextElement>
                          <TextElement
                            as="p"
                            className="line-clamp-none text-[12px] text-[#211F20] md:text-[14px]"
                          >
                            {project.caseStudy.role}
                          </TextElement>
                        </Row>

                        <Row className="w-full flex-col items-start gap-1">
                          <TextElement
                            as="h4"
                            className="poppins text-sm font-semibold text-[#291c3a]"
                          >
                            Architecture
                          </TextElement>
                          <TextElement
                            as="p"
                            className="line-clamp-none text-[12px] text-[#211F20] md:text-[14px]"
                          >
                            {renderWithPlaceholders(project.caseStudy.architecture)}
                          </TextElement>
                        </Row>

                        {project.caseStudy.engineeringDecision && (
                          <Row className="w-full flex-col items-start gap-1">
                            <TextElement
                              as="h4"
                              className="poppins text-sm font-semibold text-[#291c3a]"
                            >
                              Engineering Decision
                            </TextElement>
                            <TextElement
                              as="p"
                              className="line-clamp-none text-[12px] text-[#211F20] md:text-[14px]"
                            >
                              {renderWithPlaceholders(
                                project.caseStudy.engineeringDecision,
                              )}
                            </TextElement>
                          </Row>
                        )}

                        <Row className="w-full flex-col items-start gap-1">
                          <TextElement
                            as="h4"
                            className="poppins text-sm font-semibold text-[#291c3a]"
                          >
                            Status
                          </TextElement>
                          <TextElement
                            as="p"
                            className="line-clamp-none text-[12px] text-[#211F20] md:text-[14px]"
                          >
                            {project.caseStudy.status}
                          </TextElement>
                        </Row>
                      </Row>
                    )}

                    <button
                      onClick={() =>
                        setExpandedId(isExpanded ? null : project.id)
                      }
                      className="poppinsRegular cursor-pointer text-sm font-medium text-purple-600 hover:underline"
                    >
                      {isExpanded ? 'Hide case study' : 'View case study'}
                    </button>
                  </>
                )}

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
          );
        })}
      </div>
    </Row>
  );
};

export default ProjectMeta;
