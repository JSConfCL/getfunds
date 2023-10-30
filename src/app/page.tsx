import { Intro } from "../components/Features/Intro";
import { Donaciones } from "../components/Features/Donaciones";
import { AboutUs } from "../components/Features/AboutUs";
import { Perks } from "../components/Features/Perks";

import { getMetaData } from "@/lib/metadata";

export const metadata = getMetaData({})

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
