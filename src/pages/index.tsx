import type { NextPage } from "next";
import { Fragment } from "react";
import Hero from "../components/home/Hero";
import InstaGallery from "../components/home/InstaGallery";
import Magazines from "../components/home/Magazines";

const Home: NextPage = () => (
  <Fragment>
    <Hero />
    <Magazines />
    <InstaGallery />
  </Fragment>
);

export default Home;
