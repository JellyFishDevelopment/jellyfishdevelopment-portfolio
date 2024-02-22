import Image from "next/image";
import { ModeToggle } from "./mode-toggle";

export default function Nav() {
  return (
    <header>
      <nav className="flex items-center justify-between py-4 px-8 border-b">
        <ul className="flex flex-row place-content-center items-center gap-5">
          <li className="flex flex-row place-content-center items-center gap-1">
            <Image 
            src={"/jellyfishlogo.svg"}
            width={30}
            height={24}
            alt="jellyfish logo"
            className="dark:invert"
          />
            <h1 className="font-extrabold">JellyFish<span className="text-sm font-normal">.dev</span></h1>
          </li>

          <li>
            <a className="font-base text-muted-foreground" href="#">Projetos</a>
          </li>

          <li>
            <a className="font-base text-muted-foreground" href="#">Quem Somos</a>
          </li>

          <li>
            <a className="font-base text-muted-foreground" href="#">Contato</a>
          </li>
        </ul>

        <ul>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  )
}