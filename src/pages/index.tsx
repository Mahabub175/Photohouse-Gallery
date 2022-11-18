import axios from "axios";
import type { NextPage } from "next";
import { Fragment } from "react";
import Hero from "../components/home/Hero";
import Magazines from "../components/home/Magazines";

const Home: NextPage = ({ magazinesList }: any) => (
  <Fragment>
    <Hero />
    <Magazines magazinesList={magazinesList} />
  </Fragment>
);

export default Home;

export async function getStaticProps() {
  const magazinesList = await axios.get('https://api.photohousemagazine.com/magazines').then((response) => {
    return response.data.reverse()
  }).catch((err) => "")
  // const redirect_links = await axios.get('https://api.photohousemagazine.com/redirect_links').then((response) => {
  //   return response.data
  // }).catch((err) => console.log(err))
  return { props: { magazinesList }, revalidate: 60 }
}
