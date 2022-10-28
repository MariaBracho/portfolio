import chakraUI from "../public/assets/Icons/chakraui.svg";
import tailwind from "/public/assets/Icons/tailwind.svg";
import reactQuery from "/public/assets/Icons/iconReactQuery.svg";
import javaScript from "/public/assets/Icons/iconJavascript.svg";
import css from "/public/assets/Icons/iconCss.svg";
import reactRouter from "/public/assets/Icons/reactRouter.svg";
import axios from "/public/assets/Icons/axios.svg";
import webpackIcon from "/public/assets/Icons/webpack.svg";
import reactHookForm from "/public/assets/Icons/reactHookForm.svg";
import react from "/public/assets/Icons/react.svg";
import adoptADog from "/public/assets/Images/adoptADopt.PNG";
import miTurno from "/public/assets/Images/miTurno.PNG";
import calculator from "/public/assets/Images/calculator.PNG";
import advicceGenerator from "/public/assets/Images/adviceGenerator.PNG";
import math from "/public/assets/Images/math.PNG";
import piedraPapelOTiejera from "/public/assets/Images/piedraPapelOTijera.PNG";
import { TECHNOLOGY_URL, TECHNOLOGY_NAME } from "./constants";
import nextIcon from "/public/assets/Icons/next.svg";
import reactHelmet from "/public/assets/Icons/reactHelmet.svg";
import yup from "/public/assets/Icons/yup.svg";
import zustand from "/public/assets/Icons/zustand.svg";
import daisyUI from "/public/assets/Icons/daisyui.svg";
const DATA_PROYECTS = () => {
  return [
    {
      name: "Mi turno",
      image: miTurno,
      description:
        "Mi turno es una aplicación responsiva que facilita la administración de turnos médicos o de especialidades.",
      repository: "https://github.com/No-Country/c7-23-ft-java-react",
      url: "https://c7-23-ft-java-react-myturnapp.vercel.app/",
      tecnologies: [
        {
          name: TECHNOLOGY_NAME.next,
          url: TECHNOLOGY_URL.next,
          logo: nextIcon,
        },
        {
          name: TECHNOLOGY_NAME.reactQuery,
          url: TECHNOLOGY_URL.reactQuery,
          logo: reactQuery,
        },
        {
          name: TECHNOLOGY_NAME.axios,
          url: TECHNOLOGY_URL.axios,
          logo: axios,
        },
        {
          name: TECHNOLOGY_NAME.zustand,
          url: TECHNOLOGY_URL.zustand,
          logo: zustand,
        },
        {
          name: TECHNOLOGY_NAME.reactHoockForm,
          url: TECHNOLOGY_URL.reactHoockForm,
          logo: reactHookForm,
        },
        {
          name: TECHNOLOGY_NAME.yup,
          url: TECHNOLOGY_URL.yup,
          logo: yup,
        },
        {
          name: TECHNOLOGY_NAME.reactTable,
          url: TECHNOLOGY_URL.reactTable,
          logo: reactQuery,
        },
        {
          name: TECHNOLOGY_NAME.tailwind,
          url: TECHNOLOGY_URL.tailwind,
          logo: tailwind,
        },
        {
          name: TECHNOLOGY_NAME.daisyUI,
          url: TECHNOLOGY_URL.daisyUI,
          logo: daisyUI,
        },
      ],
    },
    {
      name: "Adopt a dog",
      image: adoptADog,
      description:
        "App de perritos en la que puedes adoptar, compartir, descargar, dar corazones y subir tus propios perritos.La app fue desarrollada con React.js, Chakra UI, React Helmet, React router y Axios, cuenta con responsive design y se utiliza Context API para el global state. Adicionalmente se utiliza como backend la API 'The Dog API' (https://www.thedogapi.com/).El diseño de las pantallas también fueron echos por mi persona utilizando Figma.",
      repository: "https://github.com/MariaBracho/adpot-a-dog",
      url: "https://adpot-a-dog.vercel.app/home",
      tecnologies: [
        {
          name: TECHNOLOGY_NAME.react,
          url: TECHNOLOGY_URL.react,
          logo: react,
        },
        {
          name: TECHNOLOGY_NAME.chackraUI,
          url: TECHNOLOGY_URL.chackraUI,
          logo: chakraUI,
        },
        {
          name: TECHNOLOGY_NAME.reactHelmet,
          url: TECHNOLOGY_URL.reactHelmet,
          logo: reactHelmet,
        },
        {
          name: TECHNOLOGY_NAME.reactRouter,
          url: TECHNOLOGY_URL.reactRouter,
          logo: reactRouter,
        },
        {
          name: TECHNOLOGY_NAME.axios,
          url: TECHNOLOGY_URL.axios,
          logo: axios,
        },
      ],
    },
    {
      name: "Advice generator app",
      image: advicceGenerator,
      description: "Generador de consejos",
      repository: "https://github.com/MariaBracho/advice-generator-app-main",
      url: "https://624247b61de09000087318a4--advice-generator-main.netlify.app/",
      tecnologies: [
        {
          name: TECHNOLOGY_NAME.javaScript,
          url: TECHNOLOGY_URL.javaScript,
          logo: javaScript,
        },
        {
          name: TECHNOLOGY_NAME.tailwind,
          url: TECHNOLOGY_URL.tailwind,
          logo: tailwind,
        },
        {
          name: TECHNOLOGY_NAME.webpack,
          url: TECHNOLOGY_URL.webpack,
          logo: webpackIcon,
        },
      ],
    },
    {
      name: "Calculadora básica",
      image: calculator,
      description: "Calculadora basica",
      repository: "https://github.com/MariaBracho/MariaBracho.github.io",
      url: "https://mariabracho.github.io/calculator/",
      tecnologies: [
        {
          name: TECHNOLOGY_NAME.javaScript,
          url: TECHNOLOGY_URL.javaScript,
          logo: javaScript,
        },
        {
          name: TECHNOLOGY_NAME.css,
          url: TECHNOLOGY_URL.css,
          logo: css,
        },
      ],
    },
    {
      name: "Rock, Paper, Scissors game ",
      image: piedraPapelOTiejera,
      description:
        "Juego de piedra, papel o tijera, juego desarrollado por un reto de frontend mentor",
      repository: " https://github.com/MariaBracho/Rock-Paper-Scissors-game",
      url: "https://mariabracho.github.io/Rock-Paper-Scissors-game/public/",
      tecnologies: [
        {
          name: TECHNOLOGY_NAME.javaScript,
          url: TECHNOLOGY_URL.javaScript,
          logo: javaScript,
        },
        {
          name: TECHNOLOGY_NAME.css,
          url: TECHNOLOGY_URL.css,
          logo: css,
        },
      ],
    },
    {
      name: "Página de matemática",
      image: math,
      description:
        "Es una página de matemática desarrollada como una single-page application",
      repository: "https://github.com/MariaBracho/math_project",
      url: "https://math-page.netlify.app/",
      tecnologies: [
        {
          name: TECHNOLOGY_NAME.javaScript,
          url: TECHNOLOGY_URL.javaScript,
          logo: javaScript,
        },
        {
          name: TECHNOLOGY_NAME.tailwind,
          url: TECHNOLOGY_URL.tailwind,
          logo: tailwind,
        },
        {
          name: TECHNOLOGY_NAME.webpack,
          url: TECHNOLOGY_URL.webpack,
          logo: webpackIcon,
        },
      ],
    },
  ];
};

export default DATA_PROYECTS;
