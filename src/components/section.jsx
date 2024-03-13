import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import GitHubIcon from "@mui/icons-material/GitHub";
import JavascriptIcon from "@mui/icons-material/Javascript";
import CssIcon from "@mui/icons-material/Css";
import HttpIcon from "@mui/icons-material/Http";
import StorageIcon from "@mui/icons-material/Storage";

export default function Section() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div class="mt-60 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Main skills
          </p>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            As a dedicated ReactJS developer, I possess a diverse set of skills
            and expertise aimed at crafting robust and user-centric web
            applications. With a deep understanding of modern web development
            principles and a passion for creating seamless user experiences, I
            specialize in leveraging ReactJS to build dynamic and interactive
            front-end solutions
          </p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div class="relative pl-16" data-aos="fade-right">
              <dt class="text-base font-semibold leading-7 text-gray-900">
                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <JavascriptIcon fontSize="large" />
                </div>
                JavaScript
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">
                Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                suspendisse semper morbi. Odio urna massa nunc massa.
              </dd>
            </div>
            <div class="relative pl-16" data-aos="fade-left">
              <dt class="text-base font-semibold leading-7 text-gray-900">
                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <GitHubIcon />
                </div>
                Git/GitHub
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">
                Sit quis amet rutrum tellus ullamcorper ultricies libero dolor
                eget. Sem sodales gravida quam turpis enim lacus amet.
              </dd>
            </div>
            <div class="relative pl-16" data-aos="fade-right">
              <dt class="text-base font-semibold leading-7 text-gray-900">
                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <CssIcon fontSize="large" />
                </div>
                CSS
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">
                Quisque est vel vulputate cursus. Risus proin diam nunc commodo.
                Lobortis auctor congue commodo diam neque.
              </dd>
            </div>
            <div class="relative pl-16" data-aos="fade-left">
              <dt class="text-base font-semibold leading-7 text-gray-900">
                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <HttpIcon fontSize="large" />
                </div>
                Backend connection
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">
                Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis
                aliquet hac quis. Id hac maecenas ac donec pharetra eget.
              </dd>
            </div>
            <div class="relative pl-16" data-aos="fade-right">
              <dt class="text-base font-semibold leading-7 text-gray-900">
                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <StorageIcon fontSize="medium" />
                </div>
                State management
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">
                Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis
                aliquet hac quis. Id hac maecenas ac donec pharetra eget.
              </dd>
            </div>
            <div class="relative pl-16" data-aos="fade-left">
              <dt class="text-base font-semibold leading-7 text-gray-900">
                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <HttpIcon fontSize="large" />
                </div>
                Backend connection
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">
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
