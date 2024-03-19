import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import GitHubIcon from "@mui/icons-material/GitHub";
import JavascriptIcon from "@mui/icons-material/Javascript";
import CssIcon from "@mui/icons-material/Css";
import HttpIcon from "@mui/icons-material/Http";
import StorageIcon from "@mui/icons-material/Storage";

export default function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);

  return (
    <div className="mt-60 py-24 sm:py-32 bg-plum">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p
            className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-gold"
          >
            Main skills
          </p>
          <p className="mt-6 text-lg leading-8 text-gold">
            As a dedicated ReactJS developer, I possess a diverse set of skills
            and expertise aimed at crafting robust and user-centric web
            applications. With a deep understanding of modern web development
            principles and a passion for creating seamless user experiences, I
            specialize in leveraging ReactJS to build dynamic and interactive
            front-end solutions
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16" data-aos="flip-right">
              <dt
                className="text-base font-semibold leading-7 text-gold"
              >
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo">
                  <JavascriptIcon fontSize="large"/>
                </div>
                JavaScript
              </dt>
              <dd className="mt-2 text-base leading-7 text-gold bg-indigo rounded-lg p-4">
                Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                suspendisse semper morbi. Odio urna massa nunc massa.
              </dd>
            </div>
            <div className="relative pl-16" data-aos="flip-left">
              <dt
                className="text-base font-semibold leading-7 text-gold"
              >
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo">
                  <GitHubIcon />
                </div>
                Git/GitHub
              </dt>
              <dd className="mt-2 text-base leading-7 text-gold bg-indigo rounded-lg p-4">
                Sit quis amet rutrum tellus ullamcorper ultricies libero dolor
                eget. Sem sodales gravida quam turpis enim lacus amet.
              </dd>
            </div>
            <div className="relative pl-16" data-aos="flip-right">
              <dt
                className="text-base font-semibold leading-7 text-gold"
              >
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo">
                  <CssIcon fontSize="large" />
                </div>
                CSS
              </dt>
              <dd className="mt-2 text-base leading-7 text-gold bg-indigo rounded-lg p-4">
                Quisque est vel vulputate cursus. Risus proin diam nunc commodo.
                Lobortis auctor congue commodo diam neque.
              </dd>
            </div>
            <div className="relative pl-16" data-aos="flip-left">
              <dt
                className="text-base font-semibold leading-7 text-gold"
              >
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo">
                  <HttpIcon fontSize="large" />
                </div>
                Backend connection
              </dt>
              <dd className="mt-2 text-base leading-7 text-gold bg-indigo rounded-lg p-4">
                Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis
                aliquet hac quis. Id hac maecenas ac donec pharetra eget.
              </dd>
            </div>
            <div className="relative pl-16" data-aos="flip-right">
              <dt
                className="text-base font-semibold leading-7 text-gold"
              >
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo">
                  <StorageIcon fontSize="medium" />
                </div>
                State management
              </dt>
              <dd className="mt-2 text-base leading-7 text-gold bg-indigo rounded-lg p-4">
                Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis
                aliquet hac quis. Id hac maecenas ac donec pharetra eget.
              </dd>
            </div>
            <div className="relative pl-16" data-aos="flip-left">
              <dt
                className="text-base font-semibold leading-7 text-gold"
              >
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo">
                  <HttpIcon fontSize="large" />
                </div>
                Backend connection
              </dt>
              <dd className="mt-2 text-base leading-7 text-gold bg-indigo rounded-lg p-4">
                Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis
                aliquet hac quis. Id hac maecenas ac donec pharetra eget.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
