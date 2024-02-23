import MarqueeLooper from "@/components/marquee-looper";
import Nav from "@/components/nav";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <main className="antialiased">
      <Nav/>
      <div className="flex mx-auto flex-col place-items-center justify-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">JellyFish<span className="text-3xl font-normal">.dev</span></h1>

        <h2 className="text-muted-foreground text-lg">Com você, somos capazes de moldar o futuro digital de forma inovadora e envolvente</h2>
        <div className="flex flex-row gap-4 mt-4">
          <Button>Nossos serviços</Button>
          <Button variant={"outline"}>
            <GitHubLogoIcon className="w-4 h-4 mr-2"/>
            GitHub
          </Button>
        </div>

        <MarqueeLooper />
      </div>
    </main>
  );
}
