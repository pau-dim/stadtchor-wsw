"use client"
import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";

const navBarLinksMap = [
  {
    id: 1,
    uri: "/",
    name: "Startseite"
  },
  {
    id: 2,
    uri: "/auftritte",
    name: "Auftritte"
  },
  {
    id: 3,
    uri: "/ueber",
    name: "Über uns"
  },
  {
    id: 4,
    uri: "/kontakt",
    name: "Kontakt"
  }
]

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <div className="w-full h-20 bg-indigo-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <ul className="hidden md:flex gap-x-6 text-black">
              {navBarLinksMap.map((item) => (
                <li key={item.id}><Link href={item.uri}>{item.name}</Link></li>
              ))}
            </ul>

            <div className="align-right md:hidden">
              <div className={`${isOpen ? "hidden" : "flex"}`}>
                <Button onClick={toggle}>
                  SomeTEXT
                </Button>
              </div>
              <div className={`${isOpen ? "container " : "hidden"}`}>
                <ul className="md:flex top-1/2 flex-col gap-x-6 text-black">
                  {navBarLinksMap.map((item) => (
                    <li key={item.id}><Link href={item.uri}>{item.name}</Link></li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div >
    </>
  );
}

export default Navbar;