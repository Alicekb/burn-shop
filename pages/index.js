import { withApollo } from "@/lib/withApollo";
import queryIndexItems from "../graphql/queryIndexItems";
import styled from "@emotion/styled";
import Layout from "@/components/Layout";
import Slider from "@/components/Slider";
import HomeTab from "@/components/HomeTab";
import AdArea from "@/components/AdArea";

export const MainArea = styled.div`
  margin-top: 80px;

  @media (min-width: 1000px) {
    max-width: 1180px;
    margin-left: auto;
    margin-right: auto;
  }

  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Home = () => {
  const [recent, announced, featured] = queryIndexItems();

  //! Implement a better loading/error process
  if (recent.loading || announced.loading || featured.loading) {
    return <div>Loading...</div>;
  }

  if (recent.error || announced.error || featured.error) {
    return <div>Error!</div>;
  }

  return (
    <>
      <Layout title="home">
        <Slider />
        <MainArea>
          <div>
            <HomeTab
              recentItems={recent.data.items}
              announcedItems={announced.data.items}
              featuredItems={featured.data.items}
            />
          </div>
          <div>
            <AdArea />
          </div>
        </MainArea>
      </Layout>
    </>
  );
};

export default withApollo()(Home);
