export const hashRoutes = [
  ["Home", "/#intro"],
  ["About", "/#about"],
  ["Experience", "/#experience"],
  ["Projects", "/#projects"],
  ["Contact", "/#contact"],
  ["Resume", "/resume.pdf"]
];

export const sections = hashRoutes.map(route => route[0].toLowerCase());

export const introAnimatedText = [
  "Tech Enthusiast",
  "Full-Stack Developer",
  "Automation Wizard",
  "Code Artist",
  "App Maker",
  "Strategic Gamer"
];
export const myName = "Pranshu Shukla";
export const shortDescription = "MERN STACK DEVELOPER";
export const longDescription = "Full Stack Development Apprentice at AccioJob with a strong interest in technology. Experienced in App Development, now actively working on Web Development using Next.js, TypeScript, and Framer Motion. Always curious to learn and explore new tools and frameworks. Feel free to check out my portfolio!"
export const socialMediaDetails = [
  {
    name: 'GitHub',
    url: 'https://github.com/Pranshu-007?tab=repositories',
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/pranshushukla/',
  },
  {
    name: 'Email',
    url: 'mailto:pranshushukla25@gmail.com',
  }
];

export const skills = [
  "C", "C++", "HTML/CSS", "Javascript", "Typescript", "MySQL",
  "MongoDB", "Redux", "Tailwind", "React", "NextJs", "Node", "Redux", "React Native", "RestAPI",
  "ExpressJs", "SocketIO", "MUI", "Git", "Github", "VSCode", "Docker",
  "Postman", "Framer" , "Vercel", "Flutter"
];

// export const experiences = [
//   {
//     title: "Summer Analyst",
//     company_name: "Goldman Sachs Pvt Ltd",
//     bottomColor: "#6d92bf",
//     icon: "/company/Goldman_Sachs.png",
//     date: "May 2023 - July 2023",
//     points: [
//       "Engaged in the Goldman Sachs team maintaining client fee calculation applications, implementing 10+ efficiency-focused enhancements",
//       "Implemented a feature enabling users to charge fees as last year to bulk accounts in one click, reducing process time by 85% while ensuring reliability with 20+ JUnit test cases",
//       "Optimized user experience by decreasing UI loading time by 76% through enhanced MongoDB queries",
//       "Rectified over 15 bugs within the internal fee calculation application"
//     ],
//   },
//   {
//     title: "Exam Module 2",
//     company_name: "SGSITS Indore",
//     bottomColor: "#f1df87",
//     icon: "/company/SGSITS_Logo.png",
//     date: "Feb 2023 - Apr 2023",
//     points: [
//       "Developed a robust web-based system to automate the examiner allocation process for multiple departments within the college",
//       "Implemented various functionalities to simplify the examiner allocation workflow",
//       "Built a user-friendly interface with React. Leveraged SQL for efficient database management and Nodejs for integration"
//     ],
//   },
//   {
//     title: "Senior Coordinator",
//     company_name: "#include Club SGSITS",
//     bottomColor: "#bc1010",
//     icon: "/company/Hash_Include.png",
//     date: "Oct 2021 - present",
//     points: [
//       "Developing and maintaining web applications for hackindore using Nextjs and other related technologies",
//       "With the assistance of other coordinators, successfully organized events and guided sessions for students",
//       'Speaker at "Tech-tonic" a programming road-map for freshers',
//     ],
//   }
// ];

export const projectsData = [
  {
    title: '  StaySpot : Hotel Website',
    desciption: 'Build a platform that helps user to book hotels according to the group size and location',
    tech: ['NodeJS', 'ReactJS', 'MongoDB', 'Expressjs', 'JWT'],
    github: 'https://github.com/Pranshu-007/tour-management-MERN',
    image: '/projects/ecommerce.png'
  },
  {
    title: 'Portfolio',
    desciption: 'Crafted an engaging portfolio site with NextJS and Three.js, enhancing user interaction through a serverless feedback system powered by a custom API',
    tech: ['NodeJS', 'NextJS', 'Threejs', 'Nodemailer', 'MUI', 'Bootstrap'],
    github: 'https://github.com/Pranshu-007/Portfolio',
    image: '/projects/Portfolio.png'
  },
  {
    title: 'E-commerce website',
    desciption: 'Designed a E-commerce website with user-friendly UI and showcasing strong Backend , SQL and UI development skills',
    tech: ['NextJS', 'NodeJS', 'MySQL'],
    github: 'https://github.com/Pranshu-007/E-Commerce-with-MySQL',
    image: '/projects/ecommerce.png'
  },
  {
    title: 'FitPro : Gym App',
    desciption: "Designed and developed 'Super Mario', a captivating 2D game using C++ and the SFML, showcasing shader programming skills for visually stunning effects",
    tech: ['React Native', 'Mobile Screen'],
    github: '',
    image: '/projects/splash.png'
  }
];

export const contactData = {
  imagesrc: '/stars/StarBackground.png',
  imagealt: 'Star Background Image',
};
