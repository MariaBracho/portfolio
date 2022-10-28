import platzi from "/public/assets/Images/platzi.png";
import reactCertificate from "/public/assets/Images/diploma-react.jpg";
import javaScriptCerticate from "/public/assets/Images/diploma-javascript-practico-2021.pdf_1.jpg";
import typeScriptCertificate from "/public/assets/Images//diploma-typescript.pdf_1.jpg";
import nextCertificate from "/public/assets/Images/diploma-next.pdf_1.jpg";
import htmlAndCssCeertificate from "/public/assets/Images/diploma-html-css.pdf_1.jpg";
import expressionsRegularCertificate from "/public/assets/Images/diploma-expresiones-regulares.pdf_1.jpg";
import SynchronyCertificate from "/public/assets/Images/diploma-asincronismo-js.pdf_1.jpg";
import cssGridCertificate from "/public/assets/Images/diploma-css-grid.pdf_1.jpg";
import frontendDeveloperCertificate from "/public/assets/Images/diploma-frontend-developer.pdf_1.jpg";
import htmlAndCssPractice from "/public/assets/Images/diploma-html-practico.pdf_1.jpg";
import SPACerticate from "/public/assets/Images/diploma-spa-javascript.pdf_1.jpg";
import apiRestCertificate from "/public/assets/Images/diploma-api.pdf_1.jpg";

const CERTIFICATES_DATA = () => {
  return [
    {
      certificateName: "Introducción a React",
      certificateImage: reactCertificate,
      institution: "Platzi",
    },
    {
      certificateName: "Curso práctico de JavaScript",
      certificateImage: javaScriptCerticate,
      institution: "Platzi",
    },
    {
      certificateName: "Curso de Next",
      certificateImage: nextCertificate,
      institution: "Platzi",
    },
    {
      certificateName: "Curso de Fundamentos de TypeScript",
      certificateImage: typeScriptCertificate,
      institution: "Platzi",
    },
    {
      certificateName: "Curso de Asincronismo con JavaScript",
      certificateImage: SynchronyCertificate,
      institution: "Platzi",
    },
    {
      certificateName: "Curso de consumo de API REST con JavaScript",
      certificateImage: apiRestCertificate,
      institution: "Platzi",
    },
    {
      certificateName: "Curso de expresiones regulares",
      certificateImage: expressionsRegularCertificate,
      institution: "Platzi",
    },
    {
      certificateName: "Curso de css grid",
      certificateImage: cssGridCertificate,
      institution: "Platzi",
    },
    {
      certificateName: "Curso de frontend developer",
      certificateImage: frontendDeveloperCertificate,
      institution: "Platzi",
    },
    {
      certificateName: "Curso definitivo de HTML y CSS",
      certificateImage: htmlAndCssCeertificate,
      institution: "Platzi",
    },
    {
      certificateName: "Curso práctico de HTML y CSS",
      certificateImage: htmlAndCssPractice,
      institution: "Platzi",
    },
    {
      certificateName:
        "Curso de Single Page Application con JavaScript vanilla",
      certificateImage: SPACerticate,
      institution: "Platzi",
    },
  ];
};

export default CERTIFICATES_DATA;
