import Head from "next/head";
import React, { ReactNode, FC } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Photohouse</title>
        <meta
          name="description"
          content="Photohouse Magazine"
          key="title"
        />
        <link rel="icon" href="/icon.png" />
      </Head>
      <NavBar />
      <main className="min-h-[100vh]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
