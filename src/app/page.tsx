export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:dark:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:dark:from-[#333] after:via-[#333] after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-jscl-yellow before:dark:opacity-5 after:dark:from-jscl-yellow after:dark:via-jscl-yellow after:dark:opacity-20 before:lg:h-[360px] z-[-1]">
        <h1 className="font-bold text-5xl">JavaScript <span className="font-thin">Chile</span></h1>
      </div>
    </main>
  );
}
