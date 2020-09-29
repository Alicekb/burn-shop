/** @jsx jsx */
import Head from "next/head";
import { jsx } from "@emotion/core";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title} - Burn Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main
        css={{
          position: "relative",
          minHeight: "100vh",
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
