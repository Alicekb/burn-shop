import { useRouter } from "next/router";
import { initializeApollo } from "@/lib/apolloClient";
import Item from "@/components/Item";
import Layout from "@/components/Layout";
import { ItemGrid } from "@/components/Item/styles";
import { PageArea } from "@/components/styles/PageLayouts";
import { GET_CATEGORY_ITEMS } from "@/graphql/categories";

export const CategoryPage = ({ initialApolloState: { items } }) => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <>
      <Layout title={category}>
        <PageArea>
          <h1>{category.toUpperCase()}</h1>

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
            {items.map((item) => (
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
      </Layout>
    </>
  );
};

export async function getServerSideProps(context) {
  const apolloClient = initializeApollo();
  const { category } = context.params;

  const queryData = await apolloClient.query({
    query: GET_CATEGORY_ITEMS,
    variables: {
      category,
    },
  });

  return {
    props: {
      initialApolloState: {
        items: queryData.data.items,
      },
    },
  };
}

export default CategoryPage;
