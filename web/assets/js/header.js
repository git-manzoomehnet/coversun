let menuBarOpen = document.querySelector(".menuBar .bar")
let menuBar = document.querySelector(".menuBar")
let megaMenu = document.querySelector(".megaMenu")
let header = document.querySelector("header")
let formHeaderBtn = document.querySelector(".formHeaderBtn")
let closeForm = document.querySelector(".closeForm")
let closeBg = document.querySelector(".closeBg")
let formPop = document.querySelector(".formPop")
let megaMenuRight = document.querySelector(".megaMenu .rightSec")
let megaMenuLeft = document.querySelector(".megaMenu .leftSec")
let headerLogo = document.querySelector("header .lSec img")
let headerMega = "/images/logo-menu.png"
let headerLogoImg = headerLogo.getAttribute("src")
let formFlag = true;
let headerFlag = true
let menuItems = document.querySelectorAll(".menuItems li")
let bgHmenu = document.querySelectorAll(".bgHmenu img")
menuBarOpen.addEventListener("click", function (params) {
    menuBar.classList.toggle("activeMenuBar")
    header.classList.toggle("activeMenuHeader")
    if (headerFlag) {

        megaMenu.classList.remove("translate-x-[100%]")
        megaMenuRight.classList.remove("translate-x-[100%]")
        setTimeout(() => {
            headerLogo.setAttribute("src", headerMega)

            megaMenuLeft.classList.remove("translate-x-[120%]")
        }, 300);


        headerFlag = false
    }
    else {

        megaMenuLeft.classList.add("translate-x-[120%]")
        headerLogo.setAttribute("src", headerLogoImg)
        setTimeout(() => {

            megaMenuRight.classList.add("translate-x-[100%]")
        }, 300);
        setTimeout(() => {

            megaMenu.classList.add("translate-x-[100%]")
        }, 900);

        headerFlag = true

    }

})



menuItems.forEach((element, i) => {
    element.addEventListener("mouseover", function (params) {


        bgHmenu[i]?.classList.add("activeImgHeader")

        menuItems.forEach(item => {
            item.style.opacity = "0.5"
        });
        element.style.opacity = "1"
    })
    element.addEventListener("mouseout", function (params) {

        menuItems.forEach(item => {
            item.style.opacity = "1"
        });
        bgHmenu[i]?.classList.remove("activeImgHeader")
    })


});


formHeaderBtn.addEventListener("click", function (params) {
    if (formFlag) {
        formPop.classList.remove("scale-0")
        formFlag = false
    }

})
closeBg.addEventListener("click", function (params) {

    formPop.classList.add("scale-0")
    formFlag = true


})
closeForm.addEventListener("click", function (params) {

    formPop.classList.add("scale-0")
    formFlag = true


})



