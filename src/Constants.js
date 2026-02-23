import BOOKSCOUT from "./Assets/Projects/bookscout.png";
import BOOKIFY from "./Assets/Projects/bookify.png";
import DAILYQUESTION from "./Assets/Projects/dailyquestion.png";
import EMPLOYEESHIFT from "./Assets/Projects/employee-shift.png";

export const EXPERIENCE = [
  {
    company: "TeraForge Digital Lab",
    role: "Software Development Intern",
    duration: "Feb 2026 – Present",
    ongoing: true,
    description:
      "Working on real-world software development projects, collaborating with the team on building and maintaining digital solutions. Gaining hands-on experience in full-stack development, code reviews, and agile workflows.",
  },
];

export const PROJECTS = [
  {
    image: EMPLOYEESHIFT,
    name: "Employee Shift Scheduler — Full-Stack Web App",
    technologyUsed: "Vite, React, Express, MongoDB, JWT, Vercel",
    description: "A full-stack employee shift management application with authentication, role-based access control, and CRUD operations. Features user registration/login with JWTs, employee management, shift creation and editing, and admin-only protected routes.",
    whatILearned: "Role-based authentication and authorization, RESTful API design with Express, deployment strategies for separate frontend/backend services, and implementing secure middleware for protected routes.",
    url: "https://github.com/NikshitSaini/employee-shift",
  },
  {
    image: BOOKSCOUT,
    name: "BookScout — Full-Stack Mobile App",
    technologyUsed: "React Native (Expo), Node.js, Express, MongoDB, Zustand, JWT, Cloudinary",
    description: "A full-stack book review and rating application with authentication, community feeds, and user profiles. Features secure JWT-based authentication, image uploads via Cloudinary, and dark/light theme support.",
    whatILearned: "Full-stack architecture, secure JWT-based authentication, state management using Zustand, and scalable REST API backend development.",
    url: "https://github.com/NikshitSaini/bookScout",
  },
  {
    image: BOOKIFY,
    name: "Bookify — React Native App",
    technologyUsed: "React Native, Appwrite, Expo Router, Zustand",
    description: "A multi-platform book browsing and interaction app with offline-friendly UI. Users can create, edit, and comment on books, with likes & favorites system and smooth navigation using Expo Router.",
    whatILearned: "Backend-as-a-Service integration with Appwrite, optimizing mobile UI performance, and implementing robust navigation patterns.",
    url: "https://github.com/NikshitSaini/bookify",
  },
  {
    image: DAILYQUESTION,
    name: "Daily Question Counter — AI Web App",
    technologyUsed: "JavaScript, AI integration",
    description: "A productivity tool to track LeetCode progress and coding consistency. Features daily question tracking, streak & activity history, and AI-based improvement suggestions.",
    whatILearned: "Using AI for meaningful user insights, building habit-tracking systems, and creating data-driven productivity tools.",
    url: "https://github.com/NikshitSaini/Daily-Question-Counter",
  },
];

export const SKILLS = [
  // Programming Languages
  { name: "Python", initialRating: 4, category: "Programming" },
  { name: "C++", initialRating: 4, category: "Programming" },
  { name: "JavaScript", initialRating: 4, category: "Programming" },
  
  // Web & Mobile
  { name: "React Native (Expo)", initialRating: 4, category: "Web & Mobile" },
  { name: "Expo Router", initialRating: 4, category: "Web & Mobile" },
  { name: "Zustand", initialRating: 4, category: "Web & Mobile" },
  { name: "REST APIs", initialRating: 4, category: "Web & Mobile" },
  
  // Backend
  { name: "Node.js", initialRating: 4, category: "Backend" },
  { name: "Express.js", initialRating: 4, category: "Backend" },
  { name: "JWT Authentication", initialRating: 4, category: "Backend" },
  { name: "Cloudinary", initialRating: 3, category: "Backend" },
  
  // AI/ML
  { name: "Deep Learning", initialRating: 3, category: "AI/ML" },
  { name: "Computer Vision", initialRating: 3, category: "AI/ML" },
  { name: "OpenCV", initialRating: 3, category: "AI/ML" },
  
  // Databases
  { name: "MongoDB", initialRating: 4, category: "Databases" },
  { name: "MySQL", initialRating: 3, category: "Databases" },
  
  // Core Concepts
  { name: "Data Structures & Algorithms", initialRating: 4, category: "Core" },
  { name: "OOP", initialRating: 4, category: "Core" },
];

export const TOOLS = [
  "Visual Studio Code",
  "Git & GitHub",
  "Linux",
  "Chrome DevTools",
  "Npm (Node Package Manager)",
  "Postman"
];

export const ACHIEVEMENTS = [
  {
    title: "LeetCode Problem Solver",
    description: "Solved 300+ DSA problems on LeetCode",
    icon: "🧠",
  },
  {
    title: "Consistent Coder",
    description: "50-Day ×2 & 100-Day streak badges",
    icon: "🔥",
  },
  {
    title: "DCC March 2025",
    description: "Daily Coding Challenge badge",
    icon: "🏅",
  },
  {
    title: "NVIDIA Deep Learning",
    description: "Fundamentals of Deep Learning (2025)",
    icon: "📜",
  },
  {
    title: "Agentic AI Certification",
    description: "Agentic AI for Everyone (2025)",
    icon: "📜",
  },
];

export const EDUCATION = [
  {
    degree: "B.E. Artificial Intelligence & Data Science",
    institution: "D.Y. Patil College of Engineering, Pune",
    duration: "2023 – Present",
    cgpa: "8.69",
  },
  {
    degree: "Class XII – Science Stream",
    institution: "CBSE Board",
    duration: "2022",
    cgpa: "",
  },
];

export const INTERESTS = [
  "Open Source Contribution",
  "Competitive Programming",
  "Computer Vision",
  "Building Real-World Apps",
];
