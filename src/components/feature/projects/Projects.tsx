"use client";

import { useState } from "react";
import ProjectsData from "@/assets/data/project.data";
import AnimatedIcon from "@/components/common/AnimatedIcon";
import Row from "@/components/common/Row";
import TextElement from "@/components/common/TextElement";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PiDiamondsFourFill } from "react-icons/pi";
import { FaRegCircleCheck } from "react-icons/fa6";

const ProjectSection = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <Row className="flex-col w-full space-y-3">
      <Row className="items-center gap-3 text-[#291c3a]">
        <AnimatedIcon Icon={PiDiamondsFourFill} />

        <Row className="flex-col gap-2 items-start md:items-center">
          <TextElement as="h2">Projects</TextElement>
          <TextElement as="p">
            Here are some of the projects I've been working on recently
          </TextElement>
        </Row>
      </Row>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3">
        {ProjectsData.map((project) => {
          const isExpanded = expandedId === project.id;
          const visibleContributions = isExpanded
            ? project.contributions
            : project.contributions.slice(0, 2);

          return (
            <Card
              key={project.id}
              className="w-full p-6 gap-3 rounded-2xl border border-gray-200 shadow-sm group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="p-0 w-full">
                <Row className="w-full flex-col justify-between items-start gap-2">
                  <Row className="w-full justify-between flex-col md:flex-row items-start md:items-center gap-2">
                    <CardTitle className="text-base text-[#291c3a]">
                      {project.name}
                    </CardTitle>

                    <Badge variant="secondary">{project.role}</Badge>
                  </Row>

                  <CardDescription>{project.description}</CardDescription>
                </Row>
              </CardHeader>

              <CardContent className="p-0 space-y-3">
                {/* Contributions */}
                <TextElement
                  as="h4"
                  className="text-[#291c3a] poppins text-sm font-semibold"
                >
                  Contributions:
                </TextElement>

                <Row className="flex-col items-start gap-2 text-sm text-gray-600 transition-all duration-300">
                  {visibleContributions.map((item, index) => (
                    <Row key={index} className="w-full gap-2">
                      <FaRegCircleCheck className="mt-1 text-green-600 shrink-0" />
                      <TextElement as="p">{item}</TextElement>
                    </Row>
                  ))}
                </Row>

                {/* View More Toggle */}
                {project.contributions.length > 2 && (
                  <button
                    onClick={() =>
                      setExpandedId(isExpanded ? null : project.id)
                    }
                    className="text-sm font-medium text-purple-600 hover:underline"
                  >
                    {isExpanded ? "View Less" : "View More"}
                  </button>
                )}

                {/* Tech Stack */}
                <Row className="flex-wrap gap-2 mt-3">
                  {project.techStacks.map((tech) => (
                    <Badge key={tech} variant="secondary">
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

export default ProjectSection;
