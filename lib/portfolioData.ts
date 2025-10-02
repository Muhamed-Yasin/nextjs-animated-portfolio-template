// lib/portfolioData.ts
import { FaServer, FaCode, FaPaintBrush, FaDatabase, FaBrain, FaRocket, FaCog, FaLightbulb } from 'react-icons/fa';

export const heroSection = {
  greeting: "Hi, I'm",
  name: 'Muhamed Yasin',
  subtitle: 'Full Stack Developer & Technology Explorer',
  description: 'Passionate about exploring different technologies and frameworks. I love tinkering with code and building innovative solutions that create beautiful user experiences.',
  cta: [
    {
      label: 'View My Projects',
      href: '#projects',
      icon: '🚀',
    },
    {
      label: `Let's Connect`,
      href: '#contact',
      icon: '💬',
    }
  ],
  principles: [
    {
      icon: 'FaCheckCircle',
      title: 'Clean & Testable Code',
      description: 'I believe in writing code that is not just functional, but also maintainable and well-tested for future scalability.'
    },
    {
      icon: 'FaLightbulb',
      title: 'Pragmatic Problem-Solving',
      description: 'I enjoy tackling complex challenges and finding practical, effective solutions to real-world problems.'
    },
    {
      icon: 'FaBookOpen',
      title: 'Continuous Learning',
      description: 'I am passionate about learning new technologies and constantly improving my skills as a developer.'
    }
  ]
};
export const aboutSection = {
  paragraphs: [
    `My love for technology started early—playing FIFA on our old desktop with my brother, I'd wonder: "What if I could build something like this someday?" That curiosity led me to computer science, and I've been hooked on coding ever since.`,
    `What excites me most is seeing ideas come to life and that incredible rush when you finally solve a tricky problem. I'm a "jump right in" developer who loves exploring everything from backend systems to AI research.`
  ],
  highlight: {
    iconLeft: "⚽",
    text: "When I'm not coding, you'll find me watching football or movies of any genre.",
    iconRight: "🎬"
  },
  skills: [
    "C#", ".NET", "SQL Server", "Next.js", "React", "TypeScript", 
    "Tailwind CSS", "Git", "MongoDB", "Docker", "Node.js", "Python"
  ],
  skillIcons: {
    "C#": "🔷", ".NET": "⚡", "SQL Server": "🗃️", "Next.js": "▲",
    "React": "⚛️", "TypeScript": "📘", "Tailwind CSS": "🎨", "Git": "📋",
    "MongoDB": "🍃", "Docker": "🐳", "Node.js": "💚", "Python": "🐍"
  }
};

export const profile = {
  name: 'Muhamed Yasin',
  title: 'Full Stack Developer',
  location: 'Kochi, India',
  about: `Passionate about exploring different technologies and frameworks. I love tinkering with code and building innovative solutions that create beautiful user experiences.`,
  email: 'yasinmanath@gmail.com',
  phone: '+91 7306421010',
  social: {
    github: 'https://github.com/Muhamed-Yasin',
    linkedin: 'https://www.linkedin.com/in/muhamed-yasin',
    twitter: 'https://twitter.com/yasinmanath',
    medium: 'https://medium.com/@yasinmanath',
  },
};

