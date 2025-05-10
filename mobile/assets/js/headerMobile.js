const openmenu = document.querySelector('#openmenu');
    const closepopup = document.querySelector('#closepopup');
    const menuBar = document.querySelector('#menuBar');
    const searchPopup = document.querySelector('#searchPopup');
    const opensearch = document.querySelector('#opensearch');

    closepopup.addEventListener('click', () => {
        // First remove the show class to trigger menu items animation
        menuBar.classList.remove('show');
        searchPopup.classList.remove('show');

        // Wait for menu items animation to complete (0.5s) plus a small pause (0.2s)
        setTimeout(() => {
            menuBar.style.transform = 'translateX(100%)';
            menuBar.style.opacity = '0';
            menuBar.style.display = 'none';
        }, 700);
    });

    openmenu.addEventListener('click', () => {
        // Reset menu bar styles before showing
        menuBar.style.transform = '';
        menuBar.style.opacity = '';
        menuBar.style.display = 'flex';
        setTimeout(() => {
            menuBar.classList.add('show');
        }, 50);
    });

    opensearch.addEventListener('click', () => {
        searchPopup.style.display = 'flex';
        setTimeout(() => {
            searchPopup.classList.add('show');
        }, 50);
    });
    const closepopupsearch = document.querySelector('#closepopupsearch');
    closepopupsearch.addEventListener('click', () => {
        searchPopup.classList.remove('show');
        setTimeout(() => {
            searchPopup.style.display = 'none';
        }, 300);
    });    
    const openForm = document.querySelector("#openForm")
    const showForm = document.querySelector("#showForm")
    const closepopupform = document.querySelector("#closepopupform")

    closepopupform.addEventListener("click",()=>{
        showForm.style.display = "none"
        showForm.style.opacity = "0"
    })
    openForm.addEventListener("click",()=>{
        showForm.style.display = "flex"
        showForm.style.opacity = "1"
    })
    const inputSerch = document.querySelector("#inputSerch")
    inputSerch.addEventListener("keydown", (e) => {
        if (e.keyCode == 13 && e.value != '') {
            searchResult(e.target.value)
        }
    })
    const buttonSearch = document.querySelector("#buttonSearch")
    buttonSearch.addEventListener("click", () => {
        if (inputSerch.value != "") {
            searchResult(inputSerch.target.value)
        }
    })
    function searchResult(value) {
        window.location.href = `/search.bc?q=${value}`
    }
        

  document.addEventListener('DOMContentLoaded', function () {
    function smoothScrollTo(targetY, duration = 1000) {
      const startY = window.scrollY;
      const distance = targetY - startY;
      const startTime = performance.now();

      function animation(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress;
        window.scrollTo(0, startY + distance * ease);
        if (progress < 1) requestAnimationFrame(animation);
      }

      requestAnimationFrame(animation);
    }

    const scrollBtn = document.getElementById('scrollBtn');

if (scrollBtn) {
  scrollBtn.addEventListener('click', function () {
    const target = document.getElementById('targetSection');
    if (!target) return;

    const targetY = target.getBoundingClientRect().top + window.scrollY;
    smoothScrollTo(targetY, 1500);
  });
}

console.log("OK");
  });


  document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('headersitem');
    let lastScrollTop = 0;
    let ticking = false;
    let isScrollingUp = false; 
    
    
    function checkInitialScroll() {
      const initialScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      
      if (initialScrollTop > 10) {
        header.classList.add('header--scrolled');
      }
      
      
      lastScrollTop = initialScrollTop;
    }
    
    function handleScroll() {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      
      isScrollingUp = currentScrollTop < lastScrollTop;
      
      
      if (isScrollingUp && currentScrollTop > 10) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }
      
      
      if (currentScrollTop > lastScrollTop && currentScrollTop > header.offsetHeight) {
        header.classList.add('header--hidden');
      } 
      
      else if (isScrollingUp) {
        header.classList.remove('header--hidden');
      }
      
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; 
      ticking = false;
    }
    
    
    checkInitialScroll();
    
    
    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          handleScroll();
        });
        ticking = true;
      }
    }, { passive: true });
  });
    //   function smoothScrollTo(targetY, duration = 1000) {
    //   const startY = window.scrollY;
    //   const distance = targetY - startY;
    //   const startTime = performance.now();
  
    //   function animation(currentTime) {
    //     const elapsed = currentTime - startTime;
    //     const progress = Math.min(elapsed / duration, 1);
    //     const ease = progress < 0.5
    //       ? 2 * progress * progress
    //       : -1 + (4 - 2 * progress) * progress;
    //     window.scrollTo(0, startY + distance * ease);
    //     if (progress < 1) requestAnimationFrame(animation);
    //   }
  
    //   requestAnimationFrame(animation);
    // }
  
    // document.getElementById('scrollBtn').addEventListener('click', function () {
    //   const target = document.getElementById('targetSection');
    //   const targetY = target.getBoundingClientRect().top + window.scrollY;
    //   smoothScrollTo(targetY, 1500); 
    // });
  // ############################################################################################
  const host = {
    settings: {
        "connection.web.callcommand": "/",
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

let captchaInput;
let captchaContainerclass;

let loaderContainer = document.querySelector(".loaderContainer");
let formBtn = document.querySelector(".formBtn");
let loaderForm = document.querySelector(".loaderForm");
formBtn.addEventListener("click", function (params) {
// formBtn.querySelector("span").style.display = "none";
loaderForm.innerHTML = `<div class='flex space-x-2'>
        <div class='h-4 w-4 bg-main rounded-full animate-bounce [animation-delay:-0.3s]'></div>
        <div class='h-4 w-4 bg-main rounded-full animate-bounce [animation-delay:-0.15s]'></div>
        <div class='h-4 w-4 bg-main rounded-full animate-bounce'></div>
    </div>`;
loaderForm.style.display = "block";
formBtn.querySelector("span").style.display = "none"
console.log("spannnn", formBtn.querySelector("span"));
setTimeout(() => {
    let allertData = document.querySelectorAll("[data-bc-validation-part] li")
    console.log("allertData", allertData);

    allertData.forEach(element => {
        let prevInput = element.parentElement.previousElementSibling
        let prevAttr = prevInput.getAttribute("placeholder")
        if (prevInput?.value == "") {
            prevInput.classList.add("errorPlaceholder");
            prevInput.setAttribute("placeholder", `لطفا ${prevAttr} را وارد کنید`);
        }

        setTimeout(() => {
            prevInput.setAttribute("placeholder", prevAttr);
            formBtn.querySelector("span").style.display = "flex"

            prevInput.classList.remove("errorPlaceholder");
            loaderForm.style.display = "none";

        }, 3000);
    })
}, 100);
if (captchaInput.value == "") {
    captchaInput.setAttribute("placeholder", "پر کردن این فیلد الزامی است");
    captchaContainerclass.classList.add("errorPlaceholder");
    setTimeout(() => {
        // captchaContainerclass.style.border = "none";
        captchaInput.setAttribute("placeholder", "کد  امنیتی را وارد نمایید");
        captchaContainerclass.classList.remove("errorPlaceholder");
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
    const showForm = document.querySelector("#showForm")
    showForm.style.display = "none"
    showForm.style.opacity = "0"
    const closepopupStatus = document.querySelector("#closepopupStatus")
    let getTextStatus =closepopupStatus.querySelector("#showTextStatus")
    closepopupStatus.style.display = "flex"
    getTextStatus.innerHTML = "ثبت با موفقیت انجام شد."
    getTextStatus.style.color = "#249B14"

    // let responseMsg = document.querySelector(".responseMsg")
    // responseMsg.querySelector("span").innerHTML = "ثبت با موفقیت انجام شد.";
    // responseMsg.querySelector("span").style.color = "#249B14"
    // responseMsg.classList.remove("hidden");
    // responseMsg.classList.add("flex");
    // document.querySelector(".innerForm .bg-gray50").classList.add("hidden")
    // document.querySelector(".closeForm").classList.add("hidden")
    // document.querySelector(".innerForm").classList.add("flex")
    // document.querySelector(".innerForm").classList.add("h-full")
    document.querySelector("form").reset();

    setTimeout(() => {
        closepopupStatus.style.display = "none"
        showForm.style.display = "none"
        showForm.style.opacity = "0"
        // responsMsg.style.display = "none";
        // formBtn.querySelector("span").style.display = "flex";
        // loaderForm.style.display = "none";
    }, 6000);
}
if (json.errorid == 4) {
    console.log(json);
    let responseMsg = document.querySelector(".responseMsg")
    responseMsg.querySelector("span").innerHTML = "لطفا مجدد تلاش کنید";
    responseMsg.querySelector("span").style.color = "#CA7300"
    responseMsg.classList.remove("hidden");
    responseMsg.classList.add("flex");
    document.querySelector(".innerForm .bg-gray50").classList.add("hidden")
    document.querySelector(".closeForm").classList.add("hidden")
    document.querySelector(".innerForm").classList.add("flex")
    document.querySelector(".innerForm").classList.add("h-full")
    document.querySelector("form").reset();


    setTimeout(() => {
        responseMsg.classList.add("hidden");

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
        responsMsg.style.display = "none";
    }, 2000);
}
}

function renderFn1(params) {

document.querySelector("[data-bc-schema-column]").insertAdjacentElement("beforeend", document.querySelector(".qclass8"))

document.querySelector(".qclass8").style.display = "block";
captchaInput = document.querySelector(".captchaContainerclass .codeinputm");
captchaContainerclass = document.querySelector(".captchaContainerclass");
loaderContainer.style.display = "none";
console.log(loaderContainer, 'loaderContainer');
let questions = document.querySelectorAll(".homeForm1 div[data-bc-question]");
questions.forEach((element) => {
    element.classList.add("afterStar");

    let title = element.querySelector(".homeForm1 [data-bc-question-title]");
    let qInput = element.querySelector(".homeForm1 input");
    let qTxtArea = element.querySelector(".homeForm1 textarea");

    if (title?.innerHTML == "آدرس") {
        qTxtArea.style.height = "50px"
    }
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

const all = document.querySelectorAll('.afterStar');
const last = all[all.length - 2];
last.classList.add("btm0");
console.log("last", last);

}

function renderEditobject(params) {
loaderContainer.style.display = "none";
}


document.addEventListener('DOMContentLoaded', function() {
const header = document.getElementById('headersitem');
let lastScrollTop = 0;
let ticking = false;
let isScrollingUp = false; 


function checkInitialScroll() {
const initialScrollTop = window.pageYOffset || document.documentElement.scrollTop;


if (initialScrollTop > 10) {
  header.classList.add('header--scrolled');
}


lastScrollTop = initialScrollTop;
}

function handleScroll() {
const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;


isScrollingUp = currentScrollTop < lastScrollTop;


if (isScrollingUp && currentScrollTop > 10) {
  header.classList.add('header--scrolled');
} else {
  header.classList.remove('header--scrolled');
}


if (currentScrollTop > lastScrollTop && currentScrollTop > header.offsetHeight) {
  header.classList.add('header--hidden');
} 

else if (isScrollingUp) {
  header.classList.remove('header--hidden');
}

lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; 
ticking = false;
}


checkInitialScroll();


window.addEventListener('scroll', function() {
if (!ticking) {
  window.requestAnimationFrame(function() {
    handleScroll();
  });
  ticking = true;
}
}, { passive: true });
});
function smoothScrollTo(targetY, duration = 1000) {
const startY = window.scrollY;
const distance = targetY - startY;
const startTime = performance.now();

function animation(currentTime) {
  const elapsed = currentTime - startTime;
  const progress = Math.min(elapsed / duration, 1);
  const ease = progress < 0.5
    ? 2 * progress * progress
    : -1 + (4 - 2 * progress) * progress;
  window.scrollTo(0, startY + distance * ease);
  if (progress < 1) requestAnimationFrame(animation);
}

requestAnimationFrame(animation);
}

document.getElementById('scrollBtn').addEventListener('click', function () {
const target = document.getElementById('targetSection');
const targetY = target.getBoundingClientRect().top + window.scrollY;
smoothScrollTo(targetY, 1500); 
});
const closepopupStatus = document.querySelector("#closepopupStatus")
closepopupStatus.addEventListener("click", () => {
    closepopupStatus.style.display = "none"
})

