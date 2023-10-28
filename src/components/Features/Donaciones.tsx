import { Banknote, CalendarClock, Wallet } from "lucide-react";

import React from "react";
import { Card } from "../ui/Card";
const donationOptions = [
  {
    id: "1Luka",
    title: "Donar",
    size: "lg:col-span-3",
    amount: 1000,
    href: "https://mpago.la/1RX3F29",
    icon: (
      <Banknote
        className="inline rotate-12 transition group-hover:rotate-45"
        size={48}
      />
    ),
  },
  {
    id: "5Lukas",
    title: "Donar",
    size: "lg:col-span-3",
    amount: 5000,
    href: "https://mpago.la/1jvHK63",
    icon: (
      <>
        <Banknote
          className="inline rotate-12 transition group-hover:rotate-45"
          size={48}
        />
        <Banknote
          className="inline rotate-12 transition group-hover:rotate-45"
          size={48}
        />
      </>
    ),
  },
  {
    id: "10Lukas",
    title: "Donar",
    size: "lg:col-span-3",
    amount: 10000,
    href: "https://mpago.la/2a4gTpv",
    icon: (
      <>
        <Banknote
          className="inline rotate-12 transition group-hover:rotate-45"
          size={48}
        />
        <Banknote
          className="inline rotate-12 transition group-hover:rotate-45"
          size={48}
        />
        <Banknote
          className="inline rotate-12 transition group-hover:rotate-45"
          size={48}
        />
      </>
    ),
  },
  {
    id: "Otro Valor",
    title: "Otro Valor ",
    size: "lg:col-span-4",
    href: "https://link.mercadopago.cl/jscl",
    icon: (
      <Wallet
        className="inline rotate-12 transition group-hover:-rotate-45"
        size={48}
      />
    ),
  },
  {
    id: "DonaciónMensual",
    title: "Donación Mensual",
    size: "lg:col-span-8",
    amount: null,
    href: "https://www.mercadopago.cl/subscriptions/checkout?preapproval_plan_id=2c93808489cf38670189d2bb9af20176",
    icon: (
      <CalendarClock
        className="inline transition group-hover:rotate-12"
        size={48}
      />
    ),
  },
  {
    href: "mailto:contacto@jschile.org",
    size: "lg:col-span-12",
    children: (
      <>
        <h2 className="text-base font-bold md:text-base lg:text-lg">
          Representas a una compañía?
        </h2>
        <h2 className="text-center text-2xl font-bold transition-all lg:text-4xl xl:text-5xl">
          ¿Quieres ser Sponsor?
        </h2>
        <h2 className="text-xs md:text-base">
          Contáctanos! Tenemos planes por evento, mensuales, trimestrales y
          anuales.
        </h2>
      </>
    ),
  },
];

export const Donaciones = () => {
  return (
    <div className="w-full bg-white py-20">
      <div className="container flex flex-col gap-6 text-center md:grid lg:mt-0 lg:grid lg:grid-cols-12 lg:gap-4 lg:text-left">
        <div className="col-span-12 flex flex-col gap-4 lg:col-span-3">
          <h2 id="donations" className="text-3xl font-bold lg:text-4xl">
            <span className="after:whitespace-pre after:content-['\a']">
              Donar,
            </span>
            Ser Sponsor
          </h2>
          <p className=" text-base">
            Ayúdanos a financiar parte de las iniciativas y actividades de
            JavaScript Chile, y experiencias enriquecedoras para la comunidad.
            <br />
            <b>¿Deseas ayudar?</b>
          </p>
        </div>
        {donationOptions.map((donationOption) =>
          donationOption.children ? (
            <Card
              key={donationOption.id}
              size={donationOption.size}
              href={donationOption.href}
              title={donationOption.title}
            >
              {donationOption.children}
            </Card>
          ) : donationOption.amount ? (
            <Card
              key={donationOption.id}
              size={donationOption.size}
              title={donationOption.title}
              amount={donationOption.amount}
              href={donationOption.href}
              iconRenderer={() => donationOption.icon}
            />
          ) : (
            <Card
              key={donationOption.id}
              size={donationOption.size}
              href={donationOption.href}
            >
              <div className="text-3xl font-bold transition-all lg:text-4xl xl:text-5xl">
                {donationOption.title}
              </div>
              <div className="text-center">{donationOption.icon}</div>
            </Card>
          ),
        )}
      </div>
    </div>
  );
};
