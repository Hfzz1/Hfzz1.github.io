import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar py-7 flex items-center justify-between">
      <div className="logo font-bold text-2xl">
        <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white">
          Portfolio
        </h1>
      </div>
      <ul
        className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 
            md:-translate-x-0 md:opacity-100 bg-white/30 backdrop-blur-md p-4 rounded-br-xl 
            rounded-bl-2xl md:bg-transparent transition-all md:transition-none 
            ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}
      >
        <li>
          <Link
            to="beranda"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="aktif"
            className="sm:text-lg text-base font-medium cursor-pointer"
          >
            Beranda
          </Link>
        </li>
        <li>
          <Link
            to="tentang"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="aktif"
            className="sm:text-lg text-base font-medium cursor-pointer"
          >
            Tentang
          </Link>
        </li>
        <li>
          <Link
            to="proyek"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="aktif"
            className="sm:text-lg text-base font-medium cursor-pointer"
          >
            Proyek
          </Link>
        </li>
        <li>
          <Link
            to="kontak"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="aktif"
            className="sm:text-lg text-base font-medium cursor-pointer"
          >
            Kontak
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
