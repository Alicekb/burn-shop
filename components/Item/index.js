import Link from "next/link";
import { Image, Transformation } from "cloudinary-react";
import { ItemBox, ImageBox, NewTag, SalesTag } from "./styles";

const Item = ({ cloudFilename, cost, name, tag }) => {
  function displayTag() {
    if (tag === "new") {
      return <NewTag>NEW</NewTag>;
    }
    if (tag == "sale") {
      return <SalesTag>SALE</SalesTag>;
    }
  }

  return (
    <Link
      href={`/products/?slug=${name}`}
      as={`/products/${name.replace(" ", "-")}`}
      passHref
    >
      <ItemBox>
        <ImageBox>
          <Image
            cloudName="aliceb"
            publicId={`burn-shop/items/${cloudFilename}`}
            alt={cloudFilename}
          >
            <Transformation width="150" height="150" crop="fill" />
          </Image>
          {displayTag()}
        </ImageBox>
        <h2>{name}</h2>
        <p>{cost} Argent</p>
      </ItemBox>
    </Link>
  );
};

export default Item;
