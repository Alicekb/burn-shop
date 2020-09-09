import Head from "next/head";
import Nav from "../components/Nav";
import Slider from "../components/Slider";
import styled from "@emotion/styled";

const MainArea = styled.div`
  max-width: 90%;
  margin: 0 auto;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Burn Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main>
        <Slider />
        <h1>Burn Shop</h1>

        <p>site goes here</p>
      </main>
      <footer></footer>
    </>
  );
}
