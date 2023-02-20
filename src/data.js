//  icons
import { FiLinkedin, FiGithub, FiMail, FiMapPin } from "react-icons/fi";

// projects images
import Project1 from "./assets/img/projects/Calculadora.jpg";
import Project2 from "./assets/img/projects/constructores.jpg";
import Project3 from "./assets/img/projects/play.jpg";
import Project4 from "./assets/img/projects/peliculas.jpg";
import Project5 from "./assets/img/projects/ecommerce2.jpg";
import Project6 from "./assets/img/projects/reserva.jpeg";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/nextjs.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/git.png";
import SkillImg8 from "./assets/img/skills/figma.png";
import React from "react";

// navigation
export const navigation = [
  {
    name: "Home",
    href: "home",
  },
  {
    name: "Acerca de mi",
    href: "about",
  },
  {
    name: "Portfolio",
    href: "portfolio",
  },

  {
    name: "Contacto",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/fer-alvarez/",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/AlvarezFer",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "Calculadora",
    description: "Realizado con React Js",
    href: "https://calreactjs.netlify.app/",
    category: "Web App",
  },
  {
    id: "2",
    image: Project2,
    name: "Web de empresa constructora",
    description: "Realizado con Html,Css,JavaScript",
    href: "http://grupoingeniar.com/",
    category: "Web Development",
  },
  {
    id: "3",
    image: Project3,
    name: "Color Game",
    description: "Realizado con Html,Css,JavaScript",
    href: "https://colorgame-js.netlify.app/",
    category: "Games",
  },
  {
    id: "4",
    image: Project4,
    name: "Web de peliculas (TMDB)",
    description: "Realizado con React Js",
    href: "",
    category: "Web Development",
  },
  {
    id: "5",
    image: Project5,
    name: "E-commerce",
    description: "Realizado con React Js",
    href: "",
    category: "Web Development",
  },
  {
    id: "6",
    image: Project6,
    name: "WebApp Reserva de turnos",
    description: "Realizado con React Js, Next Js",
    href: "",
    category: "Web Development",
  },
];

export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "Web Development",
  },
  {
    name: "Games",
  },
  {
    name: "Web App",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Tiene alguna pregunta?",
    subtitle: "Estoy aca para ayudarte.",
    description: "Enviame un correo a fernicomeres@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Ubicación actual",
    subtitle: "Pilar, Argentina",
  },
];
