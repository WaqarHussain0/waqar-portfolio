import {
  DiJsBadge,
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
    title: "Frontend",
    skills: [
      { name: "JavaScript", icon: DiJsBadge },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: DiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Redux", icon: SiRedux },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: DiNodejsSmall },
      { name: "Express", icon: SiExpress },
      { name: "NestJS", icon: SiNestjs },
      { name: "Socket.IO", icon: SiSocketdotio },
      { name: "GraphQL", icon: GrGraphQl },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: DiMongodb },
      { name: "MySQL", icon: GrMysql },
      { name: "PostgreSQL", icon: DiPostgresql },
    ],
  },
];

export default SkillsData;
