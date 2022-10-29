import DATA_PROYECTS from "../utils.js/dataProyects";
import Carousel from "react-multi-carousel";
import SingleProyect from "./SingleProyect";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
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
      <a name="proyectos" />
      <p className="title">Mis proyectos</p>
      <Carousel
        responsive={responsive}
        className="w-full"
        itemClass="h-auto flex flex-col justify-center w-full p-2 md:p5  "
        containerClass="w-full md:w-11/12 flex justify-self-center"
        sliderClass="flex items-start"
      >
        {data.map(
          ({ name, description, repository, image, tecnologies, url }) => {
            return (
              <SingleProyect
                key={url}
                name={name}
                description={description}
                repository={repository}
                url={url}
                image={image}
                tecnologies={tecnologies}
              />
            );
          }
        )}
      </Carousel>
    </div>
  );
}
