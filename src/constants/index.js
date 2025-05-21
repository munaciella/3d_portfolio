import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  eventsphere,
  threejs,
  nextjs,
  expressjs,
  jest,
  psql,
  pairSniper,
  techReturners,
  northcoders,
  munaciellanews,
  wax,
  velovegans,
  devups,
  clarity,
  linkedin,
  paperly,
  applywise,
  filedrop,
  streambuster,
  flowly,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "Jest",
    icon: jest,
  },
  {
    name: "PostgreSQL",
    icon: psql,
  },
];

const experiences = [
  {
    title: "Data Analytics Consultant (Cryptocurrency)",
    company_name: "Ultimate Hero",
    icon: pairSniper,
    iconBg: "#383E56",
    date: "Sept 2024 - Dec 2024",
    points: [
      "Assisted in schema design and database structuring for a complex cryptocurrency data analysis application.",
      "Developed new database tables in response to evolving feature requirements.",
      "Contributed to strategies for generating and inserting seed data eﬃciently.",
      "Created a comprehensive seed script to ensure seamless data integration and reliability.",
      "Migrated JavaScript data files to TypeScript, ensuring robust type safety across data models.",
      "Demonstrated versatility in backend management, error handling, integrated Jest for comprehensive testing and database architecture.",
    ],
  },
  {
    title: "Freelance Software Engineer Project Consultant",
    company_name: "Tech Returners",
    icon: techReturners,
    iconBg: "#fff",
    date: "July 2024 - Aug 2024",
    points: [
      "Developed a bespoke web application for internal development, as part of the Launchpad project, including architecture design, implementation and deployment.",
      "Successfully integrated OAuth authentication (Google, Supabase) enhancing user experience and security.",
      "Backend Enhancements: Implemented robust backend solutions using Supabase, including user management, authentication, and database operations, ensuring eﬃcient data handling and security compliance.",
      "Contributed to frontend development using React, improving UI/UX with responsive design and accessibility considerations.",
    ],
  },
  {
    title: "Trainee Full Stack Developer",
    company_name: "Northcoders",
    icon: northcoders,
    iconBg: "#383E56",
    date: "Oct 2023 - Jan 2024",
    points: [
      "Completed an intensive bootcamp focused on building web applications, led by experienced instructors.",
      "Gained proficiency in programming fundamentals and test-driven development.",
      "Developed skills in back-end technologies including Node.js, APIs, databases, Express, and SQL.",
      "Enhanced front-end expertise in React and the creation of complex web applications and websites.",
    ],
  },
];

