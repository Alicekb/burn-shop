import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import "../styles/globals.css";
import { ThemeProvider } from "emotion-theming";

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
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ThemeProvider>
  );
}
