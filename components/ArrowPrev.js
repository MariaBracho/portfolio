import Image from "next/image";
import arrowPrev from "/public/assets/Icons/arrowLeft.svg";
import arrowRigth from "/public/assets/Icons/arrowRight.svg"

export function ArrowPrev() {
  return (
    <button type="button">
      <Image src={arrowPrev} alt="arrow" layout="fill" />
    </button>
  );
}
export function ArrowNext({ label, onClick}) {
  return (
    <button
      onClick={onClick}
      type="button"
      title={label}
      className={`w-6 h-6 cursor-pointer top-[calc(50%-15px)] z-10 absolute right-4 `}
    >
      <Image src={arrowRigth} alt="arrow" layout="fill" />
    </button>
  );
}
