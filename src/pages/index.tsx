import axios from "axios";
import type { NextPage } from "next";
import { Fragment } from "react";
import Hero from "../components/home/Hero";
import Magazines from "../components/home/Magazines";

const Home: NextPage = ({ redirect_links, magazinesList }: any) => (
  <Fragment>
    <Hero RedirectLinks={redirect_links} />
    <Magazines magazinesList={magazinesList} />
  </Fragment>
);

export default Home;

export async function getStaticProps() {
  const magazinesList = await axios.get('https://api.photohousemagazine.com/magazines').then((response) => {
    return response.data.reverse()
  }).catch((err) => console.log(err))
  const redirect_links = await axios.get('https://api.photohousemagazine.com/redirect_links').then((response) => {
    return response.data
  }).catch((err) => console.log(err))
  return { props: { magazinesList, redirect_links }, revalidate: 60 }
}
