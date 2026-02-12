import heroImage from "./assets/images/pic1.png";
import signupFormImage from "./assets/images/signup-form.jpg";
import adminDashboardImage from "./assets/images/admin-dashboard.jpg";
import libraryImage from "./assets/images/library.jpg";
import ticTacToeImage from "./assets/images/ticTacToe.jpg";
import restaurantPageImage from "./assets/images/restaurant.jpg";
import toDoListImage from "./assets/images/toDoList.jpg";
import weatherAppImage from "./assets/images/weather-app.jpg";
import battleshipImage from "./assets/images/battleship.jpg";
import memoryCardImage from "./assets/images/memoryCard.jpg";
import shoppingCartImage from "./assets/images/shopping-cart.jpg";
import responsiveLandingPageImage from "./assets/images/responsiveLandingPageImage.jpg";
import BookingApp from './assets/images/BookingApp.png'
import InventoryApp from './assets/images/InventoryApp.png'
import HRApp from './assets/images/HRApp.png'
/* ===========================
   TECH DEFINITIONS (Reusable)
=========================== */

const TECH = {
  HTML: {
    id: "html",
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  CSS: {
    id: "css",
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  JS: {
    id: "javascript",
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  REACT: {
    id: "react",
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  TAILWIND: {
    id: "tailwind",
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  GIT: {
    id: "git",
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  GITHUB: {
    id: "github",
    name: "GitHub",
    icon: "https://skillicons.dev/icons?i=github",
  },
  NODE: {
    id: "node",
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  EXPRESS: {
    id: "express",
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
  MONGODB: {
    id: "mongodb",
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
};

/* ===========================
   MAIN DATA EXPORT
=========================== */

export const data = {
  heroData: {
    id: 1,
    name: "Raymart S.",
    heroParagraph:
      "I'm a self-taught web developer passionate about creating interactive and user-friendly web applications. I enjoy tackling challenges, learning new technologies, and continuously improving my skills in front-end development. Soon, I’ll be diving into back-end development as well.",
    heroImage: heroImage,
  },

  techStackData: {
    id: 1,
    techStackImage: [
      TECH.HTML,
      TECH.CSS,
      TECH.JS,
      TECH.REACT,
      TECH.TAILWIND,
      TECH.GIT,
      TECH.GITHUB,
      TECH.NODE,
      TECH.EXPRESS,
      TECH.MONGODB,
    ],
  },

  projectData: [


    {
      id: 4,
      projectName: "Tic Tac Toe",
      projectDescription:
        "Interactive Tic Tac Toe game built with JavaScript.",
      projectLink:
        "https://xxemat20xx.github.io/TicTacToe/",
      projectImage: ticTacToeImage,
      techUsed: [TECH.HTML, TECH.CSS, TECH.JS],
    },



    {
      id: 6,
      projectName: "To-Do List",
      projectDescription:
        "To-Do app with Local Storage functionality.",
      projectLink:
        "https://xxemat20xx.github.io/OdinProject-Todolist/",
      projectImage: toDoListImage,
      techUsed: [TECH.HTML, TECH.CSS, TECH.JS],
    },

    {
      id: 7,
      projectName: "Weather App",
      projectDescription:
        "Weather app with API integration.",
      projectLink:
        "https://xxemat20xx.github.io/OdinProject--WeatherApp/",
      projectImage: weatherAppImage,
      techUsed: [TECH.HTML, TECH.CSS, TECH.JS],
    },

    {
      id: 8,
      projectName: "Battleship",
      projectDescription:
        "Battleship game with player vs computer logic.",
      projectLink:
        "https://xxemat20xx.github.io/OdinProject-Battleship/",
      projectImage: battleshipImage,
      techUsed: [TECH.HTML, TECH.CSS, TECH.JS],
    },

    {
      id: 9,
      projectName: "Memory Card",
      projectDescription:
        "React project with API integration.",
      projectLink:
        "https://xxemat20xx.github.io/Memory-card/",
      projectImage: memoryCardImage,
      techUsed: [TECH.HTML, TECH.CSS, TECH.JS, TECH.REACT],
    },

    {
      id: 10,
      projectName: "Shopping Cart",
      projectDescription:
        "E-commerce app with FakeStore API and cart logic.",
      projectLink:
        "https://odinproject-shoppingcart.netlify.app/",
      projectImage: shoppingCartImage,
      techUsed: [
        TECH.HTML,
        TECH.CSS,
        TECH.JS,
        TECH.REACT,
        TECH.TAILWIND,
      ],
    },

    {
      id: 11,
      projectName: "Responsive Landing Page",
      projectDescription:
        "Fully responsive landing page with slider functionality.",
      projectLink:
        "https://xxemat20xx.github.io/Old-Project---Responsive-Website/",
      projectImage: responsiveLandingPageImage,
      techUsed: [TECH.HTML, TECH.CSS, TECH.JS],
    },
    {
      id: 12,
      projectName: "MERN Booking and Scheduling App",
      projectDescription: "A full-stack MERN application for booking and scheduling appointments with real-time updates and user authentication.",
      projectLink:
        "https://mern-booking-and-scheduling-system.onrender.com/",
      projectImage: BookingApp,
      techUsed: [TECH.HTML, TECH.CSS, TECH.JS, TECH.MONGODB, TECH.REACT, TECH.NODE, TECH.EXPRESS, TECH.TAILWIND],
    },
    {
      id: 13,
      projectName: "MERN Inventory App",
      projectDescription: "A full-stack MERN application for managing inventory, featuring CRUD operations, and a responsive dashboard.",
      projectLink:
        "https://mern-inventory-app-i0bh.onrender.com/dashboard",
      projectImage: InventoryApp,
      techUsed: [TECH.HTML, TECH.CSS, TECH.JS, TECH.MONGODB, TECH.REACT, TECH.NODE, TECH.EXPRESS, TECH.TAILWIND],
    },
        {
      id: 14,
      projectName: "MERN HR Management App",
      projectDescription: "A MERN stack HR management app to track employees, manage departments, and handle basic HR tasks with a clean and responsive interface.",
      projectLink:
        "https://mern-employee-management-oe7p.onrender.com/",
      projectImage: HRApp,
      techUsed: [TECH.HTML, TECH.CSS, TECH.JS, TECH.MONGODB, TECH.REACT, TECH.NODE, TECH.EXPRESS, TECH.TAILWIND,],
    },
  ],
};
