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

  const basiscoreScript = document.createElement('script');
  basiscoreScript.src = "https://basispanel.ir/_js/basiscore-2.30.1.min.js";
  basiscoreScript.async = true;
  document.head.appendChild(basiscoreScript);

  document.addEventListener("DOMContentLoaded", () => {
    document.body.innerHTML = document.body.innerHTML.replaceAll("[##cms.cms.cdn##]", "http://J110Xu.UnderTest.ir");
  });
  const alasqlScript = document.createElement('script');
  alasqlScript.src = "https://cdn.basiscore.net/basispanel.ir/_js/alasql.min.js";
  alasqlScript.async = true;
  document.head.appendChild(alasqlScript);
  })();
  