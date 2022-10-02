import type { NextPage } from "next";
import Image from "next/image";
import { Fragment } from "react";
import Hero from "../components/home/Hero";
import Magazines from "../components/home/Magazines";

const Home: NextPage = () => (
  <Fragment>
    <Hero />
    <Magazines />
  </Fragment>
);

export default Home;
