import ServicesData from "@/assets/data/service.data";
import ServicesSection from "@/components/feature/services/Services";

const Page = async () => {
  return <ServicesSection services={ServicesData} />;
};

export default Page;
