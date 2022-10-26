import DATA_PROYECTS from "../utils.js/dataProyects";
import Carousel from "react-multi-carousel";
import SingleProyect from "./SingleProyect";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Proyects() {
  const data = DATA_PROYECTS();

  return (
    <div className="flex flex-col items-center w-full h-full ">
      <a name="proyects" />
      <p className="title">Mis proyectos</p>
      <Carousel
        responsive={responsive}
        className="w-full "
        itemClass="h-auto flex justify-center w-10/12 p-5 max-w-md"
        containerClass="w-full md:w-11/12 flex justify-self-center"
        infinite
      >
        {data.map(({ name, description, repository, image, tecnologies }) => {
          return (
            <SingleProyect
              key={name}
              name={name}
              description={description}
              repository={repository}
              image={image}
              tecnologies={tecnologies}
            />
          );
        })}
      </Carousel>
    </div>
  );
}
