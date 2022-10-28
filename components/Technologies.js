import Image from "next/image";

export default function Technologies({ tecnologies = [] }) {
  return (
    <div className="w-full h-auto my-6">
      <p className="flex text-xl font-medium my-2">Tecnologías</p>
      <div className="flex flex-wrap justify-start">
        {tecnologies.map(({ logo, name, url }) => {
          return (
            <div key={url} className="mr-4 flex flex-col justify-center">
              <Image src={logo} width="34px" height="34px" alt="technologies" />
              <p className="underline underline-offset-2  text-sm text-center">
                <a rel="noopener noreferrer" target="_blank" href={url}>
                  {name}
                </a>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
