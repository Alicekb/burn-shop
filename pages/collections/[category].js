import Head from "next/head";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { useQuery, gql } from "@apollo/client";
import { withApollo } from "@/lib/withApollo";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Item from "@/components/Item";
import { MainArea } from "@/pages/index";
import { ItemGrid } from "@/components/Item/styles";

const PageArea = styled(MainArea)`
  grid-template-columns: 1fr;
  justify-items: center;

  h2 {
    justify-self: start;
  }
`;

const GET_CATEGORY_ITEMS = gql`
  query getCategoryItems($category: String) {
    items(where: { category: { _eq: $category } }) {
      id
      category
      name
      cloud_filename
    }
  }
`;

export const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;
  const { loading, error, data } = useQuery(GET_CATEGORY_ITEMS, {
    variables: {
      category,
    },
  });

  //! Implement a better loading/error process
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  return (
    <>
      <Head>
        <title>{category} - Burn Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
        <PageArea>
          <h2>{category.toUpperCase()}</h2>

          <img src="here.png" alt="banner alt" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae debitis, delectus sint iste culpa laudantium cupiditate
            ab veritatis adipisci a impedit voluptas molestias. Ipsum accusamus
            dicta perferendis distinctio earum, tempore voluptate aperiam
            nostrum tenetur sunt assumenda est voluptatem, eaque adipisci
            commodi itaque facere quibusdam minima incidunt eum quaerat dolores
            nihil in. Earum itaque odio doloribus dolorum ipsum ullam, error
            deleniti debitis soluta expedita quam animi unde omnis vero maiores
            ducimus adipisci totam blanditiis dolore reiciendis corporis modi et
            ex! Quasi.
          </p>
          <ItemGrid>
            {data.items.map((item) => (
              <li key={item.id}>
                <Item
                  cloud_filename={item.cloud_filename}
                  cost={item.cost}
                  description={item.description}
                  name={item.name}
                  tag="new"
                />
              </li>
            ))}
          </ItemGrid>
        </PageArea>
      </main>
      <Footer />
    </>
  );
};

export default withApollo()(CategoryPage);
