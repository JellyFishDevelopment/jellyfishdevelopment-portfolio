import Image from "next/image";
import logo from "../../../../public/jellyfishlogo.svg";
import { Texture } from "@/components/texture";
import { ContactForm } from "@/components/contact-form";
import { Locale } from "@/config/i18n.config";
import { getDictionaryServerOnly } from "@/dictionaries/default-dictionary-server-only";

export default function Page({ params }: { params: { lang: Locale } }) {
  const dict = getDictionaryServerOnly(params.lang);

  return (
    <>
      {/* screen 1 - title */}
      <section className="flex flex-col items-center font-extrabold pt-10">
        <a href="#">
          <Image src={logo} width="80" alt="logo" />
        </a>

        <h1 className="header-title max-[425px]:text-4xl text-6xl font-extrabold text-center pt-10">
          {dict.site.common.contact}
          <span className="Fish select-none">.</span>
        </h1>

        <p
          className="text-neutral-400 pt-5 max-[425px]:text-sm font-normal text-center"
          dangerouslySetInnerHTML={{
            __html: dict.site.page.contact.description,
          }}
        ></p>
      </section>

      <div className="flex justify-center py-4 bg-gradient-to-t from-black to-transparent">
        <section className="card-idealizadores lg:px-10 px-3 py-5 border rounded-3xl max-[425px]:w-3/4 w-4/6">
          <ContactForm params={{ lang: params.lang }} />
        </section>
      </div>
      <Texture />
    </>
  );
}
