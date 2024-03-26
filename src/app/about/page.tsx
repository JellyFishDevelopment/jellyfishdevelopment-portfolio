"use client";
import Image from "next/image";
import logo from "../../../public/jellyfishlogo.svg";
import { Texture } from "@/components/Texture";
import Leticia from "../../../public/leticia.jpg";
import Mohan from "../../../public/mohan.jpg";
import Luiz from "../../../public/luiz.png";
import Felipe from "../../../public/felipe.jpg";
import logoLinkedin from "../../../public/svg-tec/linkedin_logo.svg";
import logoGithub from "../../../public/svg-tec/githublogo.svg";
import React from "react";

export default function Page() {
  return (
    <main className="">
      {/* Screen 1 - Title */}
      <section className="flex flex-col items-center font-extrabold pt-10">
        
        <a href="/">
          <Image 
            className="ml-10"
            src={logo}
            width="80"
            alt="Logo jellyfish"
          />
        </a>

        <h1 className="header-title text-8xl font-extrabold text-center pt-10">
          Quem<span className="Fish">Somos</span>
        </h1>

        <p className="text-neutral-400 pt-5 font-normal">
          o time por trás da excelência e inovação que <strong>acontece</strong>{" "}
          💡
        </p>

        <div className="p-11">
          <label className="text-white text-2xl font-extrabold rounded-3xl border-2 px-20 py-5 select-none">
            Idealizadores
          </label>
        </div>
      </section>

      {/* Screen 2 - Cards */}
      <div className="pb-16 flex flex-row justify-center gap-4">
        {/* Leticia */}
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow card-idealizadores transition hover:-translate-y-2 hover:shadow-xl">
          <div className="flex flex-col items-center pb-11 pt-10 ">
            <Image
              className="mb-3 rounded-full shadow-lg"
              src={Leticia}
              height={200}
              width={200}
              alt="sds wiki project"
            />

            <h5 className="mb-1 text-xl font-medium text-white">
              Leticia Boza
            </h5>
            <span className="text-sm text-center text-gray-300">
              QA, Product Owner, Front-End Developer
            </span>
            <div className="flex">
              <a
                href="https://www.linkedin.com/in/leticiaboza/"
                target="_blank"
              >
                <Image src={logoLinkedin} alt="Logo linkedin" />
              </a>

              <a href="https://github.com/LeticiaBoza" target="_blank">
                <Image src={logoGithub} alt="Logo github" />
              </a>
            </div>
          </div>
        </div>

        {/* Mohan */}
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow card-idealizadores transition hover:-translate-y-1 hover:shadow-xl">
          <div className="flex flex-col items-center pb-10 pt-10">
            <Image
              className="mb-3 rounded-full shadow-lg"
              src={Mohan}
              height={200}
              width={200}
              alt="sds wiki project"
            />

            <h5 className="mb-1 text-xl font-mediumtext-white">
              Mohan Elias
            </h5>
            <span className="text-sm text-gray-300">
              Front-end Developer
            </span>
            <div className="flex">
              <a href="https://www.linkedin.com/in/mohanelias/" target="_blank">
                <Image src={logoLinkedin} alt="Logo linkedin" />
              </a>

              <a href="https://github.com/mdxv" target="_blank">
                <Image src={logoGithub} alt="Logo github" />
              </a>
            </div>
          </div>
        </div>

        {/* Luiz */}

        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow card-idealizadores transition hover:-translate-y-1 hover:shadow-xl">
          <div className="flex flex-col items-center pb-10 pt-10">
            <Image
              className="mb-3 rounded-full shadow-lg"
              src={Luiz}
              height={200}
              width={200}
              alt="sds wiki project"
            />

            <h5 className="mb-1 text-xl font-medium text-white">
              Luiz Mateus
            </h5>
            <span className="text-sm text-gray-300">
              DevOps, Infra, Back-End Developer
            </span>
            <div className="flex">
              <a
                href="https://www.linkedin.com/in/luiz-mateus/"
                target="_blank"
              >
                <Image src={logoLinkedin} alt="Logo linkedin" />
              </a>

              <a href="https://github.com/LuizMateuss" target="_blank">
                <Image src={logoGithub} alt="Logo github" />
              </a>
            </div>
          </div>
        </div>

        {/* Felipe */}

        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow card-idealizadores transition hover:-translate-y-1 hover:shadow-xl">
          <div className="flex flex-col items-center pb-10 pt-10">
            <Image
              className="mb-3 rounded-full shadow-lg"
              src={Felipe}
              height={200}
              width={200}
              alt="sds wiki project"
            />

            <h5 className="mb-1 text-xl font-medium text-white">
              Felipe Souza
            </h5>
            <span className="text-sm text-gray-300">
              Back-End Developer, Data Base
            </span>
            <div className="flex">
              <a
                href="https://www.linkedin.com/in/felipe-r-souza-444b17205/"
                target="_blank"
              >
                <Image src={logoLinkedin} alt="Logo linkedin" />
              </a>

              <a href="https://github.com/felipe-souza17" target="_blank">
                <Image src={logoGithub} alt="Logo github" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Texture />
    </main>
  );
}
