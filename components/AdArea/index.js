import { Image, Transformation } from "cloudinary-react";
import { AdList, AdItem } from "./styles";

const ADS = [
  {
    title: "Basic and Advanced Cameras",
    cloud_filename: "new-camera.png",
    alt: "DSLR camera facing upwards",
    description:
      "Check out all the latest advancements in cameras from the Good Smiles company.",
  },
  {
    title: "Weapons",
    cloud_filename: "toy-gun.png",
    alt: "Gun from arcade machine",
    description: "Check out all amazing weapons from the Senchal Overguild.",
  },
  {
    title: "Portable Generators",
    cloud_filename: "generator.png",
    alt: "gas generator from a movie set",
    description:
      "Take a look at our entire selection of dynamic generators from the Wessh-Ozobny series!",
  },
  {
    title: "Medicine & Health",
    cloud_filename: "project-meds.png",
    alt: "small yellow pack next to a hiking bottle",
    description:
      "Take a look at our entire selection of medicines from the Egan  Overguild!",
  },
];

const AdArea = () => {
  return (
    <AdList>
      {ADS.map((ad, index) => (
        <AdItem first={index === 0 ? true : false} key={index}>
          <Image
            cloudName="aliceb"
            publicId={`burn-shop/ads/${ad.cloud_filename}`}
            alt={ad.alt}
          >
            <Transformation width="250" height="500" crop="fit" />
          </Image>
          <a href="#">
            <div>
              <h2>{ad.title}</h2>
              <p>{ad.description}</p>
            </div>
          </a>
        </AdItem>
      ))}
    </AdList>
  );
};

export default AdArea;
