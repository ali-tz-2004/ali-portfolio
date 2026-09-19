export type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "E-Commerce Store",
    description:
      "A modern and responsive e-commerce frontend with product listing, search, filtering, sorting, pagination, cart, wishlist, theme switching, and persistent client-side state.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React Query",
      "Zustand",
      "shadcn/ui",
    ],
    githubUrl: "https://github.com/ali-tz-2004/ecommerce-front",
    liveUrl: "https://ecommerce-front-livid.vercel.app/",
  },
  {
    title: "Chess Game",
    description:
      "A two-player chess game built with React and TypeScript with move validation, check and checkmate detection, castling, pawn promotion, and animated interactions.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/ali-tz-2004/chess",
    liveUrl: "https://chess-theta-sand.vercel.app/",
  },
  {
    title: "2048 Game",
    description:
      "A browser-based implementation of the 2048 game built with React, featuring the classic tile-merging gameplay experience.",
    technologies: ["React"],
    githubUrl: "https://github.com/ali-tz-2004/game-2048",
    liveUrl: "https://game-2048-ten.vercel.app/",
  },
  {
    title: "Todo App",
    description:
      "A full-stack Todo application with functionality for creating, editing, completing, and deleting tasks.",
    technologies: ["React", "TypeScript", "Material UI", ".NET", "SQL Server"],
    githubUrl: "https://github.com/ali-tz-2004/ToDo",
    liveUrl: "https://to-do-three-liart.vercel.app/",
  },
  {
    title: "Calculator App",
    description:
      "A responsive calculator application with arithmetic operations and theme switching, built as a Frontend Mentor challenge.",
    technologies: ["React", "TypeScript", "CSS"],
    githubUrl: "https://github.com/ali-tz-2004/calculator-app-main",
    liveUrl: "https://calculator-app-main-livid.vercel.app/",
  },
  {
    title: "Multi-Step Form",
    description:
      "A responsive multi-step subscription form with editable steps, dark and light themes, and language selection.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/ali-tz-2004/multi-step",
  },
];
