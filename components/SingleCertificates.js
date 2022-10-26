import Image from "next/image";

export default function SingleCerticate({
  certificateImage,
  certificateName,
  institution,
}) {
  return (
    <div className="h-full flex flex-col items-center">
      <div className="w-40 h-40 relative">
        <Image
          src={certificateImage}
          alt="certificate"
          layout="fill"
          className="rounded-xl"
        />
      </div>
      <div className="mt-2 h-10 text-center w-40">
        <p className="text-sm font-semibold">{certificateName}</p>
        <p className="text-sm font-normal">{institution}</p>
      </div>
    </div>
  );
}
