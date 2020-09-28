import { gql } from "@apollo/client";

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

export { GET_CATEGORY_ITEMS };
