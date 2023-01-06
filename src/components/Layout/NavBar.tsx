import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles/Navbar.module.css";
import logo_dark from "../../Images/logo.png";
import Image from "next/image";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [showMenu, setMenu] = useState(false)
  const router = useRouter();
  const [redirect_links, setredirect_links] = useState({
    submission_link: "#"
  })
  useEffect(() => {
    const getLinks = () => {
      fetch('https://api.photohousemagazine.com/redirect_links')
        .then((response) => response.json())
        .then((data) => setredirect_links(data)).catch(() => getLinks())
    }
    getLinks()
  }, [])
  return (
    <>
      <nav
        className={`flex flex-1 justify-between align-middle leading-[60px] px-5 md:px-10   ${router.pathname === "/"
          ? "absolute bg-[#00000055]"
          : "relative bg-[#182f38]"
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
          {["Home", "Magazines", "Gallery", "About"].map((x, i) => (
            <Link href={i === 0 ? "/" : `/${x.toLowerCase()}`} key={i}>
              <a
                className={`hover:text-cyan-300 cursor-pointer mx-2 ${router.pathname == `/${x.toLowerCase()}` ||
                  (i === 0 && router.pathname == `/`)
                  ? " text-cyan-300 font-bold"
                  : " "
                  }`}
              >
                {x}
              </a>
            </Link>
          ))}
          <a className={`hover:text-cyan-300 cursor-pointer mx-2`} href={redirect_links.submission_link} target="_blank" rel="noreferrer">
            Submission
          </a>
        </div>
        <div className="md:hidden h-full pt-6 cursor-pointer" onClick={() => setMenu(show => !show)}>
          <div className="w-[20px] h-[2px] bg-white mb-2"></div>
          <div className="w-[20px] h-[2px] bg-white"></div>
        </div>
        {/* <button id="menuBtn" className="hamburger block sm:hidden focus:outline-none" type="button">
        <span className="hamburger__top-bun"></span>
        <span className="hamburger__bottom-bun"></span>
      </button> */}
      </nav>
      {showMenu && <div className="bg-[#06202A] h-[100vh] md:hidden select-none animate-slideDown">
        <div className="tracking-wider flex flex-col h-[80vh] items-center justify-evenly text-3xl">
          {["Home", "Magazines", "Gallery", "About"].map((x, i) => (
            <Link href={i === 0 ? "/" : `/${x.toLowerCase()}`} key={i} >
              <a
                onClick={() => setMenu(show => !show)}
                className={`hover:text-cyan-300 cursor-pointer mx-2 ${router.pathname == `/${x.toLowerCase()}` ||
                  (i === 0 && router.pathname == `/`)
                  ? " text-cyan-300 font-bold"
                  : " "
                  }`}
              >
                {x}
              </a>
            </Link>
          ))}
          <a className={`hover:text-cyan-300 cursor-pointer mx-2`} href={redirect_links.submission_link} target="_blank" rel="noreferrer">
            Submission
          </a>
        </div>
      </div>}
    </>
  );
};

export default NavBar;
