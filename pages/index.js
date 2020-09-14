import Head from "next/head";
import { useQuery, gql } from "@apollo/client";
import { withApollo } from "../lib/withApollo";
import styled from "@emotion/styled";
import Nav from "../components/Nav";
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

const GET_RECENT_ITEMS = gql`
  query getMyRecentItems {
    items(order_by: { created_at: desc }, limit: 20) {
      category
      cloud_filename
      cost
      description
      id
      name
      stats
      subcategory
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_RECENT_ITEMS);

  //! Implement a better loading/error process
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error(error);
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
            <HomeTab items={data.items} />
          </div>
          <div>
            <AdArea />
          </div>
        </MainArea>
      </main>
      <footer></footer>
    </>
  );
};

export default withApollo()(Home);
