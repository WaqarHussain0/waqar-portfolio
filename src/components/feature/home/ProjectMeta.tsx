"use client";

import AnimatedIcon from "@/components/common/AnimatedIcon";
import Row from "@/components/common/Row";
import TextElement from "@/components/common/TextElement";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PAGES_ROUTES } from "@/constants/page-route.constant";
import { useRouter } from "next/navigation";
import { PiDiamondsFourFill } from "react-icons/pi";

interface IProjectMetaProps {
  projects: any[];
}

const ProjectMeta: React.FC<IProjectMetaProps> = ({ projects }) => {
  const router = useRouter();

  const handleViewAll = () => {
    router.push(PAGES_ROUTES.PROJECTS);
  };
  // PAGES_ROUTES
  return (
    <Row className="flex-col w-full space-y-3">
      <Row className="w-full justify-between items-end">
        <Row className="flex-col items-start gap-1 text-[#291c3a]">
          <Row className="gap-2">
            <AnimatedIcon Icon={PiDiamondsFourFill} />
            <TextElement as="h2">Projects</TextElement>
          </Row>

          <TextElement as="p">
            Here are some of the projects I've been working on recently
          </TextElement>
        </Row>
        <TextElement as="a" onClick={handleViewAll}>
          View All
        </TextElement>
      </Row>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-3">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="w-full p-6 gap-3 rounded-2xl border border-gray-200 shadow-sm  group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <CardHeader className="p-0 w-full ">
              {/* Title + Status + Description*/}
              <Row className="w-full flex-col justify-between items-start gap-2 md:gap-0">
                <Row className="w-full justify-between space-y-2 flex-col md:flex-row items-start ">
                  <CardTitle className="text-base text-[#291c3a]">
                    {project.name}
                  </CardTitle>

                  <Badge variant="secondary" className="">
                    {project.role}
                  </Badge>
                </Row>
              </Row>
            </CardHeader>

            <CardContent className="p-0 m-0">
              {/* Tech Stack */}
              <Row className="flex-wrap gap-2 mt-3">
                {project.techStacks.map((tech: string) => (
                  <Badge key={tech} variant={"outline"}>
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
