import { Image, Transformation } from "cloudinary-react";
import { ItemBox } from "./styles";

const Item = ({ cloud_filename, cost, description, name }) => {
  return (
    <ItemBox>
      <a href="">
        <Image
          cloudName="aliceb"
          publicId={`burn-shop/items/${cloud_filename}`}
          alt={cloud_filename}
        >
          <Transformation
            width="150"
            height="150"
            gravity="face"
            crop="thumb"
          />
        </Image>
        <h2>{name}</h2>
        <p>{cost} Argent</p>
      </a>
    </ItemBox>
  );
};

export default Item;
