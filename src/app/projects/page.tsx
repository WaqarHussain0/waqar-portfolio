import Row from "@/components/common/Row";
import ProjectSection from "@/components/feature/projects/Projects";

const Page = async () => {
  return (
    <Row className="w-full flex-col space-y-4">
      <ProjectSection />
    </Row>
  );
};

export default Page;
