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
  git,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front End Development",
    icon: web,
  },
  {
    title: "Mobile Development",
    icon: mobile,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Photography",
    icon: creator,
  },
  {
    title: "Databases",
    icon: backend,
  },
  {
    title: "Photoshop",
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "IMS System Programmer",
    company_name: "ABSA Group",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Mar 2019 - Present ",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "IBM Z Software Engineer ",
    company_name: "IBM",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Oct 2018 - Sep 2019",
    points: [
      "This role specializes in performing problem determination and problem source identification in software environments. ",
      "Responsibilities include: Problem analysis, Evaluation, Recreation, and Resolution of client reported problems",
      "The use of relevant problem management systems to search for known problems and to create new entries / update existing entries - advice and guidance to clients regarding the use of software ",
      "The use of IBM technical resources and tools to answer client questions and respond to clients requirements Software environments include operating systems, programming languages, database management systems, packages, development tools, etc.",
    ],
  },
  {
    title: "Facilitator",
    company_name: "CTU Training Solutions",
    icon: shopify,
    iconBg: "#383E56",
    date: "Feb 2018 - Jun 2018",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "GIT (Graduate In Training)",
    company_name: "Eberspächer Group",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Sep 2017 - Feb 2018 · 6 mos",
    points: [
      "Software Maintenance -Assist MIS programmer writing programs & maintain current internal programs",
      "Enhance current add - on application in C#",
      "Hardware - Assist with PC set-up and configuration basic PC repair",
      "Database server maintenance with MSSQL",
      "Assist with general IT functions - troubleshooting"
    ],
  },
  {
    title: "Software Development Intern",
    company_name: "Eberspächer Group",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Sep 2017 - Feb 2018 · 6 mos",
    points: [
      "Software Maintenance - First Line Support ( Problem Solving, troubleshooting)",
      "2nd Line support (low impact bug fixes & data cleanup , client side code breaks)",
      "User requests - Surveys, Invitations, User admin on systems",
      "Marketing requests - intranet support, website support, EAlbum",
      "Export and report requests, SQL query writing",
      "Admin -Ensure all requests are correctly followed according to organisational procedures and compliance",
      "Support ticket response, verification and closure",
      "Source Control practice adherence"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };