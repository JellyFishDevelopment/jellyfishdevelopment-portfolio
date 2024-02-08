import logo from "../../public/jellyfishlogo.svg";
import Image from "next/image";
import instagramLogo from "../../public/svg-tec/instagram_logo.svg";
import linkedinLogo from "../../public/svg-tec/linkedin_logo.svg";
import whatsappLogo from "../../public/svg-tec/whatsapplogo.svg";

export function FooterMain() {
  return (
    <div className="pl-56 pr-56 grid max-[768px]:grid-cols-1 max-[768px]:content-center	grid-cols-3 mt-10">
      <div className="min-[768px]:mr-40 max-[768px]:mx-auto ">

        <a href="#">
          <Image 
              className="ml-10 mb-10"
              src={logo}
              width="100"
              alt="sds wiki project"
            />
        </a>

      </div>

      <div className="max-[768px]:my-8">
        <h1></h1>
        <ul className="font-normal text-center grid">
          <li>
            {" "}
            <a
              href="/"
              className="hover:scale-105 ease-in-out duration-300 inline-block"
            >
              Inicio
            </a>
          </li>
          <li>
            {" "}
            <a
              href="/projects"
              className="hover:scale-105 ease-in-out duration-300 inline-block mt-2"
            >
              Projetos
            </a>
          </li>
          <li>
            {" "}
            <a
              href="/contact"
              className="hover:scale-105 ease-in-out duration-300 inline-block mt-2"
            >
              Contato
            </a>
          </li>
        </ul>
      </div>

      <div className="pr-50 flex-row min-[768px]:ml-20 max-[768px]:my-8">
        <div className="flex gap-4 justify-center">
          <a
            href="https://www.instagram.com/jellyfishdevelopment/"
            target="_blank"
          >
            <Image
              className="hover:scale-105 ease-in-out duration-300"
              src={instagramLogo}
              width={40}
              height={40}
              alt="instagram logo"
            />
          </a>
          <a href="https://www.linkedin.com/in/leticiaboza/" target="_blank">
            <Image
              className="hover:scale-105 ease-in-out duration-300"
              src={linkedinLogo}
              width={40}
              height={40}
              alt="linkedin logo"
            />
          </a>

          <a href="https://wa.me/5513991063173" target="_blank">
            <Image
              className="hover:scale-105 ease-in-out duration-300"
              src={whatsappLogo}
              width={40}
              height={40}
              alt="whatsapp logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
