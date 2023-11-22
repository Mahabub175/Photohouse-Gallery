import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Layout from "../components/Layout";
import { store } from "../store";
import "../styles/globals.css";
import GlobalContext from "../utils/GlobalContext";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalContext>
      <Toaster />
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </GlobalContext>
  );
}

export default MyApp;
