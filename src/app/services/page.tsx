import ServicesData from "@/assets/data/service.data";
import ServicesSection from "@/components/feature/services/Services";

export const metadata = {
  title: "Services | Waqar Hussain Portfolio",
  description:
    "Discover the services offered by Waqar Hussain: Full-Stack MERN development, multi-tenant SaaS architectures, real-time apps, ERP platforms, and technical consulting.",
};

const Page = async () => {
  return <ServicesSection services={ServicesData} />;
};

export default Page;
