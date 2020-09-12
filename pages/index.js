import Head from "next/head";
import Nav from "../components/Nav";
import Slider from "../components/Slider";
import Item from "../components/Item";
import styled from "@emotion/styled";
import { useTabState, Tab, TabList, TabPanel } from "reakit/Tab";

const MainArea = styled.div`
  @media (min-width: 1000px) {
    max-width: 1180px;
    margin: 0 auto;
  }
`;

const TabMenu = styled(TabList)`
  margin-top: 30px;
  @media (max-width: 700px) {
    button {
      margin-bottom: 3px;
      width: 100%;
    }
  }
  @media (min-width: 700px) {
    margin-left: 20px;
    button:not(:first-of-type) {
      margin-left: 10px;
    }
  }
  @media (min-width: 1000px) {
    margin-left: 0;
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
  grid-template-columns: 1fr;
  justify-items: center;
  margin: 15px 0;
  padding: 0;
  list-style: none;
  @media (min-width: 700px) {
    grid-template-columns: repeat(3, 15rem);
    justify-items: start;
    margin-left: 20px;
  }
  @media (min-width: 1000px) {
    grid-template-columns: repeat(4, 16rem);
    justify-items: start;
    margin-left: 0;
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
                <Item />
              </li>
            </ItemGrid>
          </TabPanel>
        </MainArea>
      </main>
      <footer></footer>
    </>
  );
}
