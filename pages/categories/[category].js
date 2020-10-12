import { useRouter } from "next/router";
import { initializeApollo } from "@/lib/apolloClient";
import Item from "@/components/Item";
import Layout from "@/components/Layout";
import { ItemGrid } from "@/components/Item/styles";
import { PageArea } from "@/components/styles/PageLayouts";
import { GET_CATEGORY_ITEMS } from "@/graphql/categories";
import { CATEGORY_DESCRIPTIONS } from "@/utils/constants";

export const CategoryPage = ({ initialApolloState: { items } }) => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <>
      <Layout title={category}>
        <PageArea>
          <header>
            <h1>{category.toUpperCase().replace(/-/g, " ")}</h1>
            <img src="here.png" alt="banner alt" />
          </header>
          <p>{CATEGORY_DESCRIPTIONS[category] || CATEGORY_DESCRIPTIONS.misc}</p>
          <ItemGrid>
            {items.map((item) => (
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
  const apolloClient = initializeApollo();
  const { category } = params;

  const formatedCategory = category.replace(/-/g, " ");

  const queryData = await apolloClient.query({
    query: GET_CATEGORY_ITEMS,
    variables: {
      category: formatedCategory,
    },
  });

  return {
    props: {
      initialApolloState: {
        items: queryData.data.items,
      },
    },
    revalidate: 60,
  };
}

export default CategoryPage;
