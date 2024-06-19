import { Locale } from "@/config/i18n.config";
import { getDictionaryServerOnly } from "@/dictionaries/default-dictionary-server-only";
import NavBar from "./navbar";

export default function Nav({ params }: { params: { lang: Locale } }) {
  const dict = getDictionaryServerOnly(params.lang);

  return <NavBar dict={dict} lang={params.lang} />;
}
