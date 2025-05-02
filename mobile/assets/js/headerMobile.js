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
    // ############################################################################################



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
        captchaInput = document.querySelector(".captchaContainerclass .codeinputm");
        captchaContainerclass = document.querySelector(".captchaContainerclass");
        loaderContainer.style.display = "none";
        console.log(loaderContainer, 'loaderContainer');
        document.querySelector(".qclass8").style.display = "flex";
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
    function rendringEditobject(prm) {
        const inptuFile = document.querySelector("[data-bc-part-related-cell]")
    }
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
            searchResult(e.value)
        }
    })
    const buttonSearch = document.querySelector("#buttonSearch")
    buttonSearch.addEventListener("click", () => {
        if (inputSerch.value != "") {
            searchResult(inputSerch.value)
        }
    })
    function searchResult(value) {
        window.location.href = `/searchresult.bc?q=${value}`
    }
        
