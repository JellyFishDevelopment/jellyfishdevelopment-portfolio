import Image from "next/image";
import logo from "../../../public/Logo_Polvo.svg";
import { Texture } from "@/components/Texture";
import sdsWikiProject from "../../../public/sds-wiki.png";
import { FooterMain } from "@/components/FooterMain";
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

export default function Page() {
  return (
    <>
      {/* screen 1 - title */}
      <section className="flex flex-col items-center font-extrabold pt-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          zoomAndPan="magnify"
          viewBox="0 0 375 374.999991"
          preserveAspectRatio="xMidYMid meet"
          version="1.0"
        >
          <defs>
            <clipPath id="e62f4d81d7">
              <path
                d="M 73.304688 122.160156 L 301.691406 122.160156 L 301.691406 356.613281 L 73.304688 356.613281 Z M 73.304688 122.160156 "
                clip-rule="nonzero"
              />
            </clipPath>
          </defs>
          <g clip-path="url(#e62f4d81d7)">
            <a href="/">
              <path
                fill="#ffffff"
                d="M 96.425781 288.050781 C 90.867188 239.042969 158.914062 225.574219 153.441406 172.839844 C 148.59375 193.914062 127.097656 203.214844 108.820312 214.273438 C 103.144531 217.707031 97.421875 221.523438 92.636719 226.148438 C 87.554688 231.058594 83.527344 236.878906 81.75 244.101562 C 78.101562 258.90625 85.546875 274.386719 96.425781 288.050781 Z M 278.566406 288.050781 C 284.125 239.042969 216.078125 225.574219 221.554688 172.839844 C 226.402344 193.914062 247.894531 203.214844 266.175781 214.273438 C 271.847656 217.707031 277.570312 221.523438 282.355469 226.148438 C 287.441406 231.058594 291.464844 236.878906 293.246094 244.101562 C 296.890625 258.90625 289.445312 274.386719 278.566406 288.050781 Z M 186.003906 356.59375 C 160.691406 355.886719 139.121094 336.039062 136.519531 310.84375 C 135.15625 297.609375 138.816406 283.816406 144.441406 270.1875 C 154.441406 245.953125 169.320312 222.195312 167.695312 196.8125 C 157.097656 241.929688 94.839844 248.683594 101.144531 297.207031 C 87.71875 287.023438 77.417969 272.582031 74.296875 257.484375 C 70.972656 241.417969 76.089844 227.09375 88.1875 216.121094 C 97.296875 207.859375 109.058594 202.109375 119.238281 194.695312 C 131.691406 185.625 141.238281 173.84375 139.164062 150.710938 C 138.820312 146.839844 138.804688 144.636719 140.625 141.109375 C 146.109375 130.488281 164.296875 122.617188 186.078125 122.285156 C 187.023438 122.273438 187.96875 122.273438 188.917969 122.285156 C 210.695312 122.617188 228.886719 130.488281 234.367188 141.109375 C 236.191406 144.636719 236.175781 146.839844 235.828125 150.710938 C 233.753906 173.84375 243.304688 185.625 255.753906 194.695312 C 265.933594 202.109375 277.699219 207.859375 286.808594 216.121094 C 298.90625 227.09375 304.019531 241.417969 300.695312 257.484375 C 297.574219 272.582031 287.273438 287.023438 273.851562 297.207031 C 280.152344 248.683594 217.898438 241.929688 207.296875 196.8125 C 205.675781 222.195312 220.550781 245.953125 230.550781 270.1875 C 236.179688 283.816406 239.839844 297.609375 238.472656 310.84375 C 235.875 336.039062 214.300781 355.886719 188.992188 356.59375 C 187.996094 356.621094 187 356.621094 186.003906 356.59375 Z M 187.496094 196.828125 C 186.425781 237.300781 149.261719 274.597656 146.347656 309.945312 C 144.441406 333.03125 163.519531 353.222656 186.054688 354.054688 C 187.015625 354.089844 187.976562 354.089844 188.9375 354.054688 C 211.476562 353.222656 230.550781 333.03125 228.648438 309.945312 C 225.730469 274.597656 188.570312 237.300781 187.496094 196.828125 "
                fill-opacity="1"
                fill-rule="evenodd"
              />{" "}
            </a>
          </g>
          <a href="/">
            <path
              fill="#ffffff"
              d="M 192.167969 101.207031 C 229.480469 102.480469 259.003906 118.925781 259.003906 139.027344 C 259.003906 147.007812 254.347656 154.410156 246.402344 160.515625 C 258.671875 157.605469 268.46875 152.699219 275.144531 145.871094 C 288.574219 132.136719 286.695312 113.324219 280.035156 96.851562 C 274.808594 83.933594 266.300781 71.695312 257.859375 62.761719 C 215.941406 18.394531 159.054688 18.394531 117.136719 62.761719 C 108.695312 71.695312 100.1875 83.933594 94.960938 96.851562 C 88.300781 113.324219 86.421875 132.136719 99.847656 145.871094 C 106.523438 152.699219 116.324219 157.605469 128.59375 160.515625 C 120.648438 154.410156 115.988281 147.007812 115.988281 139.027344 C 115.988281 118.925781 145.511719 102.480469 182.828125 101.207031 C 185.9375 101.097656 189.054688 101.097656 192.167969 101.207031 "
              fill-opacity="1"
              fill-rule="evenodd"
            />
          </a>
        </svg>

        <h1 className="header-title text-6xl font-extrabold text-center pt-16">
          <span className="Fish">Projects</span>.
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
      {/* screen 4 - footer */}
      <section className="border-t color-border-footer">
        <FooterMain />
      </section>

      <Texture />
    </>
  );
}
