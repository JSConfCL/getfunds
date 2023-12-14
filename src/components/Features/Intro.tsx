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
            Ayudanos a promover el desarrollo tecnológico y el aprendizaje en
            Chile.
          </h2>
        </div>
        <div className="">
          <Link
            href="#donations"
            className={`mr-2 lg:hidden ${buttonVariants({
              variant: "default",
            })}`}
          >
            Donar o Ser Sponsor
          </Link>
        </div>
      </div>
    </div>
  );
};
