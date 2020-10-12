import Link from "next/link";
import { Image, Transformation } from "cloudinary-react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { initializeApollo } from "@/lib/apolloClient";
import Layout from "@/components/Layout";
import Item from "@/components/Item";
import { ShowArea } from "@/components/styles/PageLayouts";
import { ItemGrid } from "@/components/Item/styles";
import { GET_ITEM } from "@/graphql/Items";
import { GET_RELATED_ITEMS } from "@/graphql/categories";

const ProductPage = ({ initialApolloState: { item, related } }) => {
  const {
    category,
    cloud_filename: cloudFilename,
    cost,
    description,
    stats,
    name,
  } = item;
  const categoryName = category.replace("-", " ");
  const categoryCapitalized =
    category.charAt(0).toUpperCase() + categoryName.slice(1);

  return (
    <Layout title={name}>
      <ShowArea>
        <p id="show-link">
          <Link href="/" passHref>
            Home
          </Link>
          /
          <Link href={`/categories/${categoryName}`}>
            {categoryCapitalized}
          </Link>
          / <span>{name}</span>
        </p>
        <Image
          cloudName="aliceb"
          publicId={`burn-shop/items/${cloudFilename}`}
          alt={cloudFilename}
          id="item-image"
        >
          <Transformation width="400" height="400" crop="fill" />
        </Image>
        <div id="item-area">
          <h1>{name.toUpperCase()}</h1>
          <h2>{stats}</h2>
          <div className="ratings">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar /> 1 review
          </div>
          <p>${cost}</p>
          <p>{description}</p>
          <form id="order-form">
            <label htmlFor="quantiy">Qty</label>
            <input type="number" id="quantiy" defaultValue={1} />
            <button>ADD TO CART</button>
            <button>BUY IT NOW</button>
          </form>
        </div>
        <div id="reviews">
          <header>
            <h2>CUSTOMER REVIEWS</h2>
            <div>
              <div className="ratings">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
                <AiOutlineStar /> based on 1 review
              </div>
              <a href="/#">Write a review</a>
            </div>
          </header>
          <div className="user-review">
            <div>
              <div className="ratings">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
              <h3>This is a fake review</h3>
              <p>Captain Kri on Kunye, 29, 3420</p>
              <p>I love this binding net!</p>
            </div>
            <a href="/#">Report as Inappropriate</a>
          </div>
        </div>
        <div id="related">
          <h2>YOU MIGHT ALSO LIKE</h2>
          <ItemGrid>
            {related.items.map((item) => (
              <li key={item.id}>
                <Item
                  cloudFilename={item.cloud_filename}
                  cost={item.cost}
                  description={item.description}
                  name={item.name}
                />
              </li>
            ))}
          </ItemGrid>
        </div>
      </ShowArea>
    </Layout>
  );
};

export async function getServerSideProps({ params: { slug } }) {
  const apolloClient = initializeApollo();
  const name = slug.replace("-", " ");

  const item = await apolloClient.query({
    query: GET_ITEM,
    variables: {
      name,
    },
  });

  const items = await apolloClient.query({
    query: GET_RELATED_ITEMS,
    variables: {
      category: item.category,
    },
  });

  return {
    props: {
      initialApolloState: {
        item: item.data.items[0],
        related: {
          items: items.data.items,
        },
      },
    },
  };
}

export default ProductPage;
