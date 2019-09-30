import Vue from "vue";
import VueI18n from "vue-i18n";
import en from "./en";
import cn from "./cn";
import jp from "./jp";
import { getLocale, saveLocale } from "../utils/localStorage";

Vue.use(VueI18n);

const messages = {
  en,
  cn,
  jp
};

let locale = getLocale();
if (!locale) {
  //默认语言
  locale = "cn";
  saveLocale(locale);
}

const i18n = new VueI18n({
  locale,
  messages
});

export default i18n;
