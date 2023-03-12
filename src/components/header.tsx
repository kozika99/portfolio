import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  return (
    <header className="flex justify-between px-32 py-10 bg-primary text-black fixed w-full z-10">
      <a href="/" className="logo text-2xl font-bold text-accent">
        TK
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex">
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#work">Work</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
          <li>
            <a href="#resume -link" target="_blank">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
