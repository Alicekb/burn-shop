import { gql } from "@apollo/client";

const IndexPage = {
  fragments: {
    items: gql`
      fragment IndexPageItems on items {
        id
        cloud_filename
        cost
        name
      }
    `,
  },
};

const GET_RECENT_ITEMS = gql`
  query getMyRecentItems {
    items(order_by: { created_at: desc }, limit: 20) {
      ...IndexPageItems
    }
  }
  ${IndexPage.fragments.items}
`;

const GET_ANNOUNCED_ITEMS = gql`
  query getAnnouncedItems {
    items(order_by: { updated_at: desc }, limit: 20) {
      ...IndexPageItems
    }
  }
  ${IndexPage.fragments.items}
`;

const GET_FEATURED_ITEMS = gql`
  query getFeaturedItems {
    items(order_by: { cost: desc }, limit: 20) {
      ...IndexPageItems
    }
  }
  ${IndexPage.fragments.items}
`;

const GET_ITEM = gql`
  query getItem($name: String) {
    items(where: { name: { _eq: $name } }) {
      category
      cloud_filename
      cost
      description
      id
      name
      stats
    }
  }
`;

export { GET_RECENT_ITEMS, GET_ANNOUNCED_ITEMS, GET_FEATURED_ITEMS, GET_ITEM };
