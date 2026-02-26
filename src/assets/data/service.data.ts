import { DiReact } from "react-icons/di";
import { SiNestjs } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa6";
import { IServicePoint } from "@/components/feature/services/Services";

const ServicesData: IServicePoint[] = [
  {
    heading: "Frontend Engineering",
    icon: DiReact,
    points: [
      "Scalable React & Next.js applications (App Router)",
      "Admin dashboards & ERP-style interfaces",
      "Server-side rendering (SSR) & static generation (SSG)",
      "Real-time UI updates using WebSockets",
      "Performance optimization & reusable component architecture",
    ],
  },
  {
    heading: "Backend & System Architecture",
    icon: SiNestjs,
    points: [
      "REST & GraphQL APIs with Node.js / NestJS",
      "Multi-tenant application architecture",
      "Role-based access control (RBAC) & JWT authentication",
      "Real-time systems with WebSockets (event-driven design)",
      "Database design & optimization (PostgreSQL, MongoDB)",
    ],
  },
  {
    heading: "Full Stack Product Development",
    icon: FaLaptopCode,
    points: [
      "End-to-end MERN stack SaaS & ERP platforms",
      "Healthcare & HIPAA-aware systems",
      "Construction ERP & workflow automation tools",
      "Real-time analytics & scoring engines",
      "Deployment-ready production setups (Docker, CI/CD)",
    ],
  },
];

export default ServicesData;