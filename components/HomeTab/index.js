import Item from "../Item";
import { useTabState, TabPanel } from "reakit/Tab";
import { TabMenu, TabButton, ItemGrid } from "./styles";

const HomeTab = ({ recentItems, announcedItems, featuredItems }) => {
  const tab = useTabState({ selectedId: "tab1" });

  return (
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
          {recentItems.map((item) => (
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
          {announcedItems.map((item) => (
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
          {featuredItems.map((item) => (
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
  );
};

export default HomeTab;
