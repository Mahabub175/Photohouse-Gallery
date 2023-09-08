import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Layout from "../components/Layout";
import { store } from "../store";
import "../styles/globals.css";
import GlobalContext from "../utils/GlobalContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalContext>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </GlobalContext>
  );
}

export default MyApp;