export const coreCompetencies = [
  // --- CORE STRENGTHS ---
  {
    category: "Core Strengths",
    icon: FaServer,
    title: "Backend Development",
    description: "Building robust, scalable REST APIs and services with C# and the .NET ecosystem.",
    level: 5
  },
  {
    category: "Core Strengths",
    icon: FaDatabase,
    title: "Database Design",
    description: "Designing efficient SQL databases, and writing optimized queries and stored procedures.",
    level: 5
  },
  // --- PROFICIENT ---
  {
    category: "Proficient",
    icon: FaCog,
    title: "System Architecture",
    description: "Designing scalable, maintainable system architectures and microservices.",
    level: 4
  },
  {
    category: "Proficient",
    icon: FaCode,
    title: "Frontend Development",
    description: "Creating responsive and dynamic user interfaces with React, Next.js, and TypeScript.",
    level: 4
  },
  {
    category: "Proficient",
    icon: FaRocket,
    title: "DevOps & Deployment",
    description: "Docker containerization, CI/CD pipelines, and cloud deployment strategies.",
    level: 3
  },
  // --- EXPLORING ---
  {
    category: "Exploring",
    icon: FaBrain,
    title: "Machine Learning",
    description: "Exploring and implementing pre-trained models for practical applications.",
    level: 3
  },
  {
    category: "Exploring",
    icon: FaPaintBrush,
    title: "UI/UX Design",
    description: "A strong appreciation for user-centric design and creating intuitive layouts.",
    level: 3
  },
  {
    category: "Exploring",
    icon: FaLightbulb,
    title: "Innovation & Research",
    description: "Staying current with emerging technologies and best practices.",
    level: 4
  }
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Seaker Systems",
    period: "Feb 2025 – Present",
    duration: "Current",
    location: "Kochi, Kerala",
    description: "Full-Stack Development contributing to both frontend and backend systems, ensuring seamless integration between user-facing interfaces and backend services. Previously started as Frontend Developer Intern.",
    technologies: ["C#", ".NET", "ASP.NET Core", "React.js", "SQL", "Zustand", "Material UI", "KendoReact"],
    achievements: [
      "Built and maintained scalable RESTful APIs using ASP.NET Core",
      "Developed business logic and implemented secure, high-performance endpoints",
      "Created and optimized SQL stored procedures and queries for complex data operations",
      "Developed responsive, interactive UI components with efficient state management"
    ]
  },
  {
    role: "Freelance Web Developer",
    company: "Sunway Energy Solutions",
    period: "November 2024 - December 2024",
    duration: "2 months",
    location: "Remote",
    description: "Built and hosted a responsive ReactJS landing page with automated query handling and SEO optimization to enhance customer communication and search visibility.",
    technologies: ["ReactJS", "EmailJS", "SEO", "Custom Domain", "Responsive Design"],
    achievements: [
      "Built and hosted responsive ReactJS landing page on custom domain",
      "Integrated EmailJS for automated customer query responses",
      "Reduced response time by 40% through automation",
      "Improved search visibility driving 30% increase in organic traffic"
    ]
  },
  {
    role: "CTY Project Intern",
    company: "Hewlett Packard Enterprises",
    period: "January 2024 – June 2024",
    duration: "6 months",
    location: "Remote",
    description: "Developed CLI automation tools for HPE Performance Cluster Manager, improving testing coverage and streamlining data generation processes for enhanced bug reproduction and system monitoring.",
    technologies: ["CLI Development", "Automation", "Performance Monitoring", "Configuration Design", "Testing"],
    achievements: [
      "Created CLI to automate data generation and monitor creation",
      "Enhanced reproducibility of customer bugs reducing manual setup time by 30%",
      "Increased detection of critical issues by 40% and enhanced test coverage by 25%",
      "Designed custom syntax and parsing logic reducing configuration errors by 35%"
    ]
  },
  {
    role: "Frontend Developer Intern",
    company: "Seaker Systems",
    period: "June 2023 – August 2023",
    duration: "3 months",
    location: "Remote",
    description: "Developed responsive and interactive UI components for web applications using React.js, ensuring seamless integration with backend services and enhancing user experience.",
    technologies: ["React.js", "JavaScript", "Zustand", "Material UI", "KendoReact"],
    achievements: [
      "Implemented reusable components to improve development efficiency",
      "Collaborated with backend developers to integrate RESTful APIs",
      "Developed responsive, interactive UI components with efficient state management",
      "Optimized application performance and reduced load times"
    ]
  }
];

export const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Indian Institute of Information Technology Kottayam",
    period: "2021 - 2025",
    grade: "8.99/10 CGPA",
    description: "Focused on core computer science principles including data structures, algorithms, database management, and software engineering. Completed projects in web development and machine learning.",
    coursework: ["Data Structures & Algorithms", "Database Management", "Software Engineering", "Web Development", "Machine Learning", "Computer Networks"],
    achievements: [
      "Graduated with 8.99/10 CGPA",
      "Student Mess Secretary - Managed dining services for 1000+ students and faculty",
      "Placement Coordinator - Facilitated campus recruitment and student placements",
      "Club Leadership - Led multiple student community clubs and initiatives",
      "College Fest App Development - Led design team and contributed to backend development",
      "Final Year Project Leader - Led 4-member team in Kathakali pose classification research using ML"
    ],
    type: "degree"
  },
  {
    degree: "AWS Educate Introduction to Generative AI",
    institution: "Amazon Web Services (AWS)",
    period: "September 2025",
    grade: "Completed",
    description: "Comprehensive introduction to Generative AI concepts, applications, and AWS services for AI/ML workloads. Covered fundamental concepts and practical applications of generative AI technologies.",
    coursework: ["Generative AI Fundamentals", "AWS AI/ML Services", "AI Use Cases", "Ethical AI", "AI Applications"],
    achievements: [
      "Successfully completed AWS Educate certification program",
      "Gained knowledge of generative AI concepts and applications",
      "Learned AWS AI/ML service implementations"
    ],
    type: "certification"
  },
  {
    degree: "Hewlett Packard Enterprise - Software Engineering Job Simulation",
    institution: "Forage",
    period: "Aug 2024",
    grade: "Credential ID: YWiQfNthkhAwh3XGR",
    description: "Hands-on software engineering simulation program focusing on real-world HPE development practices, tools, and methodologies used in enterprise software development.",
    coursework: ["Enterprise Software Development", "HPE Tools & Practices", "Software Engineering Methodologies", "Performance Testing", "Code Quality"],
    achievements: [
      "Completed comprehensive software engineering simulation",
      "Gained practical experience with HPE development practices",
      "Demonstrated proficiency in enterprise software development"
    ],
    type: "certification"
  }
];
