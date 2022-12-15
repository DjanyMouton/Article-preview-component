let whiteShare  = document.querySelector<HTMLButtonElement>('#share__image')!;
let blackShare  = document.querySelector<HTMLButtonElement>('#share__link')!;
let user        = document.querySelector<HTMLBodyElement>('.user')!;
let network     = document.querySelector<HTMLBodyElement>('.network')!;



function showSocialNetwork() {
    whiteShare?.addEventListener('click', () => {
        if (user.style.display == "flex") {
            user.style.display = "none";
            network.style.display = "flex";
        } else {
            user.style.display = "flex";
            network.style.display = "none";
        }
    });
    blackShare?.addEventListener('click', () => {
        if (network.style.display == "flex") {
            user.style.display = "flex";
            network.style.display = "none";
        } else {
            user.style.display = "none";
            network.style.display = "flex";
        }
    });
};
showSocialNetwork();



