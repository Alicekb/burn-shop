import { Image, Transformation } from "cloudinary-react";
import { withApollo } from "@/lib/withApollo";
import { useTabState, TabPanel } from "reakit/Tab";
import queryIndexItems from "../graphql/queryIndexItems";
import Layout from "@/components/Layout";
import Slider from "@/components/Slider";
import Item from "@/components/Item";
import { AdList, AdItem } from "@/components/styles/AdArea";
import { TabMenu, TabButton } from "@/components/styles/HomeTab";
import { ItemGrid } from "@/components/Item/styles";
import { MainArea } from "@/components/styles/PageLayouts";

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

const Home = () => {
  const [recent, announced, featured] = queryIndexItems();
  const tab = useTabState({ selectedId: "tab1" });

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
              <ItemGrid>
                {recent.data.items.map((item) => (
                  <li key={item.id}>
                    <Item
                      cloud_filename={item.cloud_filename}
                      cost={item.cost}
                      description={item.description}
                      name={item.name}
                      tag="new"
                    />
                  </li>
                ))}
              </ItemGrid>
            </TabPanel>
            <TabPanel {...tab} tabIndex="-1">
              <ItemGrid>
                {announced.data.items.map((item) => (
                  <li key={item.id}>
                    <Item
                      cloud_filename={item.cloud_filename}
                      cost={item.cost}
                      description={item.description}
                      name={item.name}
                      tag="sale"
                    />
                  </li>
                ))}
              </ItemGrid>
            </TabPanel>
            <TabPanel {...tab} tabIndex="-1">
              <ItemGrid>
                {featured.data.items.map((item) => (
                  <li key={item.id}>
                    <Item
                      cloud_filename={item.cloud_filename}
                      cost={item.cost}
                      description={item.description}
                      name={item.name}
                    />
                  </li>
                ))}
              </ItemGrid>
            </TabPanel>
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
