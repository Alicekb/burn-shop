import { Image, Transformation } from "cloudinary-react";
import { graphQLClient } from "@/lib/graphql-client";
import { gql } from "graphql-request";
import { useTabState, TabPanel } from "reakit/Tab";
import Layout from "@/components/Layout";
import Slider from "@/components/Slider";
import Item from "@/components/Item";
import { AdList, AdItem } from "@/components/styles/AdArea";
import { TabMenu, TabButton } from "@/components/styles/HomeTab";
import { ItemGrid } from "@/components/Item/styles";
import { MainArea } from "@/components/styles/PageLayouts";
import { ADS, SLIDER_IMAGES } from "@/utils/constants";

const Home = ({ items: { recent, announced, featured } }) => {
  const tab = useTabState({ selectedId: "tab1" });

  function generateItems(items, tag) {
    return items.map((item) => (
      <li key={item._id}>
        <Item
          cloudFilename={item.cloudFilename}
          cost={item.cost}
          description={item.description}
          name={item.name}
          tag={tag}
        />
      </li>
    ));
  }

  return (
    <>
      <Layout title="home">
        <Slider sliderImages={SLIDER_IMAGES} />
        <MainArea style={{ marginTop: "4rem" }}>
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
              <ItemGrid>{generateItems(recent, "new")}</ItemGrid>
            </TabPanel>
            <TabPanel {...tab} tabIndex="-1">
              <ItemGrid>{generateItems(announced, "sale")}</ItemGrid>
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

export async function getStaticProps() {
  const {
    allItems: { data: items },
  } = await graphQLClient.request(gql`
    {
      allItems {
        data {
          _id
          cloudFilename
          cost
          name
        }
      }
    }
  `);

  const recent = [...items].slice(0, 19);

  const announced = [...items].reverse().slice(0, 19);

  const featured = items.slice(19, 38);

  return {
    props: {
      items: {
        recent,
        announced,
        featured,
      },
    },
    revalidate: 60,
  };
}

export default Home;
