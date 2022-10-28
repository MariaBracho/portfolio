import Image from "next/image";

export default function SingleCerticate({
  certificateImage,
  certificateName,
  url,
}) {
  return (
    <div className="h-auto flex flex-col items-center">
      <div className="w-44 h-44 relative flex ">
        <Image
          src={certificateImage}
          alt="certificate"
          layout="fill"
          className="rounded-xl object-cover"
        />
      </div>
      <div className="mt-2 h-auto text-center w-40">
        <a
          href={url}
          rel="noopener noreferrer"
          target="_blank"
          className="text-sm font-semibold underline underline-offset-2"
        >
          {certificateName}
        </a>
      </div>
    </div>
  );
}
