import Link from 'next/link'
import { Banknote, CalendarClock, Wallet } from 'lucide-react';

import { buttonVariants } from "@/components/ui/button"

const title = "JSCL | Donaciones y Sponsors";
const description = "Donar a JavaScript Chile | Ayudanos a promover el desarrollo tecnológico y el apredizaje en Chile.";
const url = "https://jschile.org";
const images = "/og-image.png";

export const metadata = {
  metadataBase: new URL('https://jschile.org'),
  title,
  description,

  keywords: ["JavaScript",  "Comunidades", "Chile", "React", "Node"],
  authors: [{ name: "JSChile", url }],

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eacf39" },
    { media: "(prefers-color-scheme: dark)", color: "#333" },
  ],

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },

  // OpenGraph
  openGraph: {
    type: "website",
    url,
    title,
    description,
    images,
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    domain: "jschile.org",
    url,
    title,
    description,
    images,
  },
};

const donationOptions = [
  {
    id: '1Luka',
    title: '1 Luca',
    size: 'lg:col-span-4',
    amount: 1000,
    href: "https://mpago.la/1RX3F29",
    icon: <Banknote className="inline rotate-12 transition group-hover:rotate-45" size={48} />
  },
  {
    id: '5Lukas',
    title: '5 Lucas',
    size: 'lg:col-span-4',
    amount: 5000,
    href: "https://mpago.la/1jvHK63",
    icon: (
      <>
        <Banknote className="inline rotate-12 transition group-hover:rotate-45" size={48} />
        <Banknote className="inline rotate-12 transition group-hover:rotate-45" size={48} />
      </>
    )
  },
  {
    id: '10Lukas',
    title: '10 Lucas',
    size: 'lg:col-span-4',
    amount: 10000,
    href: "http://mpago.la/2a4gTpv",
    icon: (
      <>
        <Banknote className="inline rotate-12 transition group-hover:rotate-45" size={48} />
        <Banknote className="inline rotate-12 transition group-hover:rotate-45" size={48} />
        <Banknote className="inline rotate-12 transition group-hover:rotate-45" size={48} />
      </>
    )
  },
  {
    id: 'Otro Valor',
    title: 'Otro Valor',
    size: 'lg:col-span-6',
    href: "https://link.mercadopago.cl/jscl",
    icon: <Wallet className="inline rotate-12 transition group-hover:-rotate-45" size={48} />
  },
  {
    id: 'DonaciónMensual',
    title: 'Donación Mensual',
    size: 'lg:col-span-6',
    amount: null,
    href: "https://www.mercadopago.cl/subscriptions/checkout?preapproval_plan_id=2c93808489cf38670189d2bb9af20176",
    icon: <CalendarClock className="inline transition group-hover:rotate-12" size={48} />
  },
  {
    href: "mailto:contacto@jschile.org",
    size: 'lg:col-span-12',
    children: (
      <>
        <h2 className="text-base font-bold lg:text-lg">Eres compañía</h2>
        <h2 className="mb-4 text-center text-5xl font-bold">¿Quieres ser Sponsor?</h2>
        <h2 className="text-base">Tenemos planes por evento, mensuales, trimestrales y anuales.</h2>
      </>
    )
  }
]

interface CardProps {
  size: string;
  href: string;
  title?: string;
  amount?: number;
  children?: JSX.Element | JSX.Element[];
  iconRenderer?: () => JSX.Element | JSX.Element[];
}

const moneyFormat = (amount: number | null | undefined) => {
  if (amount == null) { return; }

  const CLP = new Intl.NumberFormat("es-CL", {
    currency: "CLP",
    style: "currency",
  })

  return CLP.format(amount)
}

