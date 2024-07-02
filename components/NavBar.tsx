import Image from "next/image";
import Link from "next/link";
import Button, { buttonClasses } from "./Button";
import { mokoto } from "@/utils/fonts";
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { AlignRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <div className="w-full fixed bg-indigo-1000 py-3 px-6 z-50">
      <div className="mx-auto flex justify-between items-center">
        <Link href="/" className="flex  items-baseline text-xl">
          <Image width={42} height={42} src={"./logo.svg"} alt="LOGO" />
          <span className={mokoto.className}>STUTE</span>
        </Link>
        <ul className="hidden md:flex gap-16 items-center translate-x-10">
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
        <div className="flex gap-8">
          <Link
            href="/signup"
            className="hidden md:inline leading-10  font-semibold hover:underline underline-offset-2"
          >
            SIGN UP
          </Link>
          <Link
            href="/login"
            className={cn(
              "hidden md:block !px-8 font-semibold ",
              buttonClasses()
            )}
          >
            LOGIN
          </Link>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className=" md:hidden">
              <AlignRightIcon className="w-8 h-8" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="md:hidden w-56 bg-indigo-1000 outline-none border-none">
            <DropdownMenuGroup>
              {navs.map((nav) => (
                <DropdownMenuItem key={nav.name}>
                  <Link
                    href={nav.path}
                    className="text-lg animate-bg-gradient bg-gradient-to-r from-indigo-600 via-indigo-300 to-white bg-clip-text text-transparent"
                  >
                    {nav.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuSeparator className="bg-slate-800" />
            <DropdownMenuGroup className="space-y-1">
              <DropdownMenuItem>
                <Link
                  href="/signup"
                  className="text-center font-semibold hover:underline underline-offset-2"
                >
                  SIGN UP
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/login"
                  className={cn("w-full font-semibold", buttonClasses())}
                >
                  LOGIN
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default NavBar;
