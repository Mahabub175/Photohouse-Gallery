import React, { ReactNode, FC } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
