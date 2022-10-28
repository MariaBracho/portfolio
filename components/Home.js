import Navbar from "./Navbar/index";
import Header from "./Header";
import Image from "next/image";
import Arrow from "../public/assets/Icons/arrowLeft.svg";

export default function Home() {
  return (
    <div className="h-screen">
      <Navbar />
      <a name="inicio" />
      <Header />
      <div className="absolute left-[calc(50%-20px)] animate-bounce bottom-0">
        <a href="#aboutme-arrow">
          <Image
            className="-rotate-90 cursor-pointer"
            src={Arrow}
            alt="arrow"
            width="40"
            height="40"
          />
        </a>
      </div>
      <a name="aboutme-arrow" />
      <a name="aboutme" />
    </div>
  );
}
