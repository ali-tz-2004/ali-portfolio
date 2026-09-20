export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  responsibilities: string[];
};

export const experiences: Experience[] = [
  {
    company: "Freelance",
    role: "Full Stack Developer",
    period: "Dec 2024 – Present",
    description:
      "Maintaining and enhancing enterprise web applications while implementing new business features and improving existing systems.",
    technologies: [
      ".NET Framework",
      "Entity Framework",
      "C#",
      "Message Broker",
      "SQL Server",
      "Angular",
      "i18next",
    ],
    responsibilities: [
      "Maintained and enhanced legacy applications built with .NET Framework 4.8 and Angular 9.",
      "Implemented internationalization using i18next.",
      "Developed email notification workflows using a Message Broker architecture.",
      "Fixed bugs, improved application performance, and implemented new business features.",
    ],
  },
  {
    company: "Rayanesh Abri Dina",
    role: "React Developer",
    period: "Jun 2025 – Apr 2026",
    description:
      "Developed modern web applications and frontend architectures using React, Next.js, and TypeScript.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "SCSS",
      "Redux",
      "Capacitor",
    ],
    responsibilities: [
      "Developed React and Next.js applications using TypeScript.",
      "Worked on AI Chat and Document Controller applications.",
      "Established the base architecture for Next.js projects.",
      "Built responsive landing pages and improved frontend performance.",
      "Contributed to Android applications using Capacitor.",
    ],
  },
  {
    company: "Tosee Garan Azarbaijan",
    role: "Full Stack Developer",
    period: "Jun 2023 – Nov 2024",
    description:
      "Developed enterprise web applications using Angular, ASP.NET, and SQL Server for different organizations.",
    technologies: [
      "Angular",
      "ASP.NET",
      "C#",
      "Entity Framework",
      "SQL Server",
      "Stimulsoft",
      "Google Maps",
    ],
    responsibilities: [
      "Developed frontend applications using Angular.",
      "Built REST APIs using ASP.NET and Entity Framework.",
      "Worked with SQL Server databases and enterprise data.",
      "Developed and maintained systems for municipalities and other organizations.",
      "Implemented reports using Stimulsoft.",
      "Integrated Google Maps into web applications.",
      "Collaborated with cross-functional teams to deliver business features.",
    ],
  },
];
