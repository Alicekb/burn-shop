import { graphQLClient } from "@/lib/graphql-client";
import { gql } from "graphql-request";
import Item from "@/components/Item";
import Layout from "@/components/Layout";
import { ItemGrid } from "@/components/Item/styles";
import { PageArea } from "@/components/styles/PageLayouts";

export const CategoryPage = ({ category: { name, description, items } }) => {
  return (
    <>
      <Layout title={name}>
        <PageArea>
          <header>
            <h1>{name.toUpperCase()}</h1>
            <img src="here.png" alt="banner alt" />
          </header>
          <p>{description}</p>
          <ItemGrid>
            {items.map((item) => (
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
        </PageArea>
      </Layout>
    </>
  );
};

export async function getStaticPaths() {
  const paths = [
    { params: { category: "adventuring-gear" } },
    { params: { category: "armor" } },
    { params: { category: "art-supplies" } },
    { params: { category: "athletic-supplies" } },
    { params: { category: "cameras" } },
    { params: { category: "clothing" } },
    { params: { category: "food-supplies" } },
    { params: { category: "gaming" } },
    { params: { category: "musical-instruments" } },
    { params: { category: "weapons" } },
    { params: { category: "vehicles" } },
  ];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { category } = params;

  const formatedCategory = category.replace(/-/g, " ");

  const { findCategoryByName } = await graphQLClient.request(
    gql`
      query GetCategory($name: String!) {
        findCategoryByName(name: $name) {
          name
          description
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
    { name: formatedCategory }
  );

  return {
    props: {
      category: {
        name: findCategoryByName.name,
        description: findCategoryByName.description,
        items: findCategoryByName.items.data,
      },
    },
    revalidate: 60,
  };
}

export default CategoryPage;
