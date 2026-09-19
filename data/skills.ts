export type SkillCategory = {
  title: string;
  description: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Modern frontend development and responsive UI.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Angular",
      "JavaScript",
      "HTML",
      "CSS",
      "SCSS",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    description: "Building APIs and backend applications.",
    skills: [
      "ASP.NET Core",
      "C#",
      "Entity Framework Core",
      "REST API",
      "JWT Authentication",
    ],
  },
  {
    title: "State & Data",
    description: "Managing application state and data.",
    skills: ["Redux Toolkit", "SQL Server", "EF Core"],
  },
  {
    title: "Tools",
    description: "Development workflow and supporting tools.",
    skills: ["Git", "Stimulsoft", "Capacitor"],
  },
];
