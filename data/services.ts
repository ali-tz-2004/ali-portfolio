export type Service = {
  number: string;
  title: string;
  description: string;
  technologies: string[];
};

export const services: Service[] = [
  {
    number: "01",
    title: "Full Stack Web Development",
    description:
      "Building complete web applications from frontend interfaces to backend APIs and databases, with a focus on maintainability, scalability, and performance.",
    technologies: ["React", "Next.js", ".NET", "SQL Server"],
  },
  {
    number: "02",
    title: "Frontend Development",
    description:
      "Creating modern, responsive, and maintainable user interfaces with reusable components and a focus on usability and performance.",
    technologies: ["React", "Next.js", "Angular", "TypeScript"],
  },
  {
    number: "03",
    title: "Backend & API Development",
    description:
      "Developing reliable backend services and REST APIs with secure authentication, structured business logic, and efficient database integration.",
    technologies: [".NET", "C#", "REST API", "Entity Framework Core"],
  },
  {
    number: "04",
    title: "API Integration",
    description:
      "Integrating frontend applications with existing APIs and backend services, including authentication, data handling, and error management.",
    technologies: ["REST API", "JWT", "React Query", "Angular"],
  },
  {
    number: "05",
    title: "Bug Fixing & Maintenance",
    description:
      "Diagnosing and resolving application issues, improving performance, and maintaining existing web applications to keep them reliable and stable.",
    technologies: ["Debugging", "Performance", "React", "Angular"],
  },
];
