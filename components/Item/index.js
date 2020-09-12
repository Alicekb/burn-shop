import { Image } from "cloudinary-react";
import { ItemBox } from "./styles";

const Item = ({
  category,
  cloud_filename,
  cost,
  description,
  name,
  subcategory,
}) => {
  function setSubcategory() {
    return subcategory === "n/a" ? null : `- ${subcategory}`;
  }

  return (
    <ItemBox>
      <a href="">
        <Image
          cloudName="aliceb"
          publicId={`burn-shop/items/${cloud_filename}`}
          alt={cloud_filename}
        />
      </a>
      <h2>{name}</h2>
      <h3>
        {category} {setSubcategory()}
      </h3>
      <p>{description}</p>
      <p>{cost} Argent</p>
    </ItemBox>
  );
};

export default Item;
