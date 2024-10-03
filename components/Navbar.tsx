import Link from "next/link";
// import { SignedIn, UserButton } from "@clerk/nextjs";
import MobileNav from "./MobileNav";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-3 lg:px-10 shadow-md">
      <Link href="/" className="flex items-center gap-1">
        <Image src="/images/real-logo.svg" alt="logo" width={45} height={45} />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          VChat
        </p>
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
