import Image from "next/image";
import linkedin from "../public/assets/Icons/icon_linkedin.svg";
import gitHub from "../public/assets/Icons/icon_github.svg";
import whatsapp from "../public/assets/Icons/icon_whatsapp.svg";
import gmail from "../public/assets/Icons/icon_gmail.svg";

export default function ContactIcon({ className }) {
  return (
    <div className={className}>
      <Image
        className="cursor-pointer"
        src={linkedin}
        alt="red"
        width="34px"
        height="34px"
      />
      <Image
        className="cursor-pointer"
        src={gitHub}
        alt="red"
        width="34px"
        height="34px"
      />
      <Image
        className="cursor-pointer"
        src={whatsapp}
        alt="red"
        width="34px"
        height="34px"
      />
      <Image
        className="cursor-pointer"
        src={gmail}
        alt="red"
        width="34px"
        height="34px"
      />
    </div>
  );
}
