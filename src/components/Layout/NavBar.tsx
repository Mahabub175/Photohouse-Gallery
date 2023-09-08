import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles/Navbar.module.css";
import logo_dark from "../../Images/logo.png";
import Image from "next/image";
import { Fragment, useContext, useEffect, useState } from "react";
import { base_url } from "../../configs";
import axios from "axios";
import { API_CONTEXT } from "../../utils/GlobalContext";

const NavBar = () => {
  const [showMenu, setMenu] = useState(false);
  const router = useRouter();
  const [redirect_links, setredirect_links] = useState({
    submission_link: "#",
  });
  // useEffect(() => {
  //   const getLinks = () => {
  //     axios
  //       .get(`${base_url}/all`)
  //       .then((data) => setredirect_links(data.data.links))
  //       .catch(() => getLinks());
  //   };
  //   getLinks();
  // }, []);

  const navLink: any = useContext(API_CONTEXT);
  useEffect(() => {
    if (navLink?.data?.links) {
      setredirect_links(navLink?.data?.links);
    }
  }, [navLink]);
  return (
    <div className="navbar z-10">
      <nav
        className={`flex flex-1 justify-between align-middle leading-[60px] px-5 md:px-10   ${
          router.pathname === "/"
            ? "absolute bg-[#00000055]"
            : "relative bg-[#00000055]"
        } z-10 w-full`}
      >
        <Link href="/">
          <a>
            <div className="flex items-center pt-1">
              <Image
                priority
                src={logo_dark}
                width={160}
                height={54}
                alt="logo"
                className={`cursor-pointer rounded-md`}
              />
            </div>
          </a>
        </Link>
        <div className="hidden md:block tracking-wider">
          <Link href="/">
            <a className={`hover:text-[#DEDEDE] cursor-pointer mx-1 text-xl`}>
              {" "}
              Home{" "}
            </a>
          </Link>
          <a className="text-xl"> | </a>
          <Link href="/magazines">
            <a className={`hover:text-[#DEDEDE] cursor-pointer mx-1 text-xl`}>
              {" "}
              Magazines{" "}
            </a>
          </Link>
          <a className="text-xl"> | </a>
          <a
            className={`hover:text-[#DEDEDE] cursor-pointer mx-1 text-xl`}
            href={redirect_links.submission_link}
            target="_blank"
            rel="noreferrer"
          >
            Get Published
          </a>
          <a className="text-xl"> | </a>
          <Link href="/gallery">
            <a className={`hover:text-[#DEDEDE] cursor-pointer mx-1 text-xl`}>
              {" "}
              Gallery{" "}
            </a>
          </Link>
          <a className="text-xl"> | </a>
          <Link href="/about">
            <a className={`hover:text-[#DEDEDE] cursor-pointer mx-1 text-xl`}>
              {" "}
              About{" "}
            </a>
          </Link>
          {/* <a className='text-xl'> | </a>
          <Link href="/login">
            <a className={`hover:text-[#DEDEDE] cursor-pointer mx-1 text-xl`}> Login </a>
          </Link>
          <Link href="/dashboard">
            <a className={`hover:text-[#DEDEDE] cursor-pointer mx-1 text-xl`}> Dashboard </a>
          </Link> */}
        </div>
        <div
          className="md:hidden h-full pt-6 cursor-pointer"
          onClick={() => setMenu((show) => !show)}
        >
          <div
            className={`w-[20px] h-[2px] bg-white mb-2 ${
              showMenu && "rotate-[180deg]"
            } transition ease-in-out delay-150`}
          ></div>
          <div
            className={`w-[20px] h-[2px] bg-white  ${
              showMenu && "-rotate-[180deg]"
            } transition ease-in-out delay-150`}
          ></div>
        </div>
        {/* <button id="menuBtn" className="hamburger block sm:hidden focus:outline-none" type="button">
        <span className="hamburger__top-bun"></span>
        <span className="hamburger__bottom-bun"></span>
      </button> */}
      </nav>
      {showMenu && (
        <div className="navbar">
          <nav className="bg-[#06202A] h-[100vh] md:hidden select-none animate-slideDown">
            <div className="tracking-wider flex flex-col h-[80vh] items-center justify-evenly text-2xl pt-20">
              {["Home", "Magazines", "publish", "Gallery", "About"].map(
                (x, i) => (
                  <Fragment key={i + 8948}>
                    {i !== 2 ? (
                      <Link href={i === 0 ? "/" : `/${x.toLowerCase()}`}>
                        <a
                          onClick={() => setMenu((show) => !show)}
                          className={`hover:text-[#DEDEDE] cursor-pointer mx-2 text-2xl ${
                            router.pathname == `/${x.toLowerCase()}` ||
                            (i === 0 && router.pathname == `/`)
                              ? " text-[#DEDEDE] "
                              : " "
                          }`}
                        >
                          {x}
                        </a>
                      </Link>
                    ) : (
                      <a
                        className={`hover:text-[#DEDEDE] cursor-pointer mx-2 text-2xl`}
                        href={redirect_links.submission_link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Get Published
                      </a>
                    )}
                  </Fragment>
                )
              )}
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default NavBar;
