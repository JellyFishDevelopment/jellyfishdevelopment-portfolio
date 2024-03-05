import MarqueeLooper from "@/components/marquee-looper";
import Nav from "@/components/nav";
import { ProjectsCard } from "@/components/projects-card";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="antialiased">
      <Nav />
      <div className="flex mx-auto flex-col place-items-center justify-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <Badge className="bg-green-900 hover:bg-green-700 ml-4">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute right-1 inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex right-1 rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          Estamos disponível para negócios
        </Badge>
        <h1 className="text-center text-8xl font-bold leading-tight tracking-tighter">
          JellyFish<span className="text-6xl font-normal">.dev</span>
        </h1>
        <h2 className="text-muted-foreground text-lg">
          Com você, somos capazes de moldar o futuro digital de forma inovadora
          e envolvente
        </h2>
        <div className="flex flex-row gap-4 mt-4">
          <Button>Nossos serviços</Button>
          <Button variant={"outline"}>
            <GitHubLogoIcon className="w-4 h-4 mr-2" />
            GitHub
          </Button>
        </div>
        <div className="mt-12 w-3/4">
          <MarqueeLooper />
        </div>
        <div className="pt-12">
          <Button variant={"ghost"}>
            Conheça mais do nosso trabalho
            <ChevronDown strokeWidth={0.75} />
          </Button>
        </div>
      </div>

      <div className="flex justify-center px-48 pb-16">
        <div className="w-2/4">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight pb-2">
            Desenvolvimento de Sites Dinâmicos
          </h1>
          <h2 className="text-muted-foreground pb-4">
            Planejados para sua empresa conquistar novos clientes.
          </h2>
          <h3 className="text-foreground">
            Na <span className="font-bold">JellyFish</span>, somos mais do que
            uma desenvolvedora de softwares; somos arquitetos digitais dedicados
            a transformar suas ideias em soluções inovadoras.
          </h3>
        </div>

        <div>
          <Image
            src={"/development-image.png"}
            width={500}
            height={50}
            alt="development image"
            className="dark:invert development-image"
          />
        </div>
      </div>

      <div className="border-t-2 rounded-3xl pt-16">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight text-center">
            Alguns de nossos trabalhos
          </h1>

          <div className="pt-7 flex justify-center *:gap-4">
            <ProjectsCard />
          </div>

      </div>
    </main>
  );
}
