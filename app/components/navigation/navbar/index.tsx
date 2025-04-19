import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-indigo-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <ul className="hidden md:flex gap-x-6 text-black">
              <li>
                <Link href="/">
                  <p>Startseite</p></Link>
              </li>
              <li>
                <Link href="/auftritte">
                  <p>Auftritte</p>
                </Link>
              </li>
              <li>
                <Link href="/ueber">
                  <p>Über uns</p>
                </Link>
              </li>
              <li>
                <Link href="/kontakt">
                  <p>Kontakt</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;