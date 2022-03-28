// locales_en and locales_th comes from translation.js files in locales folder.
// these need to be declared in index as scripts

var Lngs = {
  en: {
    nativeName: 'English',
    locale: this.locales_en
  },
  th: {
    nativeName: 'Thai',
    locale: this.locales_th
  }
};



function changeLang(currentLng) {
  console.log("changed lang to: " + Lngs[currentLng].nativeName);
  document.getElementById('navbarDropdown').innerHTML = currentLng;
  i18next.changeLanguage(currentLng, () => {
      rerender();
    });
}


const rerender = () => {
  // start localizing, details:
  // https://github.com/i18next/jquery-i18next#usage-of-selector-function
  $('body').localize();
}

$(function () {
  console.log('loading locales: ' + Lngs.EN.nativeName);
  // use plugins and options as needed, for options, detail see
  // https://www.i18next.com
  i18next
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(i18nextBrowserLanguageDetector)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
      debug: true,
      fallbackLng: 'en',
      resources: {
        // ENGLISH
        en: Lngs.EN.locale,
        th: Lngs.TH.locale
      }
    }, (err, t) => {
      if (err) return console.error(err);

      // for options see
      // https://github.com/i18next/jquery-i18next#initialize-the-plugin
      jqueryI18next.init(i18next, $, { useOptionsAttr: true });

      rerender();
    });
});
