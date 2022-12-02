import Head from "next/head";
import React, { ReactNode, FC, useState, useEffect } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import logo_dark from "../../Images/logo.png";
import Image from "next/image";
interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {

  const [preLoading, setPreloader]: any = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setPreloader(false)
    }, 1500);
  }, [])

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
      {preLoading && <div className="fixed inset-0 z-40 backdrop-blur-sm  bg-[#06202A]/30 flex items-center min-h-[100vh]">
        <div className="animate-bounce mx-auto">
          <Image
            priority
            src={logo_dark}
            width={160}
            height={54}
            alt="logo"
            className={`cursor-pointer rounded-md`}
          />
        </div>
      </div>}
    </>
  );
};

export default Layout;
