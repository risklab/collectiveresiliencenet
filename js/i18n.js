
function changeLang(lang) {
  console.log(lang);
  document.getElementById('navbarDropdown').innerHTML = lang
  i18next.changeLanguage(lang, () => {
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
        en: {
          translation: {
            intro: {
              title: 'Building Resilience Collectively',
              subTitle: 'Some subtitle',
              aboutbtn: 'More about us'
            }
          }
        },
        th: {
          translation: {
            intro: {
              title: 'Thai text',
              subTitle: 'thai subtitle',
              aboutbtn: 'เกี่ยวกับเรา'
            }
          }
        }
      }
    }, (err, t) => {
      if (err) return console.error(err);
      // for options see
      // https://github.com/i18next/jquery-i18next#initialize-the-plugin
      jqueryI18next.init(i18next, $, { useOptionsAttr: true });

      rerender();
    });
});
