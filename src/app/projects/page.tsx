import Row from "@/components/common/Row";
import ProjectSection from "@/components/feature/projects/Projects";

export const metadata = {
  title: "Projects | Waqar Hussain Portfolio",
  description:
    "Explore projects by Waqar Hussain, showcasing scalable MERN stack applications, real-time systems, SaaS platforms, and ERP solutions.",
};

const Page = async () => {
  return (
    <Row className="w-full flex-col space-y-4">
      <ProjectSection />
    </Row>
  );
};

export default Page;
