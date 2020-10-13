import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import { ThemeProvider } from "emotion-theming";
import "../styles/globals.css";
import "../styles/nprogress.css";

const theme = {
  colors: {
    burnt: "#f24405",
    purple: "#220E32",
    orange: "#f28705",
    yellow: "#f2cb05",
    lightGrey: "#CCCCCC",
    darkGrey: "#4B4B4B",
  },
};

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => NProgress.start();
    const handleRouteChangeComplete = (url) => NProgress.done();
    const handleRouteChangeError = (err, url) => {
      if (err.cancelled) {
        NProgress.done();
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeError", handleRouteChangeError);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("routeChangeError", handleRouteChangeError);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
