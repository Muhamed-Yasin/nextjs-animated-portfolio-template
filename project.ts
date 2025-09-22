// projects.ts
export type Project = {
  title: string;
  description: string;
  technologies: string[];
  link: string;
};

export const projects: Project[] = [
  {
    title: "Apoorv - Official College Fest App",
    description: "A comprehensive festival management app handling 10,000+ transactions for 1300+ users and 10+ shops. Features UPI-like point transfer, leaderboards, notifications, interactive maps, and secure admin authentication with shift-based access control.",
    technologies: ["Node.js", "Flutter", "MongoDB", "Firebase", "Docker", "Figma"],
    link: "https://github.com/Muhamed-Yasin/Apoorv-Backend",
  },
  {
    title: "AccessHub - User Management System",
    description: "A complete full-stack user management application with React frontend and Node.js backend. Features user CRUD operations, role assignment, and modern UI with React Hook Form.",
    technologies: ["React", "JavaScript", "Node.js", "Express", "React Hook Form"],
    link: "https://github.com/Muhamed-Yasin/AccessHub",
  },
  {
    title: "AutoGrader - AI Answer Sheet Corrector",
    description: "An intelligent automatic answer-sheet correction system that utilizes Natural Language Processing and Machine Learning techniques for accurate assessment.",
    technologies: ["Python", "NLP", "Machine Learning", "HTML", "CSS"],
    link: "https://github.com/Muhamed-Yasin/AutoGrader",
  },
  {
    title: "SunwayWebsite - Solar Energy Solutions",
    description: "A professional landing page website for a solar energy solutions company, featuring modern design and responsive layout.",
    technologies: ["JavaScript", "HTML", "CSS", "Responsive Design"],
    link: "https://github.com/Muhamed-Yasin/SunwayWebsite",
  },
  {
    title: "Family Association Website",
    description: "The official website of the Manath Peechampilly Family Unit featuring family history, events, and interactive family tree visualization using D3.js. A complete platform for community engagement and genealogical exploration.",
    technologies: ["JavaScript", "D3.js", "HTML", "CSS", "Family Tree Visualization"],
    link: "https://github.com/Muhamed-Yasin/FamilyAssociationWebsite",
  },
  {
    title: "Weather Finder App",
    description: "A browser-based weather application with external API integration, providing real-time weather information with a clean and intuitive interface.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Weather API", "OpenWeatherMap"],
    link: "https://github.com/Muhamed-Yasin/Weather-finder",
  },
];