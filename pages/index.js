import Head from "next/head";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Burn Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main>
        <h1>Burn Shop</h1>

        <p>site goes here</p>
      </main>
      <footer></footer>
    </>
  );
}
