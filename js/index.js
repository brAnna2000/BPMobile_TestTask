let options = document.querySelectorAll(".options > div");
let button = document.querySelector("button");

for (i = 0; i < options.length; i++) {
    option = options[i];
    option.addEventListener('click', clickHandler);
}

button.addEventListener('click', linkHandler);

function clickHandler() {
    for (i = 0; i < options.length; i++) {
        option = options[i];
        option.classList.toggle("active");
    }
}

function linkHandler() {
    let active = document.querySelector(".active");
    return active.className.includes("left") ? location.href = 'https://apple.com/' : location.href = 'https://google.com/';
}