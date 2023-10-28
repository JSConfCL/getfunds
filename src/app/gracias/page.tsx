import React from "react";

export default function Gracias() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-12 transition-all">
      <div className="container flex flex-col items-center justify-center gap-3 transition-all">
        <h1 className="text-5xl font-bold transition-all md:text-6xl lg:text-7xl">
          Gracias!
        </h1>
        <h1 className="text-5xl font-bold transition-all md:text-6xl lg:text-7xl">
          🙏
        </h1>
      </div>
      <div className="container flex max-w-2xl flex-col items-center justify-center gap-4 text-center text-lg transition-all md:text-xl">
        <p>A nombre de toda la comunidad de JavaScript Chile.</p>
        <p>
          Tu apoyo no solo nos ayuda a mantener vivas nuestras iniciativas, si
          no que también juega un papel vital también en el desarrollo de la
          comunidad de tecnología en Chile.
        </p>
      </div>
    </main>
  );
}
