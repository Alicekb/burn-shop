import { initializeApollo } from "@/lib/apolloClient";
import Layout from "@/components/Layout";
import { PageArea } from "@/components/styles/PageLayouts";
import { GET_ITEM } from "@/graphql/Items";

const ProductPage = ({ initialApolloState: { item } }) => {
  const {
    category,
    cloud_filename,
    cost,
    description,
    stats,
    name,
    subcategory,
  } = item;

  return (
    <Layout title={name}>
      <PageArea>
        <header>
          <h1>{name}</h1>
          <h2>
            {category} {subcategory === "n/a" ? "" : `- ${subcategory}`}
          </h2>
        </header>
        <img alt="image for item" />
        <p>{cost} Argent</p>
        <p>{stats}</p>
        <p>{description}</p>
      </PageArea>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const apolloClient = initializeApollo();
  const { slug } = context.params;
  const name = slug.replace("-", " ");

  const item = await apolloClient.query({
    query: GET_ITEM,
    variables: {
      name,
    },
  });

  return {
    props: {
      initialApolloState: {
        item: item.data.items[0],
      },
    },
  };
}

export default ProductPage;
