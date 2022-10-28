import Technologies from "./Technologies";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SingleProyect({
  name,
  description,
  repository,
  image,
  tecnologies,
  url,
}) {
  const [showMore, setShowMore] = useState(false);

  const seeMore = () => {
    showMore ? setShowMore(false) : setShowMore(true);
  };

  return (
    <div className="h-auto rounded-xl shadow-md bg-gray-50 w-full p-2 md:p-5 relative">
      <p className="text-xl font-medium flex justify-start mb-2">{name}</p>
      <div className="rounded-xl h-auto w-full">
        <div className="h-4/6 rounded-t-xl flex justify-center">
          <div className="w-full h-60 relative">
            <a href={url} rel="noopener noreferrer" target="_blank">
              <Image
                src={image}
                layout="fill"
                alt="proyect"
                className="object-cover rounded-t-xl"
              />
            </a>
          </div>
        </div>
        <div className="h-auto flex flex-wrap w-full p-4 relative bg-neutral-300 rounded-b-xl min-h-[80px]">
          <p className={showMore ? "" : "truncate"}>{description}</p>
          <a
            className="text-neutral-600  cursor-pointer ml-2"
            onClick={seeMore}
          >
            {showMore ? "see less" : "see more"}
          </a>
        </div>
      </div>
      <Technologies tecnologies={tecnologies} />
      <div className="w-full flex justify-end items-end content-end">
        <div className="flex self-end">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={repository}
            className="border-redButton border text-redButton rounded-xl mr-2 p-3"
          >
            Repositorio
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={url}
            className="bg-redButton text-white rounded-xl p-3"
          >
            Web
          </a>
        </div>
      </div>
    </div>
  );
}
