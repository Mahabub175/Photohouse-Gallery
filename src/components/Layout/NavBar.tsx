import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles/Navbar.module.css";
import logo_dark from "../../Images/logo.png";
import Image from "next/image";

const NavBar = () => {
  const router = useRouter();
  // 00000055
  return (
    <nav
      className={`flex flex-1 justify-between align-middle leading-[60px] px-5 md:px-10   ${router.pathname === "/"
        ? "absolute bg-[#00000055]"
        : "relative bg-[#182f38]"
        } z-10 w-full`}
    >
      <div className="flex items-center">
        <Image
          priority
          src={logo_dark}
          width={160}
          height={54}
          alt="logo"
          className={`cursor-pointer rounded-md`}
        />
      </div>
      <div className="hidden md:block tracking-wider">
        {["Home", "Magazines", "Gallery", "Members", "About"].map((x, i) => (
          <Link href={i === 0 ? "/" : `/${x.toLowerCase()}`} key={i}>
            <a
              className={`hover:tracking-widest cursor-pointer mx-2 ${router.pathname == `/${x.toLowerCase()}` ||
                (i === 0 && router.pathname == `/`)
                ? " text-cyan-300 "
                : " "
                }`}
            >
              {x}
            </a>
          </Link>
        ))}
        {/* <button
          type="button"
          className="btn-blue"
          onClick={() => router.push("/members")}
        >
          Members
        </button> */}
      </div>
      <div className="md:hidden h-full pt-6 cursor-pointer">
        <div className="w-[20px] h-[2px] bg-white mb-2"></div>
        <div className="w-[20px] h-[2px] bg-white"></div>
      </div>
    </nav>
  );
};

export default NavBar;
