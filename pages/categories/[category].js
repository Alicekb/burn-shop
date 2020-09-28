import { useRouter } from "next/router";
import { withApollo } from "@/lib/withApollo";
import Item from "@/components/Item";
import Layout from "@/components/Layout";
import { ItemGrid } from "@/components/Item/styles";
import { PageArea } from "@/components/styles/PageLayouts";
import queryCategory from "@/graphql/queryCategory";

export const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;
  const { loading, error, items } = queryCategory(category);

  //! Implement a better loading/error process
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

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

export default withApollo()(CategoryPage);
