import { Image, Transformation } from "cloudinary-react";
import { initializeApollo } from "@/lib/apolloClient";
import { useTabState, TabPanel } from "reakit/Tab";
import Layout from "@/components/Layout";
import Slider from "@/components/Slider";
import Item from "@/components/Item";
import { AdList, AdItem } from "@/components/styles/AdArea";
import { TabMenu, TabButton } from "@/components/styles/HomeTab";
import { ItemGrid } from "@/components/Item/styles";
import { MainArea } from "@/components/styles/PageLayouts";
import {
  GET_RECENT_ITEMS,
  GET_ANNOUNCED_ITEMS,
  GET_FEATURED_ITEMS,
} from "../graphql/Items";

const ADS = [
  {
    title: "Basic and Advanced Cameras",
    cloudFilename: "new-camera.png",
    alt: "DSLR camera facing upwards",
    description:
      "Check out all the latest advancements in cameras from the Good Smiles company.",
  },
  {
    title: "Weapons",
    cloudFilename: "toy-gun.png",
    alt: "Gun from arcade machine",
    description: "Check out all amazing weapons from the Senchal Overguild.",
  },
  {
    title: "Portable Generators",
    cloudFilename: "generator.png",
    alt: "gas generator from a movie set",
    description:
      "Take a look at our entire selection of dynamic generators from the Wessh-Ozobny series!",
  },
  {
    title: "Medicine & Health",
    cloudFilename: "project-meds.png",
    alt: "small yellow pack next to a hiking bottle",
    description:
      "Take a look at our entire selection of medicines from the Egan  Overguild!",
  },
];

const SLIDER_IMAGES = [
  {
    imgUrl: "coffee-station.jpg",
    alt: "Coffee station cups of various colors",
  },
  {
    imgUrl: "salvaing.jpg",
    alt: "Savaging Services by Wessh Overguild over a broken plane",
  },
  {
    imgUrl: "camera.jpg",
    alt: "Advanced Camera red series next to red drone",
  },
  {
    imgUrl: "cosmos.jpg",
    alt: "Cosmos Interceptor Spaceship by Kosma Overguild and A.C.E Foundation",
  },
];

const Home = ({ initialApolloState: { recent, announced, featured } }) => {
  const tab = useTabState({ selectedId: "tab1" });

  function generateItems(items) {
    return items.map((item) => (
      <li key={item.id}>
        <Item
          cloudFilename={item.cloud_filename}
          cost={item.cost}
          description={item.description}
          name={item.name}
          tag="new"
        />
      </li>
    ));
  }

  return (
    <>
      <Layout title="home">
        <Slider sliderImages={SLIDER_IMAGES} />
        <MainArea>
          <div>
            <TabMenu {...tab} aria-label="item tabs">
              <TabButton {...tab} id="tab1">
                NEW ARRIVALS
              </TabButton>
              <TabButton {...tab} id="tab2">
                NEW ANNOUNCED
              </TabButton>
              <TabButton {...tab} id="tab3">
                FEATURED ITEMS
              </TabButton>
            </TabMenu>
            <TabPanel {...tab} tabIndex="-1">
              <ItemGrid>{generateItems(recent)}</ItemGrid>
            </TabPanel>
            <TabPanel {...tab} tabIndex="-1">
              <ItemGrid>{generateItems(announced)}</ItemGrid>
            </TabPanel>
            <TabPanel {...tab} tabIndex="-1">
              <ItemGrid>{generateItems(featured)}</ItemGrid>
            </TabPanel>
          </div>
          <div>
            <AdList>
              {ADS.map((ad, index) => (
                <AdItem first={index === 0 ? true : false} key={index}>
                  <Image
                    cloudName="aliceb"
                    publicId={`burn-shop/ads/${ad.cloudFilename}`}
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

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const recent = await apolloClient.query({
    query: GET_RECENT_ITEMS,
  });

  const announced = await apolloClient.query({
    query: GET_ANNOUNCED_ITEMS,
  });

  const featured = await apolloClient.query({
    query: GET_FEATURED_ITEMS,
  });

  return {
    props: {
      initialApolloState: {
        recent: recent.data.items,
        announced: announced.data.items,
        featured: featured.data.items,
      },
    },
  };
}

export default Home;
