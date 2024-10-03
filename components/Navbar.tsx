import Image from "next/image";
import Link from "next/link";
// import { SignedIn, UserButton } from "@clerk/nextjs";
import MobileNav from "./MobileNav";
import { TbBrandNextjs } from "react-icons/tb";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <TbBrandNextjs className="max-sm:size-10 text-4xl text-blue-1" />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          Yxp
        </p>
      </Link>
      <div className="flex-between gap-5">
        {/* <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn> */}

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
