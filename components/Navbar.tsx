import Image from "next/image";
import Link from "next/link";
import React from "react";

import { getServerSession } from "next-auth";
// import { authOptions } from "../api/auth/[...nextauth]/route";
import { authOptions } from "../app/api/auth/[...nextauth]/route";

import AuthButtons from "./AuthButtons";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className=" flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={144} height={30} />
        </Link>
        <div className="text-black">
          <AuthButtons session={session} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
