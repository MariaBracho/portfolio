import Image from "next/image";

export default function SingleCerticate({
  certificateImage,
  certificateName,
  institution,
}) {
  return (
    <div className="h-full flex flex-col items-center">
      <div className="w-44 h-44 relative">
        <Image
          src={certificateImage}
          alt="certificate"
          layout="fill"
          className="rounded-xl object-cover"
        />
      </div>
      <div className="mt-2 h-10 text-center w-40">
        <p className="text-sm font-semibold underline underline-offset-2">
          {certificateName}
        </p>
      </div>
    </div>
  );
}
