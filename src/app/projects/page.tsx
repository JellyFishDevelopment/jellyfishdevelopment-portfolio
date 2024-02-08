import Image from "next/image";
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
        
      <svg xmlns="http://www.w3.org/2000/svg" width="100" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="100" preserveAspectRatio="xMidYMid meet" version="1.0"><path fill="#ffffff" d="M 152.847656 43.097656 C 142.019531 45.9375 125.691406 53.925781 114.6875 61.558594 C 104.035156 68.835938 86.820312 87.472656 79.542969 99.71875 C 64.457031 124.746094 58.953125 158.46875 68.007812 171.78125 C 73.863281 180.476562 82.027344 185.269531 101.550781 191.304688 C 114.152344 195.207031 118.945312 197.515625 118.945312 199.644531 C 118.945312 201.066406 114.6875 215.621094 109.363281 231.773438 C 97.648438 267.449219 94.984375 281.113281 96.40625 300.105469 C 97.648438 315.191406 102.617188 334.007812 107.410156 341.285156 C 110.605469 346.253906 118.058594 347.140625 119.65625 342.703125 C 120.1875 341.105469 118.414062 332.410156 115.394531 323.179688 C 112.554688 314.128906 109.714844 303.480469 109.007812 299.75 C 107.410156 289.8125 111.847656 269.753906 123.917969 232.660156 C 133.855469 201.777344 134.210938 200.886719 139.179688 200.355469 C 147.699219 199.289062 156.21875 201.597656 156.21875 204.792969 C 156.21875 206.390625 152.667969 218.460938 148.410156 231.773438 C 137.582031 264.785156 134.210938 282.535156 135.453125 300.105469 C 136.871094 322.824219 145.746094 343.945312 154.265625 345.1875 C 160.300781 346.078125 160.65625 341.105469 155.15625 326.375 C 150.71875 314.128906 150.183594 310.402344 150.183594 291.410156 L 150.007812 270.109375 L 161.542969 236.386719 L 173.082031 202.664062 L 180.359375 202.128906 C 184.261719 201.777344 189.589844 202.484375 192.074219 203.375 L 196.6875 205.148438 L 186.75 234.96875 L 176.632812 264.785156 L 176.632812 291.410156 C 176.632812 312.53125 177.339844 319.984375 179.824219 327.261719 C 183.730469 338.621094 189.054688 345.542969 193.671875 345.542969 C 199.351562 345.542969 199.527344 340.574219 194.378906 325.308594 C 186.925781 303.300781 186.75 288.746094 193.136719 263.898438 C 196.15625 252.714844 201.65625 234.789062 205.386719 223.960938 C 213.015625 202.308594 215.148438 200 228.636719 200 C 238.042969 200 238.042969 201.066406 229.703125 224.140625 C 211.773438 274.015625 210 306.851562 223.667969 337.914062 C 226.328125 344.125 227.925781 345.542969 231.652344 345.542969 C 234.140625 345.542969 236.625 344.300781 237.332031 342.703125 C 237.867188 341.285156 236.089844 332.765625 233.429688 324.066406 C 224.023438 293.363281 224.910156 285.375 244.078125 225.738281 L 253.664062 195.386719 L 265.910156 192.191406 C 281.707031 188.109375 298.035156 179.058594 303.183594 171.601562 C 310.816406 160.242188 306.554688 131.132812 293.421875 104.332031 C 283.660156 84.453125 261.648438 62.800781 241.414062 53.039062 C 233.074219 48.953125 221.535156 44.339844 215.679688 42.921875 C 202.011719 39.546875 165.980469 39.546875 152.847656 43.097656 Z M 181.246094 139.652344 C 194.203125 143.203125 200.59375 155.449219 200.59375 176.570312 C 200.59375 191.660156 198.640625 195.03125 191.71875 192.722656 C 184.617188 190.0625 177.875 181.71875 176.632812 173.730469 C 176.097656 170.183594 174.144531 161.308594 172.195312 154.03125 C 167.757812 136.992188 168.289062 136.105469 181.246094 139.652344 Z M 229.167969 145.511719 C 235.382812 149.0625 239.820312 160.421875 240.882812 174.441406 L 241.949219 187.578125 L 233.785156 187.578125 C 223.132812 187.578125 217.988281 181.71875 214.96875 166.101562 C 213.726562 159.886719 211.597656 152.078125 210.175781 148.707031 C 208.226562 144.269531 208.226562 142.316406 209.644531 141.429688 C 211.953125 139.832031 224.199219 142.316406 229.167969 145.511719 Z M 153.558594 148.527344 C 158.703125 153.320312 161.542969 164.503906 161.542969 179.234375 C 161.542969 192.722656 159.945312 193.964844 149.476562 189.351562 C 140.957031 185.445312 139.890625 183.492188 134.921875 162.015625 C 132.082031 149.414062 131.726562 145.867188 133.5 144.625 C 137.226562 142.136719 149.121094 144.445312 153.558594 148.527344 Z M 265.554688 154.207031 C 276.027344 161.128906 277.800781 167.699219 271.410156 174.441406 C 267.152344 179.058594 260.230469 180.121094 257.921875 176.394531 C 255.792969 173.199219 250.644531 150.480469 251.710938 149.414062 C 253.664062 147.464844 257.390625 148.707031 265.554688 154.207031 Z M 117.882812 159.355469 C 121.785156 162.90625 124.269531 182.785156 121.078125 184.738281 C 118.238281 186.332031 97.113281 174.621094 95.695312 170.539062 C 93.03125 162.726562 102.972656 152.609375 110.960938 154.917969 C 112.910156 155.449219 116.105469 157.402344 117.882812 159.355469 Z M 117.882812 159.355469 " fill-opacity="1" fill-rule="nonzero"/></svg>

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
      {/* screen 4 - footer */}
      <section className="border-t color-border-footer">
        <FooterMain />
      </section>

      <Texture />
    </>
  );
}