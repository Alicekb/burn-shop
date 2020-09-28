import { useQuery, gql } from "@apollo/client";

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

const queryCategory = (category) => {
  const { loading, error, data } = useQuery(GET_CATEGORY_ITEMS, {
    variables: {
      category,
    },
  });

  return {
    items: data?.items,
    loading,
    error,
  };
};

export default queryCategory;
