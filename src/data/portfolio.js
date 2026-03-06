import {
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  MailOutlined,
  CodeOutlined,
  CloudServerOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import avatarImg from "../assets/1704700781885.jpg";

export const personalInfo = {
  name: "Braham Singh",
  title: "Full-Stack Developer",
  tagline: "I build modern web experiences that are fast, accessible, and beautiful.",
  email: "4366brahampreet@gmail.com",
  avatar: avatarImg,
  resumeUrl: "#",
};

export const aboutMe = {
  bio: [
    `Backend-focused Software Engineer with 2+ years of experience designing and building scalable web applications
using Java, Spring Boot, and relational databases in a product environment. Hands-on expertise in RESTful API
development, microservices-style modularization, and performance optimization for high-volume data workflows.`,
  ],
  // highlights: [
  //   { label: "Experience", value: "5+ Years" },
  //   { label: "Projects", value: "30+" },
  //   { label: "Clients", value: "20+" },
  //   { label: "Coffee Cups", value: "∞" },
  // ],
};

export const skills = [
  {
    category: "Frontend",
    icon: CodeOutlined,
    items: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "HTML/CSS", level: 95 },
      { name: "Ant Design", level: 85 },
    ],
  },
  {
    category: "Backend",
    icon: CloudServerOutlined,
    items: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 75 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 70 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: ToolOutlined,
    items: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "CI/CD", level: 80 },
      { name: "Linux", level: 75 },
    ],
  },
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with product management, cart, checkout, and payment integration. Built with React and Node.js.",
    image: "https://picsum.photos/seed/ecommerce/600/400",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task board with drag-and-drop, real-time updates, and team management features.",
    image: "https://picsum.photos/seed/taskapp/600/400",
    tags: ["React", "TypeScript", "Firebase"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Weather Dashboard",
    description:
      "A beautiful weather app with 7-day forecasts, interactive maps, and location-based alerts.",
    image: "https://picsum.photos/seed/weather/600/400",
    tags: ["React", "REST APIs", "Chart.js"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Blog Platform",
    description:
      "A CMS-powered blog with markdown support, tagging, search, and an admin dashboard.",
    image: "https://picsum.photos/seed/blogsite/600/400",
    tags: ["Next.js", "PostgreSQL", "Prisma"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Chat Application",
    description:
      "Real-time messaging app with channels, direct messages, file sharing, and emoji reactions.",
    image: "https://picsum.photos/seed/chatapp/600/400",
    tags: ["React", "Socket.io", "Node.js"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Fitness Tracker",
    description:
      "A personal fitness dashboard to log workouts, track progress, and visualize health metrics.",
    image: "https://picsum.photos/seed/fitness/600/400",
    tags: ["React", "Python", "Chart.js"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Digii, Bangalore",
    period: "2024 - Present",
    description: [
      `Designed and developed a full-stack Consumable Asset Management module using Java/Spring Boot (backend) and
AngularJS (frontend), enhancing asset traceability and reducing misallocation across hostels.`,
      `Implemented RESTful APIs for hostel attendance (floor-wise, hostel-wise, and individual student marking), enabling
reliable, real-time tracking and reporting.`,
      `Enhanced the application instance creation script, identifying and resolving multiple issues to improve its reliability
and stability.`,
      `Built a Global Search feature over 5+ categories and 100,000+ records, reducing asset lookup time by approximately
60%.`,
      `Refactored 20,000+ lines of legacy code in the Asset Management module to align with new company guidelines,
reducing code duplication by 80% and improving maintainability.`,
      `Implemented a granular role-based privilege system for viewing, adding, editing, and allotting assets, improving
security and governance.`,
      `Created scripts and backend utilities to identify and correct corrupted data in client-specific instances, ensuring
data integrity and stable deployments.`,
      `Extended hostel allotment functionality to support faculty members, broadening product scope and improving
product functionality.`
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Digii, Bangalore",
    period: "Jan 2024 - Jun 2024",
    description: [
      `Optimized MySQL queries and indexing strategies, improving query performance and reducing page load times by
      around 30%.`,
      `Introduced backend and frontend pagination for data-heavy views (100,000+ records), cutting server response times
by approximately 50%.`,
      `Created searchable views, filters, and forms to improve usability and efficiency for operational teams.`
    ],
  },
];

export const socialLinks = [
  { icon: GithubOutlined, url: "https://github.com/brhmpreet", label: "GitHub" },
  { icon: LinkedinOutlined, url: "https://www.linkedin.com/in/braham-s-620035131/", label: "LinkedIn" },
  { icon: MailOutlined, url: "mailto:4366brahampreet@gmail.com", label: "Email" },
];

export const navItems = [
  { key: "home", label: "Home" },
  { key: "about", label: "About" },
  // { key: "skills", label: "Skills" },
  // { key: "projects", label: "Projects" },
  { key: "experience", label: "Experience" },
  { key: "contact", label: "Contact" },
];
