import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import I18NextHttpBackend from "i18next-http-backend";

i18next
  .use(I18NextHttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: "he",
    lng: "he",
    interpolation: { escapeValue: false },
    backend:{
        loadPath: `http://localhost:8200/i18n/{{lng}}.json`
    }
  });

export default i18next;
