import Head from "next/head";
import Nav from "../components/Nav";
import Slider from "../components/Slider";
import styled from "@emotion/styled";
import { useTabState, Tab, TabList, TabPanel } from "reakit/Tab";
import { Box } from "reakit/Box";

const MainArea = styled.div`
  margin-left: 20px;
  @media (min-width: 1000px) {
    max-width: 90%;
    margin: 0 auto;
  }
`;

const TabMenu = styled(TabList)`
  margin-top: 30px;
  button:not(:first-of-type) {
    margin-left: 10px;
  }
`;

const TabButton = styled(Tab)`
  padding: 10px 20px;
  background-color: ${({ id, theme, selectedId }) =>
    id === selectedId ? theme.colors.purple : "lightgrey"};
  color: ${({ id, selectedId }) => (id === selectedId ? "white" : "#666666")};
  border: 0;
  font-weight: 700;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.purple};
    color: white;
  }
`;

const ItemGrid = styled.ul`
  display: grid;
  grid-template-columns: 16rem;
  list-style: none;
  margin: 15px 0 0 15%;
  padding: 0;
  @media (min-width: 700px) {
    grid-template-columns: repeat(3, 15rem);
    margin-left: 0;
  }
  @media (min-width: 1000px) {
    grid-template-columns: repeat(4, 16rem);
  }
`;

const ItemBox = styled(Box)`
  width: 14rem;
  height: 100%;
  h2 {
    margin-top: 10px;
    line-height: 1;
  }
  img {
    width: 100%;
  }
  img:hover {
    border: 2px solid ${({ theme: { colors } }) => colors.burnt};
  }
`;

export default function Home() {
  const tab = useTabState({ selectedId: "tab1" });
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
              <li>
                <ItemBox>
                  <a href="">
                    <img src="https://via.placeholder.com/150"></img>
                  </a>
                  <h2>Advanced Camera</h2>
                  <p>
                    Basic cameras take pictures and video and post or stream
                    them to the Complenet through manual functionality. Advanced
                    cameras can...
                  </p>
                  <p>2000 Argent</p>
                </ItemBox>
              </li>
              <li>
                <ItemBox>
                  <a href="">
                    <img src="https://via.placeholder.com/150"></img>
                  </a>
                  <h2>Advanced Camera</h2>
                  <p>
                    Basic cameras take pictures and video and post or stream
                    them to the Complenet through manual functionality. Advanced
                    cameras can...
                  </p>
                  <p>2000 Argent</p>
                </ItemBox>
              </li>
              <li>
                <ItemBox>
                  <a href="">
                    <img src="https://via.placeholder.com/150"></img>
                  </a>
                  <h2>Advanced Camera</h2>
                  <p>
                    Basic cameras take pictures and video and post or stream
                    them to the Complenet through manual functionality. Advanced
                    cameras can...
                  </p>
                  <p>2000 Argent</p>
                </ItemBox>
              </li>
              <li>
                <ItemBox>
                  <a href="">
                    <img src="https://via.placeholder.com/150"></img>
                  </a>
                  <h2>Advanced Camera</h2>
                  <p>
                    Basic cameras take pictures and video and post or stream
                    them to the Complenet through manual functionality. Advanced
                    cameras can...
                  </p>
                  <p>2000 Argent</p>
                </ItemBox>
              </li>
            </ItemGrid>
          </TabPanel>
        </MainArea>
      </main>
      <footer></footer>
    </>
  );
}
