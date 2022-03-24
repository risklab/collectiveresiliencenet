// locales_en and locales_th comes from translation.js files in locales folder.
// these need to be declared in index as scripts

var lngs = {
  EN: {
    nativeName: 'English',
    locale: this.locales_en
  },
  TH: {
    nativeName: 'Thai',
    locale: this.locales_th
  }
};



function changeLang(currentLng) {
  console.log("changed lang to: " + lngs[currentLng].nativeName);
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
        EN: {
          translation: {
            intro: {
              title: 'Building Resilience Collectively',
              subTitle: 'Some subtitle',
              aboutbtn: 'About us'
            }
          }
        },
        TH: {
          translation: {
            intro: {
              title: 'Thai text',
              subTitle: 'thai subtitle',
              aboutbtn: 'About us'
            }
          }
        }
      }
    }, (err, t) => {
      if (err) return console.error(err);

      // for options see
      // https://github.com/i18next/jquery-i18next#initialize-the-plugin
      jqueryI18next.init(i18next, $, { useOptionsAttr: true });

      // // fill language switcher
      // Object.keys(lngs).map((lng) => {
      //   const opt = new Option(lngs[lng].nativeName, lng);
      //   if (lng === i18next.resolvedLanguage) {
      //     opt.setAttribute("selected", "selected");
      //   }
      //   $('#languageSwitcher').append(opt);
      // });
      // $('#languageSwitcher').change((a, b, c) => {
      //   const chosenLng = $(this).find("option:selected").attr('value');
      //   i18next.changeLanguage(chosenLng, () => {
      //     rerender();
      //   });
      // });

      rerender();
    });
});
