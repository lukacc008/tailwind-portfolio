import React, { useEffect } from "react";

import "aos/dist/aos.css";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center mt-80 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="5000"
      data-aos-offset="0"
    >
      <h1 className="text-3xl md:text-4xl lg:text-4xl text-center mb-4 font-bold text-indigo">
        Welcome to my online portfolio, where I showcase my journey, projects,
        and experiences!
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl text-center text-indigo mt-20">
        Hi there! I'm Luka, a future front-end developer with a passion for
        creating amazing UI-s. Feel free to browse through my portfolio, check
        out some of my latest projects, and don't hesitate to reach out if you
        have any questions or would like to collaborate. Let's create something
        amazing together!
      </p>
    </div>
  );
}
