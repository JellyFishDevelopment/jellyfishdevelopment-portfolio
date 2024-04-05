import logo from "../../public/jellyfishlogo.svg";
import Image from "next/image";
import instagramLogo from "../../public/svg-tec/instagram_logo.svg";
import linkedinLogo from "../../public/svg-tec/linkedin_logo.svg";
import whatsappLogo from "../../public/svg-tec/whatsapplogo.svg";

export function Footer() {
  return (
    <div className="pl-56 pr-56 py-10 grid max-[768px]:grid-cols-1 max-[768px]:content-center">
      <div className="flex flex-col-2 justify-between">

        <a href="#">
          <Image
            className="ml-10 mb-10"
            src={logo}
            width="100"
            alt="sds wiki project"
          />
        </a>
        <div className="flex gap-4 place-items-center">
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

      <div className="ml-12 flex flex-col gap-4 w-full">

        <div className="flex flex-row gap-10">
          <a
            href="/"
            className="hover:text-muted"
          >
            Início
          </a>
          <a
            href="/projects"
            className="hover:text-muted"
          >
            Projetos
          </a>
          <a
            href="/about"
            className="hover:text-muted"
          >
            Quem Somos
          </a>
          <a
            href="/contact"
            className="hover:text-muted"
          >
            Contato
          </a>
        </div>
        <div className="text-sm">
          <p>© 2024 Jellyfish Development. All Rights Reserved</p>
        </div>
      </div>
    </div>

  );
}
