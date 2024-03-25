import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

export default function Header() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleDownload = () => {
    const url = "src/assets/cv.pdf";
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "cv.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error("Error downloading CV:", error);
      });
  };

  return (
    <div className="sticky top-0 z-50 bg-black bg-opacity-70 p-4">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-lg font-semibold tracking-wide">
          <Link
            className="hover:text-gold"
            href="#home"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            onClick={scrollToTop}
            offset={-360}
          >
            Home
          </Link>
          <Link
            className="hover:text-gold"
            href="#about"
            activeClass="active"
            to="section"
            spy={true}
            smooth={true}
            offset={60}
            duration={500}
          >
            Skills
          </Link>
          <Link
            className="hover:text-gold"
            href="#About"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-250}
            duration={1000}
          >
            About project
          </Link>
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
        </div>
        <button
          className="bg-gray hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleDownload}
        >
        <FileDownloadOutlinedIcon /> Download CV
        </button>
      </div>
    </div>
  );
}
