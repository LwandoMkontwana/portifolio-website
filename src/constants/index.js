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
  absa,
  ctu,
  purem,
  coega,
  ibm,
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
    icon: absa,
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
    icon: ibm,
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
    icon: ctu,
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
    icon: purem,
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
    company_name: "Coega",
    icon: coega,
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
      "Lwando thrives on complex new challenges, and is keen to supercede expectations. He took on a role with me in a field he didn't know prior to the internship. However he excelled and became one of the top performers in our IBM Internship Program very early on in the program.",
    name: "Vickey Van Den Heever",
    designation: "IBM Z Client Leader",
    company: "IBM",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've worked with Lwando for a year on the IBM Z internship program. In that one year i've seen him not only excel at the core elements of his job, but also learn other tasks that extend well beyond the scope of his role. I believe Lwando's willingness to learn and take on new responsibilities is something to be desired in any job.",
    name: "Lehlogonolo Masubelele",
    designation: "Cloud Support Engineer",
    company: "AWS",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I highly recommend Lwando, I've known him for over a decade. His professionalism, technical expertise, and attention to detail result in outstanding web apps. He possess exceptional character, embodying integrity, reliability, and a commitment to client satisfaction. A true asset to any project or team.",
    name: "Briner Monama",
    designation: "CEO",
    company: "Visionux",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Sleek Invest",
    description:
      "Web-based platform that allows users to search and invest in stocks. It also includes a watchlist where you can track all stocks that you are interested in.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ms-sqlserver",
        color: "green-text-gradient",
      },
      {
        name: "c-sharp web api",
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