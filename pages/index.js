import Head from "next/head";
import About from "../components/About";
import Proyects from "../components/Proyects";
import Footer from "../components/Footer";
import Inicio from "../components/Home";
import CertificatesCarousel from "../components/CertificatesCarousel";
import UAParser from "ua-parser-js";
import MobileDetect from "mobile-detect";

function Home() {
  return (
    <div>
      <Head>
        <title>Portafolio | Maria Bracho</title>
        <meta name="description" content="Portafolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Inicio />
      <About />
      <Proyects />
      <CertificatesCarousel />
      <Footer />
    </div>
  );
}
export default Home;
