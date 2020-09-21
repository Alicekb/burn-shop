import "../styles/globals.css";
import { ThemeProvider } from "emotion-theming";

const theme = {
  colors: {
    burnt: "#f24405",
    purple: "#220E32",
    orange: "#f28705",
    yellow: "#f2cb05",
    lightGrey: "rgb(240, 240, 240)",
    darkGrey: "#4B4B4B"
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
