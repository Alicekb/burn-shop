import { Image, Transformation } from "cloudinary-react";
import { withApollo } from "@/lib/withApollo";
import queryIndexItems from "../graphql/queryIndexItems";
import styled from "@emotion/styled";
import Layout from "@/components/Layout";
import Slider from "@/components/Slider";
import HomeTab from "@/components/HomeTab";
import { AdList, AdItem } from "@/components/styles/AdArea";

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

const ADS = [
  {
    title: "Basic and Advanced Cameras",
    cloud_filename: "new-camera.png",
    alt: "DSLR camera facing upwards",
    description:
      "Check out all the latest advancements in cameras from the Good Smiles company.",
  },
  {
    title: "Weapons",
    cloud_filename: "toy-gun.png",
    alt: "Gun from arcade machine",
    description: "Check out all amazing weapons from the Senchal Overguild.",
  },
  {
    title: "Portable Generators",
    cloud_filename: "generator.png",
    alt: "gas generator from a movie set",
    description:
      "Take a look at our entire selection of dynamic generators from the Wessh-Ozobny series!",
  },
  {
    title: "Medicine & Health",
    cloud_filename: "project-meds.png",
    alt: "small yellow pack next to a hiking bottle",
    description:
      "Take a look at our entire selection of medicines from the Egan  Overguild!",
  },
];

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
            <AdList>
              {ADS.map((ad, index) => (
                <AdItem first={index === 0 ? true : false} key={index}>
                  <Image
                    cloudName="aliceb"
                    publicId={`burn-shop/ads/${ad.cloud_filename}`}
                    alt={ad.alt}
                  >
                    <Transformation width="250" height="500" crop="fit" />
                  </Image>
                  <a href="#">
                    <div>
                      <h2>{ad.title}</h2>
                      <p>{ad.description}</p>
                    </div>
                  </a>
                </AdItem>
              ))}
            </AdList>
          </div>
        </MainArea>
      </Layout>
    </>
  );
};

export default withApollo()(Home);
