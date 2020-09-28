import { useQuery, gql } from "@apollo/client";

const GET_ITEM = gql`
  query getItem($name: String) {
    items(where: { name: { _eq: $name } }) {
      category
      cloud_filename
      cost
      description
      id
      stats
      subcategory
    }
  }
`;

const queryProduct = (name) => {
  const { loading, error, data } = useQuery(GET_ITEM, {
    variables: {
      name,
    },
  });

  return {
    item: data?.items[0],
    loading,
    error,
  };
};

export default queryProduct;
