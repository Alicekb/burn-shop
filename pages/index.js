import Head from "next/head";
import { useQuery, gql } from "@apollo/client";
import { withApollo } from "../lib/withApollo";
import styled from "@emotion/styled";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import HomeTab from "../components/HomeTab";
import AdArea from "../components/AdArea";

const MainArea = styled.div`
  margin-top: 30px;

  @media (min-width: 1000px) {
    max-width: 1180px;
    margin-left: auto;
    margin-right: auto;
  }

  display: grid;
  grid-template-columns: 1fr 1fr;
`;

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

const Home = () => {
  const {
    loading: recentLoading,
    error: recentError,
    data: recentItems,
  } = useQuery(GET_RECENT_ITEMS);
  const {
    loading: announcedLoading,
    error: announcedError,
    data: announcedItems,
  } = useQuery(GET_ANNOUNCED_ITEMS);
  const {
    loading: featuredLoading,
    error: featuredError,
    data: featuredItems,
  } = useQuery(GET_FEATURED_ITEMS);

  //! Implement a better loading/error process
  if (recentLoading || announcedLoading || featuredLoading) {
    return <div>Loading...</div>;
  }

  if (recentError || announcedError || featuredError) {
    return <div>Error!</div>;
  }

  return (
    <>
      <Head>
        <title>Home - Burn Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
        <Slider />
        <MainArea>
          <div>
            <HomeTab
              recentItems={recentItems.items}
              announcedItems={announcedItems.items}
              featuredItems={featuredItems.items}
            />
          </div>
          <div>
            <AdArea />
          </div>
        </MainArea>
      </main>
      <Footer></Footer>
    </>
  );
};

export default withApollo()(Home);
