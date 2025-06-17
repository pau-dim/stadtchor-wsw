"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";

const navBarLinksMap = [
  {
    id: 1,
    uri: "/#",
    name: "Startseite"
  },
  {
    id: 2,
    uri: "/#auftritte",
    name: "Auftritte"
  },
  {
    id: 3,
    uri: "/#ueberuns",
    name: "Über uns"
  },
  {
    id: 4,
    uri: "/#kontakt",
    name: "Kontakt"
  }
]


interface NavItemProps {
  href: string;
  sectionId?: string;
  activeSection?: string;
  className?: string;
  children: React.ReactNode;
}

const CustomNavItem: React.FC<NavItemProps> = ({ href, sectionId, activeSection, children }) => {
  const isActive = sectionId && activeSection === sectionId;

  console.log("sectionId: " + sectionId)
  console.log("activeSection: " + activeSection)

  const baseClasses = 'flex items-center px-6 transition-colors duration-200 hover:bg-indigo-50';
  const activeClasses = isActive
    ? 'bg-indigo-50'
    : '';

  return (
    <a href={href} className={`h-full ${baseClasses} ${activeClasses}`}>
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
            setActiveSection(entry.target.id)
          }
        });
      },
      { threshold: 0.1 } // adjust for when a section becomes "active"
    );

    navBarLinksMap.forEach((element) => {
      const match = element.uri.match(/#(.*)$/);
      if (match) {
        const sectionId = match[1];
        const el = document.getElementById(sectionId);
        if (el) observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);



  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <div className="absolute w-screen h-20 bg-gradient-to-b from-indigo-100 to-custom-indigo top-0 sticky z-50">
        <div className="relative flex justify-between items-center h-full px-4 md:px-20">


          <Logo />
          <ul className="hidden md:flex items-center text-black h-full">
            {navBarLinksMap.map((item) => (
              <li key={item.id} className="h-full flex items-center">
                <CustomNavItem href={item.uri}
                  sectionId={item.uri.startsWith("/#") ? item.uri.replace("/#", "") : ""}
                  activeSection={activeSection}>{item.name}</CustomNavItem>
              </li>
            ))}
          </ul>

          {!isOpen &&
            <div className="flex md:hidden">
              <Button onClick={toggle}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </Button>
            </div>
          }
          {isOpen && (
            <div className="fixed inset-0 flex flex-col bg-black/70 font-bold font-border-black">
              <div className="flex justify-end p-4">
                <Button onClick={toggle}>
                  X
                </Button>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <ul className="flex flex-col gap-6 text-white text-4xl">
                  {navBarLinksMap.map((item) => (
                    <li key={item.id} className="mb-3">
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