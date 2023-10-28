import React from "react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export const Intro = () => {
  return (
    <div className="container flex min-h-[calc(90svh)] items-center md:min-h-fit md:py-16 lg:pb-8">
      <div className="mt-8 flex w-full flex-col gap-8 text-center lg:text-left">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://jschile.org/"
        >
          <h1
            className="
          pointer-events-none inline-block h-28 bg-[url('/logo.png')]
          bg-contain bg-no-repeat
          text-center font-bold
          text-transparent lg:pointer-events-auto lg:inline-block lg:h-auto lg:bg-none
          lg:text-5xl lg:text-jscl-black
        "
          >
            JavaScript <span className="hidden font-thin lg:inline">Chile</span>
          </h1>
        </Link>
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold lg:text-xl">
            JSChile es una corporación sin fines de lucros.
          </h3>
          <h2 className="text-xl font-bold lg:text-3xl">
            Ayudanos a promover el desarrollo tecnológico y el apredizaje en
            Chile.
          </h2>
        </div>
        <p className="hidden text-base">
          Nuestro principal propósito es brindar apoyo y fortalecimiento a las
          comunidades tecnológicas de Chile. Nos enfocamos en impulsar el
          desarrollo tecnológico del país y potenciar el crecimiento de sus
          desarrolladores. Nuestra labor se basa en colaborar estrechamente con
          diferentes actores del ecosistema tech local, como empresas,
          instituciones académicas y otros organismos, para promover la
          innovación y fomentar el desarrollo de aplicaciones en Chile.
        </p>
        <p className="hidden text-base">
          Además, hacemos eventos mensuales de distintas indoles, formas, y
          formatos. Ah, y también, organizamos la{" "}
          <Link
            className="cursor-pointer font-bold"
            target="_blank"
            rel="noopener noreferrer"
            href="https://jsconf.cl/"
          >
            JSConf Chile
          </Link>
          ❤️.
        </p>
        <div className="">
          <Link
            href="#donations"
            className={`mr-2 lg:hidden ${buttonVariants({
              variant: "default",
            })}`}
          >
            Donar o Ser Sponsor
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://jschile.org/"
            className={`lg:pl-0 ${buttonVariants({ variant: "link" })} hidden`}
          >
            Conoce más de JavaScriptChile
          </Link>
        </div>
      </div>
    </div>
  );
};
