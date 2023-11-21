import React from "react";
import { Card } from "../ui/Card";

const PerkCard = ({
  title,
  description,
}: {
  title: string;
  description: React.ReactNode;
}) => {
  return (
    <Card size="col-span-12 xs:col-span-6 sm:col-span-4 lg:col-span-4 xl:col-span-3">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-bold transition-all sm:text-base md:text-xl">
          {title}
        </h3>
        <p className="text-sm xs:text-xs lg:text-base">{description}</p>
      </div>
    </Card>
  );
};

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
            <PerkCard
              title="Wall of Fame"
              description="Se parte del wall-of-fame de donadores de JavascriptChile"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 id="small-perks" className="text-xl font-bold lg:text-2xl">
            <span className="after:whitespace-pre after:content-['\a']">
              Subscripción mensual <small>(Desde $7.000)</small>
            </span>
          </h2>
          <div className="grid grid-cols-12 gap-6">
            <PerkCard
              title="Wall of Fame"
              description="Se parte del wall-of-fame de donadores de JavascriptChile"
            />
            <PerkCard
              title="Entra antes!"
              description="Recibe los correos de los eventos de JavascriptChile, un poquito antes que el resto de la comunidad."
            />
            <PerkCard
              title="Discord VIP ⭐️"
              description="Accede al canal VIP (Very Interesting Programming) de Discord. Se parte del futuro de JavascriptChile."
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 id="small-perks" className="text-xl font-bold lg:text-2xl">
            <span className="after:whitespace-pre after:content-['\a']">
              Subscripción mensual <small>(Desde $21.000)</small>
            </span>
          </h2>
          <div className="grid grid-cols-12 gap-6">
            <PerkCard
              title="Wall of Fame"
              description="Se parte del wall-of-fame de donadores de JavascriptChile"
            />
            <PerkCard
              title="Entra antes!"
              description="Recibe los correos de los eventos de JavascriptChile, un poquito antes que el resto de la comunidad."
            />
            <PerkCard
              title="Discord VIP ⭐️"
              description="Accede al canal VIP (Very Interesting Programming) de Discord. Se parte del futuro de JavascriptChile."
            />
            <PerkCard
              title="Kit de bienvenida 🔥"
              description="Déjanos tu dirección, para hacerte llegar un kit de bienvenida a la comunidad mas cool de Javacript en Chile!"
            />
            <PerkCard
              title="Agradecimiento en 418 🎙️"
              description="Recibe un agradecimiento en los episodios de 418, el Livestream/Podcast de la comunidad de JavascriptChile."
            />
            <PerkCard
              title="Stickers de JavascriptChile 🤩"
              description="Recibe un pack de stickers de JavascriptChile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
