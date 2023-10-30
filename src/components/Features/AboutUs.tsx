import React from "react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export const AboutUs = () => {
  return (
    <div className=" flex w-full items-center bg-white py-16 md:min-h-fit">
      <div className="container flex flex-col gap-8 text-center lg:text-left">
        <div className="col-span-12 flex flex-col gap-4 lg:col-span-3">
          <h2 id="donations" className="text-3xl font-bold lg:text-4xl">
            <span className="after:whitespace-pre after:content-['\a']">
              Sobre JavascriptChile,
            </span>
          </h2>
        </div>
        <p className="text-base">
          Nuestro principal propósito es brindar apoyo y fortalecimiento a las
          comunidades tecnológicas de Chile. Nos enfocamos en impulsar el
          desarrollo tecnológico del país y potenciar el crecimiento de sus
          desarrolladores. Nuestra labor se basa en colaborar estrechamente con
          diferentes actores del ecosistema tech local, como empresas,
          instituciones académicas y otros organismos, para promover la
          innovación y fomentar el desarrollo de aplicaciones en Chile.
        </p>
        <p className="text-base">
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
            className={`mr-2 mb-2 ${buttonVariants({
              variant: "default",
            })}`}
          >
            Donar o Ser Sponsor
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://jschile.org/"
            className={`${buttonVariants({ variant: "default" })}`}
          >
            Conoce más de JavaScriptChile
          </Link>
        </div>
      </div>
    </div>
  );
};
