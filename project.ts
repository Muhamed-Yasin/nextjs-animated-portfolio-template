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
    description: "Architected a high-throughput festival management system processing 10,000+ transactions for 1,300+ users. Engineered secure UPI-style point transfers and implemented shift-based role access control.",
    technologies: ["Node.js", "Flutter", "MongoDB", "Firebase", "Docker", "Figma"],
    link: "https://github.com/Muhamed-Yasin/Apoorv-Backend",
  },
  {
    title: "AccessHub - User Management System",
    description: "Engineered a full-stack CRUD application focused on efficient state management and optimized query routing. Implemented secure role assignment and reduced form-handling overhead using React Hook Form.",
    technologies: ["React", "JavaScript", "Node.js", "Express", "React Hook Form"],
    link: "https://github.com/Muhamed-Yasin/AccessHub",
  },
  {
    title: "AutoGrader - AI Answer Sheet Corrector",
    description: "Developed an intelligent assessment engine utilizing Natural Language Processing (NLP) and Machine Learning to automate grading, significantly reducing manual assessment time while maintaining high accuracy.",
    technologies: ["Python", "NLP", "Machine Learning", "HTML", "CSS"],
    link: "https://github.com/Muhamed-Yasin/AutoGrader",
  },
  {
    title: "Sunway - Solar Energy Solutions",
    description: "Designed and deployed a high-conversion, responsive landing page for a commercial client. Focused on SEO best practices and cross-device performance to drive customer acquisition.",
    technologies: ["JavaScript", "HTML", "CSS", "Responsive Design"],
    link: "https://github.com/Muhamed-Yasin/SunwayWebsite",
  },
  {
    title: "Family Association Website",
    description: "Built an interactive genealogical platform integrating D3.js to render complex family tree visualizations from relational datasets, driving community engagement through a modern UI.",
    technologies: ["JavaScript", "D3.js", "HTML", "CSS", "Family Tree Visualization"],
    link: "https://github.com/Muhamed-Yasin/FamilyAssociationWebsite",
  },
  {
    title: "Weather Finder App",
    description: "Integrated third-party REST APIs to deliver real-time, asynchronous weather tracking. Built a clean, intuitive interface focused on fast load times and error handling for external data fetches.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Weather API", "OpenWeatherMap"],
    link: "https://github.com/Muhamed-Yasin/Weather-finder",
  },
];