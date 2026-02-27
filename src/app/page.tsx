import ExperienceData from "@/assets/data/experience.data";
import SkillsData from "@/assets/data/skill.data";
import Row from "@/components/common/Row";
import ExperienceSection from "@/components/feature/home/Experience";
import TechnologiesSection from "@/components/feature/home/Technologies";
import ProjectsData from "@/assets/data/project.data";
import ProjectMeta from "@/components/feature/home/ProjectMeta";
import ServiceMeta from "@/components/feature/home/ServiceMeta";

export const metadata = {
  title: "Home | Waqar Hussain Portfolio",
  description:
    "Hi, I'm Waqar Hussain – Full-Stack MERN Developer building scalable web apps, SaaS platforms, and real-time systems.",
};

const Page = () => {
  return (
    <Row className="w-full justify-center">
      <Row className="w-[98%] md:w-full flex-col space-y-4">
        <TechnologiesSection skills={SkillsData} />
        <ExperienceSection experiences={ExperienceData} />
        <ServiceMeta />
        <ProjectMeta projects={ProjectsData} />
      </Row>
    </Row>
  );
};

export default Page;
