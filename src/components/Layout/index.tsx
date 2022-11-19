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
      {/* Pre-loader */}
      {/* <div className="opacity-50 fixed inset-0 z-40 bg-[#06202A] flex items-center min-h-[100vh]">
        <div className="w-[50px] h-[50px] rounded-full bg-white animate-ping mx-auto"></div>
      </div> */}
    </>
  );
};

export default Layout;
