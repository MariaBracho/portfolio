import Technologies from "./Technologies";
import Image from "next/image";

export default function SingleProyect({
  name,
  description,
  repository,
  image,
  tecnologies,
}) {
  return (
    <div className="h-auto rounded-xl shadow-md w-full p-5">
      <p className="text-xl font-medium flex justify-start">{name}</p>
      <div className="shadow-md rounded-xl h-60 w-full">
        <div className="w-full h-4/6 rounded-t-xl flex justify-center">
          <div className="">
            <Image
              src={image}
              layout="fixed"
              alt="proyect"
              className="object-cover"
            />
          </div>
        </div>
        <div className="h-1/3 w-full p-4  relative">
          <p className="truncate">{description}</p>
          <button className="text-neutral-800 inline absolute left-4">
            ver mas
          </button>
        </div>
      </div>
      <Technologies tecnologies={tecnologies} />
      <div className="w-full flex justify-end my-3">
        <a
          href={repository}
          className="border-redButton border text-redButton rounded-xl p-2 mr-2"
        >
          Repositorio
        </a>
        <a
          href={repository}
          className="bg-redButton text-white rounded-xl pt-2 px-3"
        >
          Web
        </a>
      </div>
    </div>
  );
}
