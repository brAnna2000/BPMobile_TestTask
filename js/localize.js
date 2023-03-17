let baseLang = '';
const allLang = Object.keys(langArr);

function changeLanguage() {
    if(!window.location.href.includes("?lang=")){
       if(navigator.userLanguage){
            baseLang = navigator.userLanguage.substring(0,2).toLowerCase();
       }else{
            baseLang = navigator.language.substring(0,2).toLowerCase();
       }
       location.href = window.location.pathname + '?lang=' + baseLang;
       location.reload(); 
    }
    let lang = window.location.href.slice(window.location.href.indexOf("?lang=")+6, window.location.href.indexOf("?lang=")+8);

    if (!allLang.includes(lang)) {
        location.href = window.location.pathname + '?lang=en';
    }

    let elems = document.querySelectorAll(`.lang`);
    
    elems.forEach(function(el){
        let attr = el.getAttribute("data-localize")
        if(attr.includes("price")){
            el.innerHTML = el.textContent + langArr[lang][attr];
        }else{
            el.innerHTML = langArr[lang][attr];
        }
    });
}

changeLanguage();