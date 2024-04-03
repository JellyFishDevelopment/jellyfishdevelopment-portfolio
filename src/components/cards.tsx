import Spotlight, { SpotlightCard } from "@/components/Spotlight";
import Image from "next/image";
import sdsWikiProject from "../../public/sds-wiki.png";
import jmSiteProject from "../../public/jm-eletrica.png";
import lucianaProject from "../../public/luciana-advogada.png";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import { Locale } from "@/config/i18n.config";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";

interface Card {
  title: string;
  body: string;
}
interface Cards {
  text: Card[];
  button: string;
}
export default function Cards({params}: {params: {lang: Locale, cards: Cards}}) {
  // const dict = getDictionaryUseClient(params.lang)
  const button: string = 'Visitar o Website'
  return (
    <div>
      <Spotlight className="grid gap-4 lg:grid-cols-3 items-start group">
        {
        params.cards.text.map((i: Card, index: number) => (
        <SpotlightCard key={index}>
          <div className="relative h-full p-6 rounded-[inherit] z-20 overflow-hidden">
            {/* Radial gradient */}
            <div
              className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
              aria-hidden="true"
            >
              <div className="absolute inset-0 translate-z-0 rounded-full blur-[80px]"></div>
            </div>
            <div className="flex flex-col h-full text-left">
              <Image
                className="rounded-lg"
                src={sdsWikiProject}
                height={600}
                width={600}
                alt={i.title}
              />
              {/* Text */}
              <div>
                <h2 className="text-2xl text-slate-200 font-bold mb-1 px-3 pt-5">
                  {i.title}
                </h2>
                <p className="font-normal text-muted p-3">
                  {i.body}
                </p>

                <div className="grid grid-cols-7 mt-11">
                  <div>
                    <a href="https://sds-wiki.vercel.app/">
                      <Button className="hover:text-white" variant="outline">
                        {button}
                        <ExternalLink
                          className="ml-2"
                          size={16}
                          strokeWidth={1.5}
                        />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SpotlightCard>
        ))
      }
      </Spotlight>
    </div>
  );
}