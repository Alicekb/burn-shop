import Head from "next/head";
import { useQuery, gql } from "@apollo/client";
import { withApollo } from "../lib/withApollo";
import { Image, Transformation } from "cloudinary-react";
import styled from "@emotion/styled";
import Nav from "../components/Nav";
import Slider from "../components/Slider";
import HomeTab from "../components/HomeTab";

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

const AdArea = styled.ul`
  list-style: none;
  padding: 0;
`;

const GET_MY_RECENT_ITEMS = gql`
  query getMyRecentItems {
    items(order_by: { created_at: desc }, limit: 10) {
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
  const { loading, error, data } = useQuery(GET_MY_RECENT_ITEMS);

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
            <AdArea>
              <li>
                <Image
                  cloudName="aliceb"
                  publicId={"burn-shop/ads/new-camera.png"}
                >
                  <Transformation
                    width="200"
                    height="300"
                    gravity="face"
                    crop="thumb"
                  />
                </Image>
              </li>
            </AdArea>
          </div>
        </MainArea>
      </main>
      <footer></footer>
    </>
  );
};

export default withApollo()(Home);
