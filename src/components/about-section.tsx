import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Jelly from "../../public/jelly.png";

export function AboutSection() {
  return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        <div className="flex row-auto 2xl:px-80 sm:px-40 lg:px-40 md:px-40 justify-center place-items-center items-center">
          <div>
            <h1 className="text-5xl font-bold pb-6 pt-12">
              Sobre nós<span className="Fish">.</span>
            </h1>
            <p className="pb-4">
              Na Jelly<span className="Fish font-bold">Fish</span> Development,
              somos mais do que uma desenvolvedora de softwares; somos
              arquitetos digitais dedicados a transformar suas ideias em
              soluções inovadoras.
            </p>
            <p className="pb-4">
              Com uma abordagem ágil e comprometimento com a excelência,
              oferecemos serviços de desenvolvimento mobile, desktop e web
              personalizados especialmente para você.
            </p>
            <p className="pb-6">
              Estamos prontos para levar sua visão ao{" "}
              <span className="Fish font-bold">próximo nível</span>🚀
            </p>

            <a href="/about">
              <Button>
                Conheça quem somos
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </a>
          </div>
          <Image
            src={Jelly}
            height={500}
            width={500}
            className="jellyfish-image"
            alt="Jelly"
          />
        </div>
      </motion.div>
  )
}