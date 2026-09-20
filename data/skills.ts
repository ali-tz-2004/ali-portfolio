export type SkillCategory = {
  title: string;
  description: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Modern frontend development and responsive web applications.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Angular",
      "SCSS",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    description: "Building APIs, backend applications and business logic.",
    skills: [
      "ASP.NET Core",
      "C#",
      "Entity Framework Core",
      "REST API",
      "JWT Authentication",
    ],
  },
  {
    title: "Database & State",
    description:
      "Managing application state and working with application data.",
    skills: ["SQL Server", "Redux Toolkit"],
  },
  {
    title: "Tools",
    description:
      "Tools and technologies used throughout the development workflow.",
    skills: ["Git", "Capacitor", "Stimulsoft"],
  },
];
