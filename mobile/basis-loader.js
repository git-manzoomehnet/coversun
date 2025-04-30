(function () {
    window.host = {
      settings: {
        "connection.web.trust_login": "https://basispanel.ir/apicms",
        "connection.web.basiscore": "https://basispanel.ir/apicms",
        "connection.web.media": "https://basispanel.ir/apicms",
        "connection.web.userbehavior": "https://basispanel.ir/apicms",
        "default.dbsource.verb": "post",
        "default.call.verb": "get",
        "default.viewCommand.groupColumn": "prpid",
        "default.dmnid": "4947",
        "default.binding.regex": "\\{##([^#]*)##\\}",
      },
    };
  
    document.addEventListener('DOMContentLoaded', () => {
      const CMS_CDN_URL = window.host.settings['cms.cms.cdn'];
      document.querySelectorAll('*').forEach(element => {
          if (element.innerHTML.includes('[##cms.cms.cdn##]')) {
              element.innerHTML = element.innerHTML.replace(
                  /\[##cms.cms.cdn##\]/g,
                  CMS_CDN_URL
              );
          }
      });
      document.querySelectorAll('[data-cms-cdn]').forEach(element => {
          if (element.src) {
              element.src = element.src.replace('[##cms.cms.cdn##]', CMS_CDN_URL);
          }
          if (element.href) {
              element.href = element.href.replace('[##cms.cms.cdn##]', CMS_CDN_URL);
          }
      });
  });

  const basiscoreScript = document.createElement('script');
  basiscoreScript.src = "https://basispanel.ir/_js/basiscore-2.30.1.min.js";
  basiscoreScript.async = true;
  document.head.appendChild(basiscoreScript);

  const alasqlScript = document.createElement('script');
  alasqlScript.src = "https://cdn.basiscore.net/basispanel.ir/_js/alasql.min.js";
  alasqlScript.async = true;
  document.head.appendChild(alasqlScript);
  })();
  