export function prikaziMeni (){
    const divMobileNavSec = <HTMLDivElement>document.querySelector("#activeMobileNavSec")
    divMobileNavSec.style.width="100%";
    const btnNavClose = <HTMLButtonElement>document.querySelector("#closeMobileNav") 
    btnNavClose.addEventListener("click", () =>{
        divMobileNavSec.style.width="0";
    } )
}