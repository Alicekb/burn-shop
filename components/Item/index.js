import { Image, Transformation } from "cloudinary-react";
import { ItemBox, ImageBox } from "./styles";

const Item = ({ cloud_filename, cost, name, tag }) => {
  return (
    <ItemBox>
      <a href="">
        <ImageBox>
          <Image
            cloudName="aliceb"
            publicId={`burn-shop/items/${cloud_filename}`}
            alt={cloud_filename}
          >
            <Transformation width="150" height="150" crop="fill" />
          </Image>
          {tag ? <p>{tag}</p> : null}
        </ImageBox>
        <h2>{name}</h2>
        <p>{cost} Argent</p>
      </a>
    </ItemBox>
  );
};

export default Item;
