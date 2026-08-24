import ExperienceData from '@/assets/data/experience.data';
import SkillsData from '@/assets/data/skill.data';
import Row from '@/components/common/Row';
import ExperienceSection from '@/components/feature/home/Experience';
import TechnologiesSection from '@/components/feature/home/Technologies';
import ProjectsData from '@/assets/data/project.data';
import ProjectMeta from '@/components/feature/home/ProjectMeta';

export const metadata = {
  title: 'Home | Waqar Hussain Portfolio',
  description:
    'Waqar Hussain - Full-Stack Software Engineer building multi-tenant SaaS platforms and real-time systems in production.',
};

const Page = () => {
  return (
    <Row className="w-full justify-center">
      <Row className="w-[98%] flex-col space-y-4 md:w-full">
        <TechnologiesSection skills={SkillsData} />
        <ExperienceSection experiences={ExperienceData} />
        <ProjectMeta projects={ProjectsData} />
      </Row>
    </Row>
  );
};

export default Page;
