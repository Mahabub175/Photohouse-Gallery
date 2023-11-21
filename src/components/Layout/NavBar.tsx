/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import { useRouter } from "next/router";
import logo_dark from "../../Images/logo.png";
import Image from "next/image";
import { Fragment, useContext, useEffect, useState } from "react";
import { API_CONTEXT } from "../../utils/GlobalContext";

const NavBar = () => {
  const [showMenu, setMenu] = useState(false);
  const router = useRouter();
  const [redirect_links, setredirect_links] = useState({
    submission_link: "#",
  });

  const navLink: any = useContext(API_CONTEXT);
  useEffect(() => {
    if (navLink?.data?.links) {
      setredirect_links(navLink?.data?.links);
    }
  }, [navLink]);

  return (
    <div className="z-10">
      <nav className="flex justify-between px-2 md:px-10 py-1 items-center mb-4">
        <div>
          <Link href="/">
            <Image
              priority
              src={logo_dark}
              width={160}
              height={54}
              alt="logo"
              className={`cursor-pointer rounded-md`}
            ></Image>
          </Link>
        </div>
        <div>
          <div className="hidden md:block tracking-wider">
            <Link href="/">
              <a
                className={`hover:text-[#DEDEDE] cursor-pointer mx-1 text-xl ${
                  router.pathname === "/" ? "font-bold" : ""
                }`}
              >
                {" "}
                Home{" "}
              </a>
            </Link>
            <a className="text-xl"> | </a>
            <Link href="/magazines">
              <a
                className={`hover:text-[#DEDEDE] cursor-pointer mx-1 text-xl ${
                  router.pathname === "/magazines" ? "font-bold" : ""
                }`}
              >
                {" "}
                Magazines{" "}
              </a>
            </Link>
            <a className="text-xl"> | </a>
            <a
              className={`hover:text-[#DEDEDE] cursor-pointer mx-1 text-xl ${
                router.pathname === redirect_links.submission_link
                  ? "font-bold"
                  : ""
              }`}
              href={redirect_links.submission_link}
              target="_blank"
              rel="noreferrer"
            >
              Get Published
            </a>
            <a className="text-xl"> | </a>
            <Link href="/gallery">
              <a
                className={`hover:text-[#DEDEDE] cursor-pointer mx-1 text-xl ${
                  router.pathname === "/gallery" ? "font-bold" : ""
                }`}
              >
                {" "}
                Gallery{" "}
              </a>
            </Link>
            <a className="text-xl"> | </a>
            <Link href="/about">
              <a
                className={`hover:text-[#DEDEDE] cursor-pointer mx-1 text-xl ${
                  router.pathname === "/about" ? "font-bold" : ""
                }`}
              >
                {" "}
                About{" "}
              </a>
            </Link>
          </div>
          <div
            className="md:hidden h-full text-center cursor-pointer flex flex-col items-center gap-1"
            onClick={() => setMenu((show) => !show)}
          >
            <div
              className={`w-[20px] h-[2px] bg-white ${
                showMenu && "rotate-[180deg]"
              } transition ease-in-out delay-150`}
            ></div>
            <div
              className={`w-[20px] h-[2px] bg-white  ${
                showMenu && "-rotate-[180deg]"
              } transition ease-in-out delay-150`}
            ></div>
            <div
              className={`w-[20px] h-[2px] bg-white  ${
                showMenu && "-rotate-[180deg]"
              } transition ease-in-out delay-150`}
            ></div>
            <div>Menu</div>
          </div>
        </div>
      </nav>
      {showMenu && (
        <div className="">
          <nav className="bg-[#06202A] h-[100vh] w-full md:hidden select-none animate-slideDown relative">
            <div className="tracking-wider flex flex-col h-[80vh] items-center text-center justify-evenly text-2xl pt-20 absolute left-1/3 top-0">
              {["Home", "Magazines", "publish", "Gallery", "About"].map(
                (x, i) => (
                  <Fragment key={i + 8948}>
                    {i !== 2 ? (
                      <Link href={i === 0 ? "/" : `/${x.toLowerCase()}`}>
                        <a
                          onClick={() => setMenu((show) => !show)}
                          className={`hover:text-[#DEDEDE] cursor-pointer mx-2 text-2xl ${
                            router.pathname ===
                            (i === 0 ? "/" : `/${x.toLowerCase()}`)
                              ? "font-bold"
                              : ""
                          }`}
                        >
                          {x}
                        </a>
                      </Link>
                    ) : (
                      <a
                        className={`hover:text-[#DEDEDE] cursor-pointer mx-2 text-2xl ${
                          router.pathname === redirect_links.submission_link
                            ? "font-bold"
                            : ""
                        }`}
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
