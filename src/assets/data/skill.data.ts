import {
  DiNodejsSmall,
  DiMongodb,
  DiPostgresql,
  DiReact,
} from "react-icons/di";

import {
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiNestjs,
  SiRedux,
  SiNextdotjs,
  SiSocketdotio,
  SiElectron,
  SiShadcnui,
} from "react-icons/si";

import { GrMysql, GrGraphQl } from "react-icons/gr";

export interface ISkillData {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface ISkillCategory {
  title: string;
  skills: ISkillData[];
}

const SkillsData: ISkillCategory[] = [
  {
    title: "Modern Frontend Systems",
    skills: [
      { name: "React", icon: DiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Redux", icon: SiRedux },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "ShadCN UI", icon: SiShadcnui },
    ],
  },
  {
    title: "Scalable Backend & Real-Time Systems",
    skills: [
      { name: "Node.js", icon: DiNodejsSmall },
      { name: "Express", icon: SiExpress },
      { name: "NestJS", icon: SiNestjs },
      { name: "GraphQL", icon: GrGraphQl },
      { name: "Socket.IO", icon: SiSocketdotio },
    ],
  },

  {
    title: "Database Architecture",
    skills: [
      { name: "MongoDB", icon: DiMongodb },
      { name: "PostgreSQL", icon: DiPostgresql },
      { name: "MySQL", icon: GrMysql },
    ],
  },
  {
    title: "Desktop & Cross-Platform Applications",
    skills: [{ name: "Electron", icon: SiElectron }],
  },
];

export default SkillsData;
