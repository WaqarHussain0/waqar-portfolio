import ExperienceData from "@/assets/data/experience.data";
import ServicesData from "@/assets/data/service.data";
import SkillsData from "@/assets/data/skill.data";
import Navbar from "@/components/common/Navbar";
import Row from "@/components/common/Row";
import ContactSection from "@/components/feature/home/Contant";
import ExperienceSection from "@/components/feature/home/Experience";
import HeaderSection from "@/components/feature/home/Header";
import ServicesSection from "@/components/feature/home/Services";
import TechnologiesSection from "@/components/feature/home/Technologies";

const Home = async () => {
  return (
    <Row className="w-full flex-col bg-[#e1ebed] space-y-4">
      <Row className="flex-col w-full">
        <Navbar className="" />

        <HeaderSection />
      </Row>
      <TechnologiesSection skills={SkillsData} />
      <ServicesSection services={ServicesData} />
      <ExperienceSection experiences={ExperienceData} />
      <ContactSection />
    </Row>
  );
};

export default Home;
