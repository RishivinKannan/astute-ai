import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const NavBar = () => {
  const navs = [
    {
      path: "#features",
      name: "Features",
    },
    {
      path: "#blogs",
      name: "Blogs",
    },
    {
      path: "#services",
      name: "Services",
    },
  ];
  return (
    <div className="w-full fixed bg-indigo-1000 py-4 px-2 z-50">
      <div className="container  mx-auto flex justify-between items-center">
        <Image width={42} height={42} src={"./logo.svg"} alt="LOGO" />
        <ul className="flex gap-16 items-center ">
          {navs.map((nav) => (
            <li key={nav.name}>
              <Link
                href={nav.path}
                className="animate-bg-gradient bg-gradient-to-r from-indigo-600 via-indigo-300 to-white bg-clip-text text-transparent"
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
        <Button>Get started</Button>
      </div>
    </div>
  );
};

export default NavBar;
