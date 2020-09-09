import "../styles/globals.css";
import { ThemeProvider } from "emotion-theming";

const theme = {
  colors: {
    burnt: "#f24405",
    purple: "#220E32",
    orange: "#f28705",
    yellow: "#f2cb05",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
