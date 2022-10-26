import Image from "next/image";
import Tech from "../public/assets/Images/Tech.svg";
import ContactIcon from "./ContactIcon";

export default function Header() {
  return (
    <div className="w-full h-4/5 flex flex-col items-center justify-center">
      <div className="grid grid-cols-[60%,40%] items-center  w-full px-5 h-64 md:w-4/5 md:justify-self-center justify-center">
        <div>
          <p className="text-2xl font-bold mb-3 md:text-[40px]">
            !Hola!, soy María Bracho
          </p>
          <p className="text-lg md:text-4xl font-medium">Frontend Developer</p>
        </div>
        <div className="w-full h-auto">
          <Image
            className="object-contain "
            src={Tech}
            alt="human"
            layout="responsive"
          />
        </div>
      </div>
      <div className="w-full flex flex-col justify-start md:w-4/5">
        <ContactIcon className="flex justify-around w-64 rounded-lg  h-11 items-center ml-5 bg-violet_section" />
        <div className="h-8 bg-redButton rounded-xl w-20 mt-5 ml-5 text-white flex justify-center items-center cursor-pointer">
          <a>Ver cv</a>
        </div>
      </div>
    </div>
  );
}
