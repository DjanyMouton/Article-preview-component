"use strict";
let whiteShare = document.querySelector('#share__image');
let blackShare = document.querySelector('#share__link');
let user = document.querySelector('.user');
let network = document.querySelector('.network');
function showSocialNetwork() {
    whiteShare === null || whiteShare === void 0 ? void 0 : whiteShare.addEventListener('click', () => {
        if (user.style.display == "flex") {
            user.style.display = "none";
            network.style.display = "flex";
        }
        else {
            user.style.display = "flex";
            network.style.display = "none";
        }
    });
    blackShare === null || blackShare === void 0 ? void 0 : blackShare.addEventListener('click', () => {
        if (network.style.display == "flex") {
            user.style.display = "flex";
            network.style.display = "none";
        }
        else {
            user.style.display = "none";
            network.style.display = "flex";
        }
    });
}
;
showSocialNetwork();
