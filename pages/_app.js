import "../styles/globals.css";
import { ThemeProvider } from "emotion-theming";
import { Global, css } from "@emotion/core";

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
      <Global
        styles={css`
          body {
            max-width: 90%;
            margin: 0 auto;
          }
        `}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
