const ProjectsData = [
  {
    id: 1,
    name: "Vanir Volcano – Internal Construction ERP Transformation",
    role: "Lead Full-Stack Engineer",
    description:
      "Designed and delivered a production-grade internal ERP platform replacing Excel-based estimation workflows. The system centralized vendor management, construction planning, takeoffs, and reporting while enforcing strict role-based access control to protect operational data.",
    techStacks: [
      "Next.js (App Router)",
      "NextAuth",
      "Tailwind CSS",
      "shadcn/ui",
      "NestJS",
      "TypeORM",
      "PostgreSQL",
      "JWT",
      "Docker",
    ],
    contributions: [
      "Led complete system architecture and full-stack development from requirement analysis to production deployment.",
      "Replaced manual Excel-based estimation processes with a centralized ERP system, significantly improving workflow efficiency and data reliability.",
      "Designed secure JWT-based RBAC system restricting functionality by user role (Admin, Estimator, Viewer).",
      "Engineered modular ERP components including vendor management, builder management, community planning, elevations, and construction takeoffs.",
      "Built a dynamic SKU-based pricing engine supporting multi-vendor cost comparison for accurate estimation workflows.",
      "Delivered production-ready Dockerized system 50% ahead of timeline with optimized indexed queries for scalable performance.",
    ],
  },

  {
    id: 2,
    name: "High-Performance Server-Side Grid Engine (AG Grid Optimization)",
    role: "Full-Stack Engineer",
    description:
      "Developed a reusable server-side grid engine to handle large datasets efficiently, migrating heavy client-side operations to backend-driven processing while removing dependency on licensed enterprise plugins.",
    techStacks: ["React.js", "AG Grid", "Tailwind CSS", "shadcn/ui"],
    contributions: [
      "Migrated client-heavy grid operations to a scalable server-side model to support large datasets.",
      "Reduced grid load time by approximately 40% through optimized rendering and data batching strategies.",
      "Implemented advanced grid capabilities including filtering, sorting, pagination, aggregation, pivoting, and global search without paid extensions.",
      "Built reusable, configurable grid utilities adopted across multiple internal applications.",
      "Enabled CSV and Excel export for large datasets while maintaining performance efficiency.",
      "Eliminated enterprise licensing dependency, reducing recurring operational costs.",
    ],
  },

  {
    id: 3,
    name: "PureCS – Rule-Based Lab Report Automation Platform",
    role: "Full-Stack Engineer",
    description:
      "Contributed to an intranet healthcare system enabling automated processing of patient lab reports through CSV/XLS ingestion, rule-based validation, and real-time analytics dashboards.",
    techStacks: [
      "Next.js (App Router)",
      "Tailwind CSS",
      "NestJS",
      "TypeORM",
      "PostgreSQL",
      "JWT",
    ],
    contributions: [
      "Enhanced and extended production Next.js modules to improve workflow usability and system stability.",
      "Designed REST APIs powering dynamic dashboards for real-time statistical insights.",
      "Implemented rule-based data processing logic to automate CSV/XLS lab report ingestion.",
      "Optimized backend queries and resolved performance bottlenecks to improve processing efficiency.",
      "Collaborated closely with stakeholders to refine complex healthcare business rules.",
    ],
  },

  {
    id: 4,
    name: "Medical Equipment Real-Time Tracking & Audit System",
    role: "Full-Stack Engineer",
    description:
      "Built a real-time equipment tracking system enabling healthcare facilities to log tool usage during treatments, monitor inventory, and maintain structured audit histories.",
    techStacks: [
      "Next.js (App Router)",
      "Tailwind CSS",
      "NestJS",
      "GraphQL",
      "Apollo Server",
      "TypeORM",
      "PostgreSQL",
      "JWT",
      "WebSockets",
    ],
    contributions: [
      "Developed secure backend APIs using NestJS and GraphQL for structured equipment data management.",
      "Integrated WebSocket-based real-time updates for live tool usage tracking.",
      "Designed relational database schema to ensure complete audit traceability.",
      "Built intuitive admin dashboards for inventory monitoring and lifecycle tracking.",
      "Implemented automated email alerts for critical equipment events.",
    ],
  },

  {
    id: 5,
    name: "MMA – HIPAA-Compliant Patient Management Platform",
    role: "Backend Engineer",
    description:
      "Contributed to a mature HIPAA-compliant healthcare platform supporting ADHD patient management, appointment scheduling, and secure medical record integrations.",
    techStacks: ["NestJS", "Node.js", "Express.js", "PostgreSQL", "TypeORM"],
    contributions: [
      "Maintained and optimized backend APIs to improve system reliability and performance.",
      "Developed automated appointment reminder and notification services.",
      "Integrated third-party healthcare systems (including DrChrono) for secure patient record synchronization.",
      "Resolved production-critical issues and supported compliance-driven enhancements.",
      "Improved backend maintainability through structured service-layer refactoring.",
    ],
  },

  {
    id: 6,
    name: "Racepark – Real-Time Multiplayer Scoring & Event Engine",
    role: "Full-Stack Engineer",
    description:
      "Developed a real-time racing statistics and scoring system deployed across multiple Racepark venues, processing live gameplay events and broadcasting instant score updates to players and administrators.",
    techStacks: [
      "React.js",
      "Tailwind CSS",
      "NestJS",
      "WebSockets",
      "MongoDB",
      "Mongoose",
    ],
    contributions: [
      "Designed event-driven backend architecture to process live gameplay events in real time.",
      "Implemented configurable scoring engine allowing dynamic rule adjustments by non-technical admins.",
      "Built WebSocket-based broadcasting system delivering instant score updates across gaming stations.",
      "Developed customer-facing React application for live race statistics display.",
      "Built admin dashboard for scoring rule management and operational configuration.",
      "Supported deployment across four physical Racepark venues.",
    ],
  },
];

export default ProjectsData;
