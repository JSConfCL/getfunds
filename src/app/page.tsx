import { Intro } from "../components/Features/Intro";
import { Donaciones } from "../components/Features/Donaciones";
import { AboutUs } from "../components/Features/AboutUs";
import { Perks } from "../components/Features/Perks";

const title = "JSCL | Donaciones y Sponsors";
const description =
  "Donar a JavaScript Chile | Ayudanos a promover el desarrollo tecnológico y el apredizaje en Chile.";
const url = "https://jschile.org";
const images = "/og-image.png";

export const metadata = {
  metadataBase: new URL("https://jschile.org"),
  title,
  description,

  keywords: ["JavaScript", "Comunidades", "Chile", "React", "Node"],
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

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-12 lg:gap-8">
      <Intro />
      <Donaciones />
      <Perks />
      <AboutUs />
    </main>
  );
}
