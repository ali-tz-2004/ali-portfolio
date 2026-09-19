export type Service = {
  number: string;
  title: string;
  description: string;
  technologies: string[];
};

export const services: Service[] = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building modern and maintainable frontend applications with React, Next.js, Angular, and TypeScript.",
    technologies: ["React", "Next.js", "Angular", "TypeScript"],
  },
  {
    number: "02",
    title: "Web Application Development",
    description:
      "Developing scalable web applications with clean architecture, reusable components, and responsive interfaces.",
    technologies: ["React", "Next.js", "Angular", "SCSS"],
  },
  {
    number: "03",
    title: "API Integration",
    description:
      "Connecting frontend applications to REST APIs and backend services with reliable data handling and authentication.",
    technologies: ["REST API", "ASP.NET Core", "JWT", "React Query"],
  },
  {
    number: "04",
    title: "Bug Fixing & Maintenance",
    description:
      "Debugging existing applications, fixing frontend and integration issues, and improving application stability and performance.",
    technologies: ["Debugging", "Performance", "Angular", "React"],
  },
  {
    number: "05",
    title: "Responsive UI Development",
    description:
      "Creating responsive and accessible interfaces that provide a consistent experience across desktop, tablet, and mobile devices.",
    technologies: ["Responsive Design", "SCSS", "CSS", "TypeScript"],
  },
];
