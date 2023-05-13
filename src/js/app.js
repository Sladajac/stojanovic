"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Nav_1 = require("./components/Nav");
//!Show nav
const btnShowMenu = document.querySelector("#mobileNavBtn");
btnShowMenu.addEventListener("click", Nav_1.prikaziMeni);
//!Godine brojac i broj klieanata
let valueDisplays = document.querySelectorAll(".brojBrojaca");
let interval = 4000;
valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});
//!Animacije na load stranice
window.addEventListener("load", () => {
    const divBannerTitle = document.querySelector("#bannerTitle");
    divBannerTitle.classList.add("animate__animated");
    divBannerTitle.classList.add("animate__fadeInDown");
});
//# sourceMappingURL=app.js.map