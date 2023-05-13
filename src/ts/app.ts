
import { prikaziMeni } from "./components/Nav";

//!Show nav
const btnShowMenu = <HTMLButtonElement>document.querySelector("#mobileNavBtn")
btnShowMenu.addEventListener("click", prikaziMeni)

//!Godine brojac i broj klieanata
let valueDisplays :any=document.querySelectorAll(".brojBrojaca");
let interval = 4000;

valueDisplays.forEach((valueDisplay:any) => {
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
window.addEventListener("load", ()=>{
   const divBannerTitle =<HTMLDivElement>document.querySelector("#bannerTitle")
   divBannerTitle.classList.add("animate__animated")
   divBannerTitle.classList.add("animate__fadeInDown")

})