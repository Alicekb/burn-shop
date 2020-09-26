import Head from "next/head";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title} - Burn Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
