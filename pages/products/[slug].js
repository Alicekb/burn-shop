import { useRouter } from "next/router";
import { withApollo } from "@/lib/withApollo";
import Layout from "@/components/Layout";
import { PageArea } from "@/components/styles/PageLayouts";
import queryProduct from "@/graphql/queryProduct";

const ProductPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const formatedSlug = slug.replace("-", " ");
  const { loading, error, item } = queryProduct(formatedSlug);

  //! Implement a better loading/error process
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }
  const {
    category,
    cloud_filename,
    cost,
    description,
    stats,
    subcategory,
  } = item;

  return (
    <Layout title={`${formatedSlug}`}>
      <PageArea>
        <header>
          <h1>{formatedSlug}</h1>
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

export default withApollo()(ProductPage);
