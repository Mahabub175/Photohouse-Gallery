import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/globals.css";
// eslint-disable-next-line
import "swiper/css/bundle";
import "../styles/swiper.css";
import { Provider } from "react-redux";
import { store } from "../store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
