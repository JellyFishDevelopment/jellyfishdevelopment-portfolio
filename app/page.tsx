import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center gap-4 p-4 border-b bg-background">
        <div className="flex gap-4 ">
          <h1>Jellyfish</h1>
          <Link href="/">Projetos</Link>
          <Link href="/about">Sobre</Link>
          <Link href="/contact">Contato</Link>
          <Link href="/faq">FAQ</Link>
        </div>
        <div className="flex gap-4">
          <Button className="bg-rose-700 hover:bg-rose-800 text-white py-6 rounded-md">
            Entre em Contato
          </Button>
        </div>
      </nav>

      <main className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-700 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-700"></span>
            </span>

            <h1 className="font-medium">Eleve sua presença digital</h1>
          </div>
          <h1 className="text-5xl font-bold">
            Moldar o futuro digital adaptadas para o seu negócio.
          </h1>
          <h3 className="text">
            Na JellyFish Development, somos mais do que uma desenvolvedora de
            softwares; somos arquitetos digitais dedicados a transformar suas
            ideias em soluções inovadoras.
          </h3>

          <Button className="bg-rose-700 hover:bg-rose-800 text-white py-6 rounded-md w-fit">
            Veja nossos serviços
            <span>
              <ArrowRightIcon />
            </span>
          </Button>

          <h1 className="w-fit text-xs font-normal border rounded-md p-2">
            Sua visão, nossa especialidade
          </h1>
        </div>
        <div className="relative z-[-1] hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500/30 to-blue-500/30 rounded-full blur-3xl" />
          <Image
            src="/jellyfish.png"
            alt="Jellyfish"
            width={1500}
            height={1500}
            className="relative animate-float sm:w-[1000px] md:w-[1000px] lg:w-[1200px] xl:w-[1200px]"
          />
        </div>
      </main>
    </div>
  );
}
