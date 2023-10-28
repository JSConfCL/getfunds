import React from "react";
import { Card } from "../ui/Card";

export const Perks = () => {
  return (
    // <div className="">

    <div className="flex w-full items-center py-20">
      <div className="container flex flex-col gap-10 text-center lg:text-left">
        <div className="col-span-12 flex flex-col gap-4">
          <h2 id="donations" className="text-3xl font-bold lg:text-4xl">
            <span className="after:whitespace-pre after:content-['\a']">
              Perks y Beneficios
            </span>
          </h2>
          <p className="text-base sm:text-sm lg:text-base">
            Estamos agradecidos de todos quienes nos apoyan! Sus contribuciónes
            no solo ayudan a mantener vivas nuestras iniciativas, también juegan
            un papel vital en el desarrollo tecnológico en Chile. Por eso
            queremos agradecerles con algunos beneficios.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 id="small-perks" className="text-xl font-bold lg:text-2xl">
            <span className="after:whitespace-pre after:content-['\a']">
              Aporte de una vez
            </span>
          </h2>
          <div className="grid grid-cols-12 gap-6">
            <Card size="col-span-6 sm:col-span-4 lg:col-span-4 xl:col-span-3">
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-bold transition-all md:text-xl">
                  Wall of Fame
                </h3>
                <p className="text-sm lg:text-base">
                  Se parte del wall-of-fame de donadores de JavascriptChile
                  durante 3 meses
                </p>
              </div>
            </Card>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 id="small-perks" className="text-xl font-bold lg:text-2xl">
            <span className="after:whitespace-pre after:content-['\a']">
              Subscripción mensual <small>(Desde $7.000)</small>
            </span>
          </h2>
          <div className="grid grid-cols-12 gap-6">
            <Card size="col-span-6 sm:col-span-4 lg:col-span-4 xl:col-span-3">
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-bold transition-all md:text-xl">
                  Wall of Fame
                </h3>
                <p className="text-sm lg:text-base">
                  Se parte del wall-of-fame de donadores de JavascriptChile
                </p>
              </div>
            </Card>
            <Card size="col-span-6 sm:col-span-4 lg:col-span-4 xl:col-span-3">
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-bold transition-all md:text-xl">
                  Entra antes!
                </h3>
                <p className="text-sm lg:text-base">
                  Recibe los correos de los eventos de JavascriptChile, un
                  poquito antes que el resto de la comunidad.
                </p>
              </div>
            </Card>
            <Card size="col-span-6 sm:col-span-4 lg:col-span-4 xl:col-span-3">
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-bold transition-all md:text-xl">
                  Discord VIP ⭐️
                </h3>
                <p className="text-sm lg:text-base">
                  Accede al canal VIP <b>(Very Interesting Programming)</b> de
                  Discord. Se parte del futuro de JavascriptChile.
                </p>
              </div>
            </Card>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 id="small-perks" className="text-xl font-bold lg:text-2xl">
            <span className="after:whitespace-pre after:content-['\a']">
              Subscripción mensual <small>(Desde $21.000)</small>
            </span>
          </h2>
          <div className="grid grid-cols-12 gap-6">
            <Card size="col-span-6 sm:col-span-4 lg:col-span-4 xl:col-span-3">
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-bold transition-all md:text-xl">
                  Wall of Fame
                </h3>
                <p className="text-sm lg:text-base">
                  Se parte del wall-of-fame de donadores de JavascriptChile
                </p>
              </div>
            </Card>
            <Card size="col-span-6 sm:col-span-4 lg:col-span-4 xl:col-span-3">
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-bold transition-all md:text-xl">
                  Entra antes!
                </h3>
                <p className="text-sm lg:text-base">
                  Recibe los correos de los eventos de JavascriptChile, un
                  poquito antes que el resto de la comunidad.
                </p>
              </div>
            </Card>
            <Card size="col-span-6 sm:col-span-4 lg:col-span-4 xl:col-span-3">
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-bold transition-all md:text-xl">
                  Discord VIP ⭐️
                </h3>
                <p className="text-sm lg:text-base">
                  Accede al canal VIP <b>(Very Interesting Programming)</b> de
                  Discord. Se parte del futuro de JavascriptChile.
                </p>
              </div>
            </Card>
            <Card size="col-span-6 sm:col-span-4 lg:col-span-4 xl:col-span-3">
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-bold transition-all md:text-xl">
                  Kit de bienvenida 🔥
                </h3>
                <p className="text-sm lg:text-base">
                  Déjanos tu dirección, para hacerte llegar un kit de bienvenida
                  a la comunidad mas cool de Javacript en Chile!
                </p>
              </div>
            </Card>
            <Card size="col-span-6 sm:col-span-4 lg:col-span-4 xl:col-span-3">
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-bold transition-all md:text-xl">
                  418 Agradecimientos 🎙️
                </h3>
                <p className="text-sm lg:text-base">
                  Recibe un agradecimiento en los episodios de 418, el
                  Livestream/Podcast de la comunidad de JavascriptChile.
                </p>
              </div>
            </Card>
            <Card size="col-span-6 sm:col-span-4 lg:col-span-4 xl:col-span-3">
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-bold transition-all md:text-xl">
                  Y más!
                </h3>
                <p className="text-sm lg:text-base">
                  Constantemente estamos buscando mas beneficios para nuestros
                  donadores ❤️
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
