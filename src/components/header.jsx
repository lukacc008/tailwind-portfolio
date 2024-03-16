import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
;

export default function Header() {

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="sticky top-0 z-50 bg-black bg-opacity-70 p-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-lg font-semibold tracking-wide">
        <Link className="hover:text-gold" href="#home"
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        onClick={scrollToTop}
        offset={-360}>Home</Link>
        <Link className="hover:text-gold" href="#about"
        activeClass="active"
        to="section"
        spy={true}
        smooth={true}
        offset={60}
        duration={500}>Skills</Link>
        <a className="hover:text-gold" href="#contact">Contact</a>
        <a className="hover:text-gold" href="#projects">Projects</a>
      </div>
    </div>
  );
}
