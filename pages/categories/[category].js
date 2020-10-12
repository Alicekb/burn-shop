import { useRouter } from "next/router";
import { initializeApollo } from "@/lib/apolloClient";
import Item from "@/components/Item";
import Layout from "@/components/Layout";
import { ItemGrid } from "@/components/Item/styles";
import { PageArea } from "@/components/styles/PageLayouts";
import { GET_CATEGORY_ITEMS } from "@/graphql/categories";

const categoryDescriptions = {
  adventuring:
    "No adventurer can Survive Olaxis for long without the proper Equipment. This section provides a description of Adventuring Gear available for sale around the galaxy. While adventurers rely on Weapons and armor to live through Combat encounters, the rest of their Equipment is just as important for surviving the perilous life they choose in Olaxis. If an object requires an action to use, player Characters must make a skill roll during Combat to gain the benefit of the item.",
  armor:
    "Defense is an important part of adventuring. Armor suits and personal Shield generators allow adventurers the Protection they need to Survive violent conflict and harsh environments. Armor suits are heavy mechanical suits custom made to fit the person buying them. Each is expensive and requires a month to create—after payment is given upfront.Personal Shield generators are 3-inch-diameter badges that can be pinned to Clothing, harmlessly attached to the skin, or carried. When a powerful, compact Plasma Power Cell is installed in the badge, a force field is generated around the wearer, blocking physical attacks (such as those made with weapons) while still allowing the wearer to physically interact with their environment.",
  misc:
    "Though existence is coming to an end Olaxans take time to go to work, relax, and pursue Hobbies. All manner of games are enjoyed in Olaxis, especially by crews of adventurers on long flights together. Those who enjoy physical activity and want to stay fit use athletic supplies. Basic cameras take pictures and video and post or stream them to the Complenet through manual functionality. Clothing comes in a variety of shapes and sizes to fit a galaxy’s worth of fashions. Though most homes and spacecraft are equipped with magic devices that can make most any dish, there are those who still enjoy cooking and perfecting new recipes. With so many cultures in Olaxis the number of musical instruments is nearly infinite.",
  weapons:
    "Sometimes the best defense is a good Laser Pistol. For the heroes of Olaxis Weapons are necessary tools, though some only use them as a last resort. Melee Weapons are used in hand-to-hand Combat and often use the Melee Skill to attack and defend. Melee Weapons without the ranged quality can be hurled to make ranged attacks, provided your target is within 5 squares of you when the attack is made. Ranged Weapons can be fired, launched, or thrown at enemies. These Weapons often use the Ranged Skill to attack.",
  vehicles:
    "Cars, jet bikes, boats, and submersibles come in all types of sizes and from a variety of manufacturers as well as from independent artisans. A vehicle with the Weapons quality has the Weapons listed in parenthesis mounted to the vehicle. Any creature riding on the vehicle can activate these Weapons, but once a creature uses a vehicle’s weapon, no other creature can use that weapon until the start of the next round of Combat. These are just a few of the ways Olaxans get around on the surface of planets, moons, and asteroids.",
};

export const CategoryPage = ({ initialApolloState: { items } }) => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <>
      <Layout title={category}>
        <PageArea>
          <header>
            <h1>{category.toUpperCase().replace("-", " ")}</h1>
            <img src="here.png" alt="banner alt" />
          </header>
          <p>{categoryDescriptions[category] || categoryDescriptions.misc}</p>
          <ItemGrid>
            {items.map((item) => (
              <li key={item.id}>
                <Item
                  cloudFilename={item.cloud_filename}
                  cost={item.cost}
                  description={item.description}
                  name={item.name}
                />
              </li>
            ))}
          </ItemGrid>
        </PageArea>
      </Layout>
    </>
  );
};

export async function getServerSideProps(context) {
  const apolloClient = initializeApollo();
  const { category } = context.params;
  const formatedCategory = category.replace("-", " ");

  const queryData = await apolloClient.query({
    query: GET_CATEGORY_ITEMS,
    variables: {
      category: formatedCategory,
    },
  });

  return {
    props: {
      initialApolloState: {
        items: queryData.data.items,
      },
    },
  };
}

export default CategoryPage;
