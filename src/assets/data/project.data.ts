const ProjectsData = [
  {
    id: 1,
    name: "Vanir Volcano (Construction ERP)",
    role: "Full Stack Developer",
    description:
      "Vanir Volcano is a custom-built Construction ERP system developed for internal organizational use to streamline estimation, vendor coordination, and builder workflows. The platform centralizes construction planning, cost estimation, and reporting while enforcing strict role-based access control.",
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
      "End-to-End Ownership: Solely handled frontend and backend development, client communication, and collaborated closely with QA to validate system flows.",
      "Role-Based Access Control: Implemented secure access for Admin, Estimator, and Viewer roles using JWT-based authentication.",
      "Core ERP Modules: Developed Vendor Management, Builder Management, Community, Plan, and Elevation management modules.",
      "Advanced Cost Estimation: Built a flexible estimation engine with SKU-based pricing, allowing a single SKU to be offered by multiple vendors at different prices.",
      "Takeoff Management: Implemented construction takeoff workflows to support accurate material and cost calculations.",
      "Data Import & Export: Enabled CSV-based SKU imports and exportable reports for operational and financial insights.",
      "Reporting & Auditing: Designed detailed reports and application-wide activity logs to track user actions across the system.",
      "Performance & Architecture: Ensured clean, maintainable architecture with optimized database queries and scalable module design.",
      "Deployment: Dockerized the application for consistent and reliable deployments.",
      "Delivered in 2 months (50% ahead of 4-month timeline)",
      "Designed modular architecture with optimized queries and indexing for scalable ERP workflows",
    ],
  },

  {
    id: 2,
    name: "AG Grid Custom Plugin (Server-Side Grid Optimization)",
    role: "Full-Stack Developer",
    description:
      "Developed a custom AG Grid plugin for internal applications at Techverx, focused on moving heavy data operations from the client side to a server-side grid model. The goal was to improve performance on large datasets while eliminating dependency on paid grid extensions.",
    techStacks: ["React.js", "AG Grid", "Tailwind CSS", "shadcn/ui"],
    contributions: [
      "Client → Server-Side Migration: Refactored existing client-side grid logic to a server-side model, improving performance and scalability.",
      "Performance Optimization: Reduced grid load time by approximately 40% by optimizing rendering and data handling.",
      "Advanced Grid Features: Implemented server-side filtering, global search, pagination, sorting, pivoting, and aggregation without using paid plugins.",
      "Export Functionality: Built CSV/Excel export capabilities for large datasets.",
      "Frontend Architecture: Designed reusable, configurable grid utilities to be used across multiple internal applications.",
      "React Optimization: Improved rendering efficiency using useMemo, useCallback, and component-level optimizations.",
      "Cost Optimization: Removed dependency on licensed tools, resulting in reduced ongoing licensing costs for internal products.",
      "Collaboration & Testing: Integrated APIs from existing backends for testing and validation of server-side grid behavior.",
    ],
  },

  {
    id: 3,
    name: "PureCS",
    role: "Full-Stack Developer",
    description:
      "The application involved developing an intranet application designed to streamline the processing of patient-related lab reports. Dedicated users could upload CSV or XLS files containing patient and test information and payment details, apply predefined business rules, or create custom rules to process the data efficiently. The application also featured dynamic dashboards for quick visualization of key statistics.",
    techStacks: [
      "Next.js (App Router)",
      "Tailwind CSS",
      "NestJS",
      "TypeORM",
      "PostgreSQL",
      "JWT",
    ],
    contributions: [
      "Frontend Development: Managed and enhanced existing Next.js modules, developed new features, and ensured a responsive, user-friendly UI using Tailwind CSS.",
      "Backend Development: Designed and implemented REST APIs for dashboards, enabling real-time data visualization.",
      "Business Logic Implementation: Assisted in processing uploaded CSV/XLS files, applying complex custom business rules for lab report automation.",
      "Optimization & Debugging: Identified and fixed UI/UX bottlenecks and backend inefficiencies to improve system performance and usability.",
    ],
  },

  {
    id: 4,
    name: "CSV – Medical Equipment Tracking System",
    role: "Full-Stack Developer",
    description:
      "CSV is a medical equipment tracking system designed to monitor the usage of tools during treatment processes. The platform ensures accurate logging of each action taken on medical tools, helping healthcare facilities maintain detailed equipment histories.",
    techStacks: [
      "Next.js (App Router)",
      "Tailwind CSS",
      "NestJS",
      "TypeORM",
      "PostgreSQL",
      "JWT",
      "GraphQL",
      "Appollo Server",
    ],
    contributions: [
      "Backend Development & Data Management: Built and maintained the backend using Express.js, PostgreSQL, and TypeORM, ensuring reliable data storage and retrieval.",
      "Real-Time Equipment Tracking: Integrated WebSockets to provide real-time updates whenever an action was performed on a tool during treatment.",
      "Frontend Development: Developed and enhanced the Next.js frontend with Tailwind CSS, implementing an intuitive UI for admins to manage tools and track real-time usage.",
      "Inventory Management & Notifications: Added functionalities for inventory tracking and tool management, along with email alerts using Nodemailer to notify admins of critical updates.",
    ],
  },

  {
    id: 5,
    name: "Millennium Medical Associates - HIPAA-Compliant ADHD Patient Management Platform",
    role: "Backend Developer",
    description:
      "Millennium Medical Associates (MMA) is a HIPAA-compliant patient management platform designed to streamline appointment scheduling, patient records management, and communication between healthcare providers and patients. The system integrates with third-party services like DrChrono to maintain accurate patient records and medical history.",
    techStacks: ["NestJS", "Node.js", "Express.js"],
    contributions: [
      "Backend Development & System Optimization: Managed and optimized the Express.js backend with TypeORM and PostgreSQL, ensuring seamless data processing and system performance.",
      "Automated Notifications & Email System: Developed appointment alert reminders and communications using Nodemailer, improving scheduling efficiency and patient engagement.",
      "Third-Party Integrations: Assisted in integrating DrChrono and other external healthcare systems for accurate patient records and secure data exchange.",
      "Bug Fixing & Compliance Support: Identified and resolved critical bugs reported by the QA team, ensuring smooth operation and adherence to HIPAA compliance standards.",
    ],
  },

  {
    id: 6,
    name: "Racepark (Real-Time Racing Statistics Portal)",
    role: "Full-Stack Developer",
    description:
      "Racepark is a real-time racing statistics and scoring platform used in a physical gaming station environment. The system consists of a NestJS backend, a customer-facing React application for live score display, and an admin React application used to manage and configure the scoring logic dynamically. The platform processes live gameplay events and calculates scores in real time based on configurable rules, enabling players to instantly see their performance during races.",
    techStacks: [
      "React.js",
      "Tailwind CSS",
      "NestJS",
      "WebSockets",
      "MongoDB",
      "Mongoose",
    ],
    contributions: [
      "Multi-App Architecture: Contributed across all three layers — backend, customer app, and admin app — ensuring seamless real-time communication.",
      "Backend Development: Built event-driven APIs and WebSocket handlers in NestJS to process live game events and compute player scores.",
      "Real-Time Scoring Engine: Implemented scoring logic based on gameplay events such as collisions and player crossovers, with per-event score weights.",
      "Admin Scoring Management: Developed an admin React application allowing non-technical users to configure scoring rules (e.g., crossing a player +100, collision −100).",
      "WebSocket Communication: Implemented real-time data broadcasting to push live scores and updates to connected clients.",
      "Customer App (React): Built a responsive UI to display live race statistics and scores during gameplay at gaming stations.",
      "Data Persistence: Used MongoDB to store game sessions, player data, and scoring configurations.",
      "Collaboration & R&D: Actively participated in requirement analysis and R&D over a ~6-month development cycle.",
    ],
  },
];

export default ProjectsData;
