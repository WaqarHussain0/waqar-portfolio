import { DiReact } from "react-icons/di";
import { SiNestjs } from "react-icons/si";
import { FaLaptopCode, FaLightbulb } from "react-icons/fa6";
import { IServicePoint } from "@/components/feature/services/Services";
import { MdScreenSearchDesktop } from "react-icons/md";

const ServicesData: IServicePoint[] = [
  {
    heading: "Frontend Engineering",
    icon: DiReact,
    points: [
      "Build production-grade React & Next.js platforms with scalable UI architecture",
      "Craft robust admin dashboards & ERP-style interfaces for complex workflows",
      "Deliver SEO-friendly SSR & SSG applications for high visibility",
      "Develop real-time user interfaces with WebSockets for live data systems",
      "Optimize performance with reusable, maintainable component design",
      "Implement responsive and accessible designs following WCAG guidelines",
      "Leverage component libraries and state management for faster feature delivery",
    ],
  },
  {
    heading: "Backend & System Architecture",
    icon: SiNestjs,
    points: [
      "Design robust REST & GraphQL APIs using Node.js and NestJS",
      "Implement secure multi-tenant system architecture with JWT & RBAC",
      "Build event-driven and real-time backend systems for operational data",
      "Design and optimize database schemas for performance (PostgreSQL, MongoDB)",
      "Structure backend for maintainability, security, and long-term scalability",
      "Implement caching, queueing, and background jobs for high-performance systems",
      "Monitor and log system health for production reliability",
    ],
  },
  {
    heading: "Full-Stack Product Delivery",
    icon: FaLaptopCode,
    points: [
      "Deliver end-to-end SaaS & ERP products from requirements to deployment",
      "Build healthcare systems with compliance awareness and secure workflows",
      "Automate business processes & internal workflows for operational efficiency",
      "Craft real-time analytics dashboards and scoring engines",
      "Deploy containerized production-ready systems with Docker and CI/CD",
      "Integrate third-party APIs, payment gateways, and external services",
      "Implement feature flagging and phased rollouts for safer deployments",
    ],
  },
  {
    heading: "Testing & Code Quality",
    icon: MdScreenSearchDesktop,
    points: [
      "Write unit, integration, and e2e tests using Jest & Supertest",
      "Perform code reviews and enforce best practices",
      "Ensure maintainable and reusable frontend & backend components",
      "Setup automated testing in CI/CD pipelines",
      "Debug, profile, and optimize app performance",
      "Maintain high code coverage while focusing on critical business flows",
      "Use type safety (TypeScript) to prevent runtime issues",
    ],
  },
  {
    heading: "Product & Technical Consulting",
    icon: FaLightbulb,
    points: [
      "Analyze business requirements and translate into scalable MERN solutions",
      "Design multi-tenant SaaS architectures tailored to client needs",
      "Advise on best practices for real-time, secure, and maintainable apps",
      "Improve internal workflows and reduce operational bottlenecks",
      "Conduct technical reviews to ensure product quality and scalability",
      "Recommend technology stacks and architecture patterns for future-proofing",
      "Provide guidance for DevOps, CI/CD, and production readiness",
    ],
  },
];

export default ServicesData;