const projects = [
  {
    name: "Paperly",
    description:
      "A fully functional SaaS application that allows users to upload documents and interact with them using AI-powered chat. It supports various document types, provides chat memory and vector search, manages user subscriptions, and includes robust file management capabilities.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
    ],
    image: paperly,
    source_code_link: "https://github.com/munaciella/aichat-to-doc",
    live_link: "https://paperly.dev/",
  },
  {
    name: "ApplyWise",
    description:
      "An AI-powered job application toolkit that helps you generate tailored resumes and cover letters using OpenAI, manage saved jobs, and track application statuses, all securely stored in Supabase.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: applywise,
    source_code_link: "https://github.com/munaciella/resume-ai",
    live_link: "https://applywise-one.vercel.app/",
  },
  {
    name: "Filedrop",
    description:
      "Filedrop is a modern file storage and management app built with Next.js, Firebase, Clerk authentication, and TailwindCSS. It allows users to upload, rename, delete, and download files securely.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "clerk",
        color: "pink-text-gradient",
      },
    ],
    image: filedrop,
    source_code_link: "https://github.com/munaciella/filedrop",
    live_link: "https://filedrop-nu.vercel.app/",
  },
  {
    name: "Streambuster",
    description:
      "A web application that allows users to search for movies and TV shows, view trailers, access detailed information about each title. It also allows the user to save them to their list, track watch progress, and view recommendations. It uses the TMDB API for live data retrieval.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "TMDB api",
        color: "pink-text-gradient",
      },
    ],
    image: streambuster,
    source_code_link: "https://github.com/munaciella/videostore",
    live_link: "https://streambuster.vercel.app/",
  },
  {
    name: "Flowly",
    description:
      "Flowly is a real-time, AI-powered Kanban-style task manager that helps teams and individuals organize, prioritise, and collaborate on tasks seamlessly. Built with Firebase Firestore for real-time data, and OpenAI for smart suggestions.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: flowly,
    source_code_link: "https://github.com/munaciella/ai-task-manager",
    live_link: "https://flowly-chi.vercel.app/",
  },
  {
    name: "The Meteo",
    description:
      "",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "",
        color: "pink-text-gradient",
      },
    ],
    image: clarity,
    source_code_link: "https://github.com/munaciella/clarity-notes-capturer",
    live_link: "https://clarity-capture.com/",
  },
  {
    name: "Clarity Notes Capturer",
    description:
      "A notes capturing and collaboration platform, enabling seamless note-taking, real-time collaboration, and powerful backend functionalities. Built with Next.js, JavaScript, and TailwindCSS, using Firebase, Cloudflare and Liveblocks for backend services.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: clarity,
    source_code_link: "https://github.com/munaciella/clarity-notes-capturer",
    live_link: "https://clarity-capture.com/",
  },
  {
    name: "Clarity Notes Capturer",
    description:
      "A notes capturing and collaboration platform, enabling seamless note-taking, real-time collaboration, and powerful backend functionalities. Built with Next.js, JavaScript, and TailwindCSS, using Firebase, Cloudflare and Liveblocks for backend services.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: clarity,
    source_code_link: "https://github.com/munaciella/clarity-notes-capturer",
    live_link: "https://clarity-capture.com/",
  },
  {
    name: "Networking Platform",
    description:
      "A full-stack networking platform where users can connect, interact, and engage through posts and comments. Built using Next.js, it leverages Firebase and Cloudflare for data storage and Clerk for authentication.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "cloudflare",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: linkedin,
    source_code_link: "https://github.com/munaciella/networking-platform-v2",
    live_link: "https://networked.vercel.app",
  },
  {
    name: "Events Booking Platform",
    description:
      "A web application for managing events, including user registration, event creation and payment processing. Built with React, JS and TailwindCSS, using Supabase for backend services.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: eventsphere,
    source_code_link: "https://github.com/munaciella/events-platform",
    live_link: "https://event-sphere-web.netlify.app/",
  },
  {
    name: "Social Media Music App",
    description:
      "A social media platform for music enthusiasts to explore, rate, and review songs and albums from around the world. The app utilises Spotify-API to interact with the backend to fetch the music information.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nativewind",
        color: "pink-text-gradient",
      },
    ],
    image: wax,
    source_code_link: "https://github.com/munaciella/gatefold-api",
    live_link: "https://github.com/munaciella/gatefold-frontend",
  },
  {
    name: "News Web App",
    description:
      "A full-stack news web app for exploring, upvoting, downvoting, and managing articles and comments. Built with React, JS, and TailwindCSS on the frontend and integrated with a Node.js/Express backend.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: munaciellanews,
    source_code_link: "https://github.com/munaciella/NC-news",
    live_link: "https://munaciella.netlify.app/",
  },
  {
    name: "Recipes Web App",
    description:
      "A web app for viewing, share, comment and vote recipes, including user registration, recipe suggestion and management. Built with Nextjs, TS and TailwindCSS, using Supabase for backend services.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: velovegans,
    source_code_link: "https://github.com/munaciella/recipes-website",
    live_link: "https://velovegans.co.uk",
  },
  {
    name: "Data Analytics API",
    description:
      "An API developed with TS, Nodejs and PSQL. The API includes database seeding, environment-specific configurations, and robust testing with Jest, demonstrating best practices in database management.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "jest",
        color: "pink-text-gradient",
      },
    ],
    image: pairSniper,
    source_code_link: "https://github.com/munaciella/data-analytics-api",
    live_link: "https://github.com/munaciella/data-analytics-api",
  },
  {
    name: "Documentation Web App",
    description:
      "A resourceful web app for a comprehensive collection of notes, guides, and tools aimed at helping developers at the beginning of their journey, those returning to tech, or anyone needing a refresher.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: devups,
    source_code_link: "https://github.com/munaciella/devups-notes",
    live_link: "https://devups-notes.vercel.app/",
  },
];

export { services, technologies, experiences, projects };
