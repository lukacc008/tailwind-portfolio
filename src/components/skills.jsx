import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import GitHubIcon from "@mui/icons-material/GitHub";
import JavascriptIcon from "@mui/icons-material/Javascript";
import CssIcon from "@mui/icons-material/Css";
import HttpIcon from "@mui/icons-material/Http";
import StorageIcon from "@mui/icons-material/Storage";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

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
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-gold">
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
              <dt className="text-base font-semibold leading-7 text-gold">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo">
                  <JavascriptIcon fontSize="large" />
                </div>
                JavaScript
              </dt>
              <dd className="mt-2 text-base leading-7 text-gold bg-indigo rounded-lg p-4">
              With a solid command of JavaScript, I leverage its versatility to create dynamic and interactive web experiences, ranging from user interface enhancements to complex functionality implementation.
              </dd>
            </div>
            <div className="relative pl-16" data-aos="flip-left">
              <dt className="text-base font-semibold leading-7 text-gold">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo">
                  <GitHubIcon />
                </div>
                Git/GitHub
              </dt>
              <dd className="mt-2 text-base leading-7 text-gold bg-indigo rounded-lg p-4">
              Solid in Git and GitHub, I utilize version control effectively to manage project workflows, collaborate seamlessly with team members, and contribute to open-source projects with confidence.
              </dd>
            </div>
            <div className="relative pl-16" data-aos="flip-right">
              <dt className="text-base font-semibold leading-7 text-gold">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo">
                  <CssIcon fontSize="large" />
                </div>
                CSS
              </dt>
              <dd className="mt-2 text-base leading-7 text-gold bg-indigo rounded-lg p-4">
              I craft visually appealing and responsive designs, ensuring seamless user experiences across various devices and screen sizes. In this portfolio I used Tailwind.
              </dd>
            </div>
            <div className="relative pl-16" data-aos="flip-left">
              <dt className="text-base font-semibold leading-7 text-gold">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo">
                  <HttpIcon fontSize="large" />
                </div>
                Backend connection
              </dt>
              <dd className="mt-2 text-base leading-7 text-gold bg-indigo rounded-lg p-4">
              With experience in backend connection methodologies, I seamlessly integrate frontend components with server-side functionalities, enabling efficient data exchange and robust application performance.
              </dd>
            </div>
            <div className="relative pl-16" data-aos="flip-right">
              <dt className="text-base font-semibold leading-7 text-gold">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo">
                  <StorageIcon fontSize="medium" />
                </div>
                State management
              </dt>
              <dd className="mt-2 text-base leading-7 text-gold bg-indigo rounded-lg p-4">
              tate management techniques, such as Redux, Context API, Tanstack React-Query in React, I ensure the consistent and predictable behavior of applications, effective data flow and management within complex web ecosystems.
              </dd>
            </div>
            <div className="relative pl-16" data-aos="flip-left">
              <dt className="text-base font-semibold leading-7 text-gold">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo">
                  <LibraryBooksIcon fontSize="medium" />
                </div>
                Library usage
              </dt>
              <dd className="mt-2 text-base leading-7 text-gold bg-indigo rounded-lg p-4">
              Proficient in utilizing various libraries to develop and enhance functionality across projects. Whether integrating UI frameworks for streamlined frontend development or leveraging backend libraries for efficient server-side processing, I adeptly incorporate libraries to meet project requirements and optimize performance.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
