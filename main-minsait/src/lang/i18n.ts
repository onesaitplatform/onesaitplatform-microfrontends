import { createI18n } from "vue-i18n";
import esLocale from "./locale/es";
import enLocale from "./locale/en";

const messages = {
  es: esLocale,
  en: enLocale,
};

const i18n = createI18n({
  locale: "es" as string, // set locale
  fallbackLocale: "es" as string, // set fallback locale,
  legacy: false,
  messages, // set locale messages
});

export default i18n;
