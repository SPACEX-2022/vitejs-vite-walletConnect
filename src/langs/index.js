import { createI18n } from "vue-i18n";
import en from './en.json'
import zh from './zh-Hant.json'

function getUrlParams(url) {
    const paramsRegex = /[?&]+([^=&]+)=([^&]*)/gi;
    const params = {};
    let match;
    while (match = paramsRegex.exec(url)) {
        params[match[1]] = match[2];
    }
    return params;
}

const i18n = createI18n({
    globalInjection: true,
    legacy: false,
    locale: getUrlParams(window.location.href).locale === 'en' ? 'en' : 'zh',
    messages: {
        en,
        zh,
    },
})

export default i18n