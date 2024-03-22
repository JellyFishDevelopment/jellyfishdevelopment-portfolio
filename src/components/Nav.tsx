import Image from "next/image";
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Nav() {

  return (
      <header className="sticky top-0 z-50 w-full border-b border-border/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="flex justify-between py-2 px-8 items-center">
        <ul className="flex flex-row place-content-center items-center gap-5">
          <li className="flex flex-row place-content-center items-center gap-1">
            <Image
            src={"/jellyfishlogo.svg"}
            width={25}
            height={24}
            alt="jellyfish logo"
            className="dark:invert"
          />
            <h1 className="font-extrabold">JellyFish<span className="text-sm font-normal">.dev</span></h1>
          </li>

          <li>
            <a className="text-sm hover:text-muted" href="#">Projetos</a>
          </li>

          <li>
            <a className="text-sm hover:text-muted" href="#">Quem Somos</a>
          </li>

          <li>
            <a className="text-sm hover:text-muted" href="#">Contato</a>
          </li>
        </ul>

        <ul className="flex flex-row place-content-center items-center gap-5">
          <li className="flex flex-row place-content-center items-center gap-5">
            <GitHubLogoIcon />
            <LinkedInLogoIcon/>
            <InstagramLogoIcon />
          </li>
        </ul>
      </nav>
    </header>
  )
}