const host = {
    debug: !1,
    settings: {
      "connection.web.callcommand": "/",
      "connection.web.trust_login": "https://basispanel.ir/apicms",
      "connection.web.basiscore": "https://basispanel.ir/apicms",
      "connection.web.media": "https://basispanel.ir/apicms",
      "connection.web.userbehavior": "https://basispanel.ir/apicms",
      "default.dbsource.verb": "post",
      "default.call.verb": "get",
      "default.viewCommand.groupColumn": "prpid",
      "default.dmnid": "4945",
      "default.binding.regex": "\\{##([^#]*)##\\}",
    },
  };
  
  let captchaInput;
  let captchaContainerclass;
  
  let loaderContainer = document.querySelector(".loaderContainer");
  let formBtn = document.querySelector(".formBtn");
  let loaderForm = document.querySelector(".loaderForm");
  formBtn.addEventListener("click", function (params) {
    // formBtn.querySelector("span").style.display = "none";
    loaderForm.style.display = "block";
    console.log(captchaInput.value);
    setTimeout(() => {
        let allertData = document.querySelectorAll("[data-bc-validation-part] li")
        console.log(allertData, allertData);

        allertData.forEach(element => {
            let prevInput = element.parentElement.previousElementSibling
            if (prevInput?.value == "") {
                prevInput.classList.add("errorPlaceholder");
                prevInput.setAttribute("placeholder", "پر کردن این فیلد الزامی است");
            }
            
            setTimeout(() => {
                prevInput.setAttribute("placeholder", "");
                
                prevInput.classList.remove("errorPlaceholder");
            }, 3000);
        })
    }, 100);
    if (captchaInput.value == "") {
      captchaInput.setAttribute("placeholder", "پر کردن این فیلد الزامی است");
      captchaInput.classList.add("errorPlaceholder");
      setTimeout(() => {
        captchaContainerclass.style.border = "none";
        captchaInput.setAttribute("placeholder", "کد  امنیتی را وارد نمایید");
        captchaInput.classList.remove("errorPlaceholder");
      }, 3000);
    }
  });
  function onSource1(args) {
    console.log("onSource");
    const captcha = document.querySelector(
      ".homeForm1 #requestBox input[name='captcha']"
    ).value;
    const captchaid = document.querySelector(
      ".homeForm1 #requestBox input[name='captchaid']"
    ).value;
    const stringJson = JSON.stringify(args.source?.rows[0]);
    console.log("stringJson", stringJson);
    $bc.setSource("edit.object1", {
      value: stringJson,
      captcha: captcha,
      captchaid: captchaid,
    });
  }
  
  let responsMsg = document.querySelector(".responsMsg1");
  let responsMsgIn = document.querySelector(".responsMsg1 span");
  async function OnProcessedEditObject1(args) {
    console.log("OnProcessedEditObject1");
    const response = args.response;
    const json = await response.json();
    console.log(json);
  
    if (json.errorid == 6) {
      console.log(json);
      responsMsg.style.display = "block";
      responsMsgIn.innerHTML = "درخواست شما با موفقیت ثبت گردید";
      responsMsgIn.style.color = "#1A6902";
      document.querySelector("form").reset();
      let questions = document.querySelectorAll(
        ".homeForm1 div[data-bc-question]"
      );
      setTimeout(() => {
        responsMsg.style.display = "none";
        formBtn.querySelector("span").style.display = "flex";
        loaderForm.style.display = "none";
      }, 2000);
    }
    if (json.errorid == 4) {
      console.log(json);
  
      responsMsgIn.innerHTML = "مشکلی پیش آمده، لطفا مجدد تلاش فرمایید.";
  
      responsMsg.style.display = "block";
      responsMsgIn.style.color = "#FF2727";
      document.querySelector("form").reset();
  
      setTimeout(() => {
        formBtn.querySelector("span").style.display = "flex";
        loaderForm.style.display = "none";
        responsMsg.style.display = "block";
      }, 2000);
    }
    if (json.errorid == 15 && captchaInput.value != "") {
      console.log(json);
  
      responsMsgIn.innerHTML = "لطفا کپچا را به درستی وارد کنید.";
  
      setTimeout(() => {
        formBtn.querySelector("span").style.display = "flex";
        loaderForm.style.display = "none";
        responsMsg.style.display = "block";
      }, 2000);
    }
  }
  
  function renderFn1(params) {
  
    
    document.querySelector(".qclass8").style.display = "flex";
    captchaInput = document.querySelector(".captchaContainerclass .codeinputm");
    captchaContainerclass = document.querySelector(".captchaContainerclass");
    loaderContainer.style.display = "none";
    console.log(loaderContainer,'loaderContainer');
    let questions = document.querySelectorAll(".homeForm1 div[data-bc-question]");
    questions.forEach((element) => {
      element.classList.add("afterStar");
  
      let title = element.querySelector(".homeForm1 [data-bc-question-title]");
      let qInput = element.querySelector(".homeForm1 input");
      let qTxtArea = element.querySelector(".homeForm1 textarea");
      if (title) {
        title = element.querySelector(
          ".homeForm1 [data-bc-question-title]"
        ).innerHTML;
        if (qInput) {
          qInput.setAttribute("placeholder", title);
          qInput.setAttribute("aria-label", title);
        } else if (qTxtArea) {
          qTxtArea.setAttribute("placeholder", title);
          qTxtArea.setAttribute("aria-label", title);
        }
      }
    });
  }
  
  function renderEditobject(params) {
    loaderContainer.style.display = "none";
  }
  