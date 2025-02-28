"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="flex  opacity-80 items-center px-6 md:px-6 py-3 justify-between fixed top-0 w-full z-50 shadow bg-black">
      <Link href="/">
        <Image
          className="rounded-lg"
          src="/alif.webp"
          alt="Logo"
          width={50}
          height={50}
        />
      </Link>

      <div className="flex item-center space-x-2.5 text-sm">
        <nav className=" sm:px-1 md:px-1 py-3 flex justify-end text-base ">
          <Link
            href="/"
            className="mr-5 text-amber-500 hover:text-amber-700 cursor-pointer"
          >
            Home page
          </Link>
          <Link
            href="/products"
            className="mr-5 text-amber-500 hover:text-amber-800 cursor-pointer"
          >
            All product
          </Link>
        </nav>
        <button className=" button rounded-xl bg-zinc-50 text-amber-500 border-transparent hover:border-red-950 hover:bg-transparent hover:text-yellow-200">
          Log in
        </button>
        <button className=" button border-red-950 rounded-xl transparent border-transparent hover:bg-zinc-50  text-amber-500">
          sign up
        </button>
      </div>
    </header>
  );
}
