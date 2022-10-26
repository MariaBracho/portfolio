import Image from "next/image";

export default function Technologies({ tecnologies = [] }) {
  return (
    <div className="py-6">
      <p className="flex justify-start text-xl font-medium">Tecnologías</p>
      <div className="flex">
        {tecnologies.map(({ logo, name, url }) => {
          return (
            <div key={url} className="mr-4 flex flex-col justify-center">
              <Image src={logo} width="34px" height="34px" alt="technologies" />
              <p className="underline underline-offset-2 text-sm">
                <a href={url}>{name}</a>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
