import Image from "next/image";
import { Texture } from "@/components/textures";
import sdsWikiProject from "../../../public/sds-wiki.png";
import jmSiteProject from "../../../public/jm-eletrica.png";
import lucianaProject from "../../../public/luciana-advogada.png";
import astrologo from "../../../public/svg-tec/astrologo.svg";
import tslogo from "../../../public/svg-tec/tslogo.svg";
import twlogo from "../../../public/svg-tec/twlogo.svg";
import mdlogo from "../../../public/svg-tec/markdownlogo.svg";
import reactlogo from "../../../public/svg-tec/reactlogo.svg";
import phplogo from "../../../public/svg-tec/phplogo.svg";
import vitelogo from "../../../public/svg-tec/vitelogo.svg";
import jslogo from "../../../public/svg-tec/jslogo.svg";
import logo from "../../../public/jellyfishlogo.svg";


export default function Page() {
  return (
    <>
      {/* screen 1 - title */}
      <section className="flex flex-col items-center font-extrabold pt-16">

      <a href="#">
        <Image 
          src={logo}
          width="80"
          alt="logo"
        />
      </a>

        <h1 className="header-title text-6xl font-extrabold text-center pt-16">
          <span className="Fish select-none">Projects</span>.
        </h1>
        <div className="flex grid-cols-3 pt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path fill="#ffffff" d="m14 17l-5-5l5-5z"></path>
          </svg>
          <h1 className="header-title text-3xl font-extrabold text-center">
            Front-end/Web
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path fill="#ffffff" d="M10 17V7l5 5z"></path>
          </svg>
        </div>

        {/* Projects */}
        <section className="py-10 grid justify-items-center">
          <div>
            <Image
              className="rounded-lg border "
              src={sdsWikiProject}
              height={500}
              width={500}
              alt="sds wiki project"
            />
          </div>
          <div className="grid grid-cols-5 py-5 gap-5 justify-items-center">
            <div className="transition ease-in-out duration-500 react-logo hover:-translate-y-2">
              <Image src={astrologo} width={40} height={40} alt="astro logo" />
            </div>

            <div className="transition ease-in-out duration-500 react-logo hover:-translate-y-2">
              <Image
                src={reactlogo}
                width={40}
                height={40}
                alt="markdown logo"
              />
            </div>

            <div className="transition ease-in-out duration-500 react-logo hover:-translate-y-2">
              <Image src={tslogo} width={40} height={40} alt="TS logo" />
            </div>

            <div className="transition ease-in-out duration-500 react-logo hover:-translate-y-2">
              <Image src={twlogo} width={40} height={40} alt="TailWind logo" />
            </div>

            <div className="transition ease-in-out duration-500 react-logo hover:-translate-y-2">
              <Image src={mdlogo} width={40} height={40} alt="markdown logo" />
            </div>
          </div>

          <h1 className="header-title text-3xl font-extrabold text-center">
            Site - SDS Wiki
          </h1>
          <h1 className="font-normal w-auto text-slate-200">
            Site de busca e documentação sobre Software Defined Storage baseado
            em Astro, utilizando arquivos em markdown.
          </h1>
        </section>

        {/* Projects */}
        <section className="py-10 grid justify-items-center">
          <div>
            <Image
              className="rounded-lg border "
              src={jmSiteProject}
              height={500}
              width={500}
              alt="sds wiki project"
            />
          </div>
          <div className="grid grid-cols-5 py-5 gap-5 justify-items-center">
            <div className="transition ease-in-out duration-500 react-logo hover:-translate-y-2">
              <Image src={reactlogo} width={40} height={40} alt="astro logo" />
            </div>

            <div className="transition ease-in-out duration-500 react-logo hover:-translate-y-2">
              <Image src={tslogo} width={40} height={40} alt="markdown logo" />
            </div>

            <div className="transition ease-in-out duration-500 react-logo hover:-translate-y-2">
              <Image src={jslogo} width={40} height={40} alt="TS logo" />
            </div>

            <div className="transition ease-in-out duration-500 react-logo hover:-translate-y-2">
              <Image src={twlogo} width={40} height={40} alt="TailWind logo" />
            </div>

            <div className="transition ease-in-out duration-500 react-logo hover:-translate-y-2">
              <Image
                src={vitelogo}
                width={40}
                height={40}
                alt="markdown logo"
              />
            </div>
          </div>

          <h1 className="header-title text-3xl font-extrabold text-center">
            Site - JM Engenharia Elétrica
          </h1>
          <h1 className="font-normal w-auto text-slate-200">
            Site institucional sobre elétrica e soluções em energia, usando API
            de envio de e-mail, baseado em React.
          </h1>
        </section>

        {/* Projects */}
        <section className="py-10 grid justify-items-center">
          <div>
            <Image
              className="rounded-lg border "
              src={lucianaProject}
              height={500}
              width={500}
              alt="sds wiki project"
            />
          </div>
          <div className="grid grid-cols-4 py-5 gap-5 justify-items-center">
            <div className="transition ease-in-out duration-500 react-logo hover:-translate-y-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <g fill="#ffffff" clip-path="url(#akarIconsHtmlFill0)">
                    <path d="M5.08 0h1.082v1.069h.99V0h1.082v3.236H7.152V2.153h-.99v1.083H5.081zm4.576 1.073h-.952V0h2.987v1.073h-.953v2.163H9.656zM12.165 0h1.128l.694 1.137L14.68 0h1.128v3.236h-1.077V1.632l-.744 1.151h-.019l-.745-1.15v1.603h-1.058zm4.181 0h1.083v2.167h1.52v1.07h-2.603z"></path>
                    <path
                      fill-rule="evenodd"
                      d="M5.046 22.072L3 4.717h18L18.953 22.07L11.99 24zm4.137-9.5l-.194-2.18h8.145l.19-2.128H6.664l.574 6.437h7.377l-.247 2.76l-2.374.642h-.002l-2.37-.64l-.152-1.697H7.332l.298 3.342l4.36 1.21l4.367-1.21l.532-5.964l.052-.571z"
                      clip-rule="evenodd"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="akarIconsHtmlFill0">
                      <path fill="#fff" d="M0 0h24v24H0z"></path>
                    </clipPath>
                  </defs>
                </g>
              </svg>
            </div>

            <div className="transition ease-in-out duration-500 react-logo hover:-translate-y-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ffffff"
                  d="M7.502 0h2.578v1.078h-1.5v1.078h1.5v1.078H7.502zm3.093 0h2.579v.938h-1.5v.187h1.5v2.156h-2.579v-.984h1.5v-.188h-1.5zm3.095 0h2.577v.938h-1.5v.187h1.5v2.156H13.69v-.984h1.5v-.188h-1.5z"
                ></path>
                <path
                  fill="#ffffff"
                  fill-rule="evenodd"
                  d="m11.991 24l-6.944-1.928L3 4.717h18L18.954 22.07zM7.047 12.573l.191 2.128h7.377l-.247 2.76l-2.374.642h-.002l-2.37-.64l-.152-1.697H7.333l.298 3.342l4.36 1.21l4.367-1.21l.532-5.964l.052-.571l.384-4.309H6.664l.194 2.129h8.136l-.194 2.18z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="transition ease-in-out duration-500 react-logo hover:-translate-y-2">
              <Image src={jslogo} width={40} height={40} alt="TS logo" />
            </div>

            <div className="transition ease-in-out duration-500 react-logo hover:-translate-y-2">
              <Image src={phplogo} width={40} height={40} alt="TailWind logo" />
            </div>
          </div>

          <h1 className="header-title text-3xl font-extrabold text-center">
            Site - Luciana Advocacia e Consultoria
          </h1>
          <h1 className="font-normal w-auto text-slate-200">
            Site estático dedicado à Consultoria Jurídica, projetado para
            fornecer informações sobre os serviços jurídicos oferecidos.
          </h1>
        </section>
      </section>

      <Texture />
    </>
  );
}