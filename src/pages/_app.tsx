import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/globals.css";
// eslint-disable-next-line
import "swiper/css/bundle";
import "../styles/swiper.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
