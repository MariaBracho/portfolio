import SingleCerticate from "./SingleCertificates";
import CERTIFICATES_DATA from "../utils.js/CertificatesDatas";
import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
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

export default function CertificatesCarousel() {
  const certificate = CERTIFICATES_DATA();

  return (
    <div className="my-8">
      <a name="certificates" />
      <p className="title">Certificates</p>
      <div className="flex w-full justify-center">
        <Carousel
          responsive={responsive}
          itemClass="w-28 h-auto flex justify-center"
          containerClass="w-full  md:w-9/12 flex justify-self-center"
          infinite
        >
          {certificate.map(
            ({ certificateImage, certificateName, institution }) => {
              const data = { certificateImage, certificateName, institution };
              return <SingleCerticate key={certificateName} {...data} />;
            }
          )}
        </Carousel>
      </div>
    </div>
  );
}
