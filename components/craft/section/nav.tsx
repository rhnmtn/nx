// Fjord Config
import nimi from "@/nimi.config";

// Next Imports
import Link from "next/link";
import Image from "next/image";

// Utility Imports
import { cn } from "@/lib/utils";

// Component Imports
import { Button } from "../../ui/button";
import { NavMenu } from "./nav-menu";
import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "../theme/theme-toggle";

const Nav = ({ className, children, id }: NavProps) => {
  return (
    <nav
      className={cn(
        "sticky z-50 top-0 bg-background",
        "border-b drop-shadow-sm",
        className
      )}
      id={id}
    >
      <div
        id="nav-container"
        className="max-w-5xl mx-auto py-4 px-6 sm:px-8 flex justify-between items-center"
      >
        <Link className="hover:opacity-75 transition-all not-prose" href="/">
          <h1 className="text-primary-500  text-2xl md:text-4xl">
            <span className="font-extrabold ">nimi </span>
            <span className=" font-extralight text-orange-600 "> group </span>
          </h1>
          {
            //<Image src={nimi.logo} alt="Logo" width={100} height={64}></Image>
          }
        </Link>
        {children}
        <div className="flex items-center gap-2">
          <NavMenu />
          {/**
 <Button asChild>
<Link href={nimi.menu.cta}>Get Started</Link>
</Button>
             **/}

          <ModeToggle />
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
