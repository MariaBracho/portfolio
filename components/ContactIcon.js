import Image from "next/image";
import linkedin from "../public/assets/Icons/icon_linkedin.svg";
import gitHub from "../public/assets/Icons/icon_github.svg";
import whatsapp from "../public/assets/Icons/icon_whatsapp.svg";
import gmail from "../public/assets/Icons/icon_gmail.svg";

export default function ContactIcon({ className }) {
  return (
    <div className={className}>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/mar%C3%ADa-bracho-villanueva/"
        className="flex h-full items-center"
      >
        <Image
          className="cursor-pointer"
          src={linkedin}
          alt="red"
          width="36px"
          height="36px"
        />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/MariaBracho"
        className="flex h-full items-center"
      >
        <Image
          className="cursor-pointer"
          src={gitHub}
          alt="red"
          width="36px"
          height="36px"
        />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://walink.co/61d8cd"
        className="flex h-full items-center"
      >
        <Image
          className="cursor-pointer"
          src={whatsapp}
          alt="red"
          width="36px"
          height="36px"
        />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="mailto:mariabrachovillanueva@gmail.com"
        className="flex h-full items-center"
      >
        <Image
          className="cursor-pointer"
          src={gmail}
          alt="red"
          width="36px"
          height="36px"
        />
      </a>
    </div>
  );
}
