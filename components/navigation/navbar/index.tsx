"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import { usePathname } from 'next/navigation';

const navBarLinksMap = [
  {
    id: 1,
    uri: "/",
    name: "Startseite"
  },
  {
    id: 2,
    uri: "#auftritte",
    name: "Auftritte"
  },
  {
    id: 3,
    uri: "#ueberuns",
    name: "Über uns"
  },
  {
    id: 4,
    uri: "#kontakt",
    name: "Kontakt"
  }
]


interface NavItemProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => {

  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  console.log(isActive(href))
  console.log("href: " + href)

  const baseClasses = 'px-4 py-2 rounded-xl transition-colors duration-200';
  const activeClasses = isActive(href)
    ? 'bg-indio-50 text-black'
    : 'text-black hover:bg-indigo-50 hover:text-black';

  return (
    <a href={href} className={`${baseClasses} ${activeClasses}`}>
      {children}
    </a>
  );
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // adjust for when a section becomes "active"
    );

    navBarLinksMap.forEach((element) => {
      const el = document.getElementById(element.id.toString());
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);



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
                <li key={item.id}><NavItem href={item.uri} >{item.name}</NavItem></li>
              ))}
            </ul>
            <div className={`${isOpen ? "hidden" : "flex md-hidden"}`}>
              <Button onClick={toggle}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </Button>
            </div>
          </div>
          {isOpen && (
            <div className="fixed inset-0 z-50 flex flex-col bg-black bg-opacity-60">
              <div className="flex justify-end p-4">
                <Button onClick={toggle}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </Button>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <ul className="flex flex-col gap-6 text-white text-4xl">
                  {navBarLinksMap.map((item) => (
                    <li key={item.id}>
                      <Link href={item.uri} onClick={toggle}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div >
    </>
  );
}

export default Navbar;