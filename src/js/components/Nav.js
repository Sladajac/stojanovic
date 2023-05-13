"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prikaziMeni = void 0;
function prikaziMeni() {
    const divMobileNavSec = document.querySelector("#activeMobileNavSec");
    divMobileNavSec.style.width = "100%";
    const btnNavClose = document.querySelector("#closeMobileNav");
    btnNavClose.addEventListener("click", () => {
        divMobileNavSec.style.width = "0";
    });
}
exports.prikaziMeni = prikaziMeni;
//# sourceMappingURL=Nav.js.map