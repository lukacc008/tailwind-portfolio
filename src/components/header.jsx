import React from "react";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 bg-black bg-opacity-70 p-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-lg font-semibold tracking-wide">
        <a className="hover:text-red-500" href="#home">Home</a>
        <a className="hover:text-red-500" href="#about">About</a>
        <a className="hover:text-red-500" href="#projects">Projects</a>
        <a className="hover:text-red-500" href="#contact">Contact</a>
      </div>
    </div>
  );
}
