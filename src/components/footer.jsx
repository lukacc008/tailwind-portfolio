import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <div className=" bg-gray">
      <div className="max-w-2xl mx-auto text-white py-10">
        <div className="text-center">
          <h3 className="mt-2 mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
            You can check more projects on my github
          </h3>
          <a href="https://github.com/lukacc008" target="_blank">
            <GitHubIcon
              sx={{
                fontSize: 100,
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            />
          </a>
        </div>
        <div className="mt-12 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p className="order-2 md:order-1 mt-8 md:mt-0">
            &copy; Created by: Luka Jovičić
          </p>
          <div className="order-1 md:order-2">
            <span className="px-2">
              <Link
                className="hover:text-gold"
                href="#home"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-360}
              >
                Home
              </Link>
            </span>
            <span className="px-2 border-l">
              <Link
                className="hover:text-gold"
                href="#about"
                activeClass="active"
                to="section"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Skills
              </Link>
            </span>
            <span className="px-2 border-l">
              <Link
                className="hover:text-gold"
                href="#features"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-250}
                duration={1000}
              >
                Features
              </Link>
            </span>
            <span className="px-2 border-l">
              <Link
                className="hover:text-gold"
                href="#contact"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
              >
                Contact
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
