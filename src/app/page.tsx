import MarqueeLooper from "@/components/marquee-looper";
import Nav from "@/components/nav";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ChevronDown } from "lucide-react";

export default function Home() {

  return (
    <main className="antialiased">
      <Nav />
      <div className="flex mx-auto flex-col place-items-center justify-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
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
            <ChevronDown />
            Conheça mais do nosso trabalho
          </Button>
        </div>
      </div>

      <div className="flex justify-center place-items-center p-12">
        <div >
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight w-2/4">Desenvolvimento de Sites Dinâmicos</h1>
          <h2 className="text-muted-foreground">Planejados para sua empresa conquistar novos clientes.</h2>        
        </div>

        <div>
          Imagem
        </div>
        
      </div>
    </main>
  );
}