const Card = ({ size, href, title, amount, children, iconRenderer }: CardProps) => {
  return (
    <a className={`col-span-12 text-center ${size} group`} target="_blank" rel="noopener noreferrer" href={href}>
      <div className="flex h-52 flex-col justify-center rounded-lg bg-[#f0dd74] p-4 text-center text-jscl-black hover:border-4 hover:border-jscl-yellow hover:bg-[#f4e69c]">
        {children ? (
          children
        ) : (
          <>
            <div>
              <div className="text-base">{title}</div>
              <div className="text-base font-bold">
                <span className="text-6xl">{moneyFormat(amount)}</span>
              </div>
              <div className="text-center text-base">{iconRenderer?.()}</div>
            </div>
          </>
        )}
      </div>
    </a>
  )
}

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="container flex min-h-[calc(50vh-5rem)] items-center">
        <div className="mt-8 w-full text-center lg:text-left">
          <Link target="_blank" rel="noopener noreferrer" href="https://jschile.org/">
            <h1 className="
              mb-4
              inline-block h-28 bg-[url('/logo.png')] bg-contain
              bg-no-repeat text-center
              font-bold text-transparent
              lg:inline-block lg:h-auto lg:bg-none lg:text-5xl lg:text-jscl-black
            ">
              JavaScript <span className="hidden font-thin lg:inline">Chile</span>
            </h1>
          </Link>
          <h3  className="mb-1 text-base font-bold lg:text-2xl">Somos una corporación sin fines de lucros.</h3>
          <h2 className="mb-4 text-base font-bold lg:text-3xl">Ayudanos a promover el desarrollo tecnológico y el apredizaje en Chile.</h2>
          <p className="mb-4 text-base">
            Nuestro principal propósito es brindar apoyo y fortalecimiento a las comunidades tecnológicas de Chile. Nos enfocamos en impulsar el desarrollo tecnológico del país y potenciar el crecimiento de sus desarrolladores. Nuestra labor se basa en colaborar estrechamente con diferentes actores del ecosistema tech local, como empresas, instituciones académicas y otros organismos, para promover la innovación y fomentar el desarrollo de aplicaciones en Chile.</p>
          <p className="mb-4 text-base">Además, hacemos eventos mensuales de distintas indoles, formas, y formatos. Ah, y también, organizamos la <Link className="cursor-pointer font-bold" target="_blank" rel="noopener noreferrer" href="https://jsconf.cl/">JSConf Chile</Link>❤️.</p>
          <div className='mb-4'>
            <Link href="#donations" className={`mr-2 lg:hidden ${buttonVariants({ variant: "outline" })}`}>Donar o Ser Sponsor</Link>
            <Link target="_blank" rel="noopener noreferrer" href="https://jschile.org/" className={`lg:pl-0 ${buttonVariants({ variant: "link"})}`}>Conocer más de JavaScriptChile</Link>
          </div>
        </div>
      </div>
      <div className="w-full bg-white">
        <div className="container mt-8">
          <div className="col-span-12 lg:col-span-5">
            <h2 id="donations" className="mb-2 text-3xl font-bold lg:text-4xl">
              <span className="after:whitespace-pre after:content-['\a']">Donar,</span>
              Ser Sponsor
            </h2>
            <p className="mb-4 text-base">Para poder llevar a cabo los distintos tipos de eventos mensuales debemos invertir mucho dinero. Tu apoyo nos permitirá seguir brindando experiencias enriquecedoras para la comunidad tech chilena. ¿Deseas ayudar?</p>
          </div>
        </div>
        <div className="container mb-8 grid grid-cols-12 gap-4 pt-8 text-center lg:mt-0 lg:text-left">
          {donationOptions.map(donationOption => donationOption.children ? (
            <Card
              key={donationOption.id}
              size={donationOption.size}
              href={donationOption.href}
            >
              {donationOption.children}
            </Card>
          ) :
          donationOption.amount ? (
            <Card
              key={donationOption.id}
              title={"Donar"}
              size={donationOption.size}
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
              <div className="text-5xl font-bold">{donationOption.title}</div>
              <div className="text-center">{donationOption.icon}</div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
