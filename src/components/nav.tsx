import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Nav() {
  return (
    <header className="sticky">
      <nav className="flex justify-between py-2 px-8 border-b max-w-screen-2xl items-center">
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
            <a className="text-sm text-muted-foreground transition-colors hover:text-foreground/80" href="#">Projetos</a>
          </li>

          <li>
            <a className="text-sm text-muted-foreground transition-colors hover:text-foreground/80" href="#">Quem Somos</a>
          </li>

          <li>
            <a className="text-sm text-muted-foreground transition-colors hover:text-foreground/80" href="#">Contato</a>
          </li>
        </ul>

        <ul className="flex flex-row place-content-center items-center gap-5">
          <li className="flex flex-row place-content-center items-center gap-5">
            <GitHubLogoIcon />
            <LinkedInLogoIcon/>
            <InstagramLogoIcon />
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  )
}