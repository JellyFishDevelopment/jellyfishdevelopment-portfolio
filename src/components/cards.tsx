import Spotlight, { SpotlightCard } from "@/components/spotlight";
import Image from "next/image";
import sdsWikiProject from "../../public/sds-wiki.png";
import jmSiteProject from "../../public/jm-eletrica.png";
import lucianaProject from "../../public/luciana-advogada.png";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import { Locale } from "@/config/i18n.config";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";

export default function Cards({ params }: { params: { lang: Locale } }) {
  const dict = getDictionaryUseClient(params.lang);

  return (
    <div>
      <Spotlight className="grid gap-4 lg:grid-cols-3 items-start group max-[425px]:justify-center">
        <SpotlightCard>
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
                alt={dict.site.page.home.screen2.cards.text[0].title}
              />
              {/* Text */}
              <div>
                <h2 className="text-2xl text-slate-200 font-bold mb-1 px-3 pt-5">
                  {dict.site.page.home.screen2.cards.text[0].title}
                </h2>
                <p className="font-normal text-muted p-3">
                  {dict.site.page.home.screen2.cards.text[0].body}
                </p>

                <div className="grid grid-cols-7 mt-5">
                  <div>
                    <a href="https://sds-wiki.vercel.app/">
                      <Button
                        className="border-jelly_border hover:text-white"
                        variant="outline"
                      >
                        {dict.site.page.home.screen2.cards.button}
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

        {/* Card #2 */}
        <SpotlightCard>
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
                className="rounded-lg w-full"
                src={jmSiteProject}
                height={600}
                width={600}
                alt={dict.site.page.home.screen2.cards.text[1].title}
              />
              {/* Text */}
              <div>
                <h2 className="text-2xl text-slate-200 font-bold mb-1 px-3 pt-5">
                  {dict.site.page.home.screen2.cards.text[1].title}
                </h2>
                <p className="font-normal text-muted p-3">
                  {dict.site.page.home.screen2.cards.text[1].body}
                </p>

                <div className="grid grid-cols-7 mt-11">
                  <div>
                    <a href="https://jm-eletrica.vercel.app/">
                      <Button
                        className="border-jelly_border hover:text-white"
                        variant="outline"
                      >
                        {dict.site.page.home.screen2.cards.button}
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

        {/* Card #3 */}
        <SpotlightCard>
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
                className="rounded-lg w-full"
                src={lucianaProject}
                height={600}
                width={600}
                alt={dict.site.page.home.screen2.cards.text[2].title}
              />
              {/* Text */}
              <div>
                <h2 className="text-2xl text-slate-200 font-bold mb-1 px-3 pt-5">
                  {dict.site.page.home.screen2.cards.text[2].title}
                </h2>
                <p className="font-normal text-muted p-3">
                  {dict.site.page.home.screen2.cards.text[2].body}
                </p>

                <div className="grid grid-cols-7 mt-16">
                  <div>
                    <a href="https://site-luciana-adv.vercel.app/">
                      <Button
                        className="border-jelly_border hover:text-white"
                        variant="outline"
                      >
                        {dict.site.page.home.screen2.cards.button}
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
      </Spotlight>
    </div>
  );
}
