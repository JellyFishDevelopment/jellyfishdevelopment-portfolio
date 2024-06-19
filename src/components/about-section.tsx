import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Jelly from "../../public/jelly.png";
import { Locale } from "@/config/i18n.config";
import { getDictionaryUseClient } from "@/dictionaries/default-dictionary-use-client";

export function AboutSection({ params }: { params: { lang: Locale } }) {
  const dict = getDictionaryUseClient(params.lang);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1 }}
    >
      <div className="flex max-[425px]:flex-col row-auto 2xl:px-[400px] sm:px-[100px] lg:px-[200px] md:px-40 justify-center place-items-center items-center">
        <div>
          <h1 className="text-5xl font-bold pb-6 pt-12">
            {dict.site.page.home.screen3.about.title}
            <span className="Fish">.</span>
          </h1>
          <span
            dangerouslySetInnerHTML={{
              __html: dict.site.page.home.screen3.about.body,
            }}
          ></span>
          <p
            className="pb-6"
            dangerouslySetInnerHTML={{
              __html: dict.site.page.home.screen3.about.footer,
            }}
          ></p>

          <a href={`/${params.lang}/about`}>
            <Button>
              {dict.site.page.home.screen3.about.button}
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </a>
        </div>
        <Image
          src={Jelly}
          height={500}
          width={500}
          className="jellyfish-image max-[425px]:w-[200px] max-[425px]:mt-8"
          alt="Jelly"
        />
      </div>
    </motion.div>
  );
}
