import Link from "next/link";
import { graphQLClient } from "@/lib/graphql-client";
import { gql } from "graphql-request";
import { Image, Transformation } from "cloudinary-react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Layout from "@/components/Layout";
import Item from "@/components/Item";
import { ShowArea } from "@/components/styles/PageLayouts";
import { ItemGrid } from "@/components/Item/styles";

const ProductPage = ({ item, related }) => {
  const { category, cloudFilename, cost, description, stats, name } = item;
  const categoryName = category.replace(/-/g, " ");
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
            {related.map((item) => (
              <li key={item._id}>
                <Item
                  cloudFilename={item.cloudFilename}
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

export async function getStaticPaths() {
  const {
    allItems: { data: items },
  } = await graphQLClient.request(
    gql`
      {
        allItems(_size: 10000) {
          data {
            name
          }
        }
      }
    `
  );

  console.log(items.length);

  const paths = items.map((item) => ({
    params: { slug: item.name.replace(/\s/g, "-") },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const name = slug.replace(/-/g, " ");
  const { findItemByName: item } = await graphQLClient.request(
    gql`
      query GetItem($name: String!) {
        findItemByName(name: $name) {
          category {
            name
          }
          cloudFilename
          cost
          description
          stats
          name
        }
      }
    `,
    { name }
  );

  const { findCategoryByName: category } = await graphQLClient.request(
    gql`
      query GetCategory($name: String!) {
        findCategoryByName(name: $name) {
          items {
            data {
              _id
              cloudFilename
              cost
              description
              name
            }
          }
        }
      }
    `,
    { name: item.category.name }
  );

  console.log("category", category);

  return {
    props: {
      item: {
        ...item,
        category: item.category.name,
      },
      related: category.items.data.slice(0, 4),
    },
    revalidate: 60,
  };
}

export default ProductPage;
