import { gql } from "@apollo/client";

const CategoryFields = {
  fragments: {
    category: gql`
      fragment CategoryItems on items {
        category
        cloud_filename
        cost
        id
        name
      }
    `,
  },
};

const GET_CATEGORY_ITEMS = gql`
  query getCategoryItems($category: String) {
    items(where: { category: { _eq: $category } }) {
      ...CategoryItems
    }
  }
  ${CategoryFields.fragments.category}
`;

const GET_RELATED_ITEMS = gql`
  query getCategoryItems($category: String) {
    items(where: { category: { _eq: $category } }, limit: 4) {
      ...CategoryItems
    }
  }
  ${CategoryFields.fragments.category}
`;

export { GET_CATEGORY_ITEMS, GET_RELATED_ITEMS };
