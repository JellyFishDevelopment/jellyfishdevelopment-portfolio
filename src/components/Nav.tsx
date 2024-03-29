import Image from "next/image";
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Nav() {

  return (
      <header className="sticky top-0 z-50 w-full border-b border-border/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="flex justify-between py-2 px-8 items-center">
        <ul className="flex flex-row place-content-center items-center gap-5">
          <li className="flex flex-row place-content-center items-center gap-1">
            <a href="/">
              <Image
              src={"/jellyfishlogo.svg"}
              width={25}
              height={24}
              alt="jellyfish logo"
              className="dark:invert"
              />
            </a>
            <a href="/">
              <h1 className="font-extrabold">JellyFish<span className="text-sm font-normal">.dev</span></h1>
            </a>
          </li>

          <li>
            <a className="text-sm hover:text-muted" href="/projects">Projetos</a>
          </li>

          <li>
            <a className="text-sm hover:text-muted" href="/about">Quem Somos</a>
          </li>

          <li>
            <a className="text-sm hover:text-muted" href="/contact">Contato</a>
          </li>
        </ul>

        <ul className="flex flex-row place-content-center items-center gap-5">
          <li className="flex flex-row place-content-center items-center gap-5">
            <a href="https://github.com/JellyFishDevelopment">
              <GitHubLogoIcon />
            </a>
            <a href="#">
              <LinkedInLogoIcon/>
            </a>
            <a href="https://www.instagram.com/jellyfishdevelopment/">
              <InstagramLogoIcon />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}