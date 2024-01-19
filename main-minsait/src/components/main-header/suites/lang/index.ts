import es from './locale/es'
import en from './locale/en'

interface Language {
  product: string;
  module: string;
}


interface Message {
  es: Language;
  en: Language
}

const messages: Message = {
  es,
  en
}

const i18n = {
  messages
}

export default i18n