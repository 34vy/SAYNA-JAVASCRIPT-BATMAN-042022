//Les rubriques du menu doivent être soulignées et en gras.
//Lorsqu'on se situe dans une rubrique, celle-ci garde cette mise en forme.
let menu = document.getElementsByClassName('menu')

for (let i = 0; i < menu.length; i++) {
    menu.addEventListener('mouseover', () => {
        menu.style.textDecoration = 'underline'
    })
}

//Effet hover sur les boutons
let btnsecondary = document.getElementsByClassName('btn btn-outline-secondary')
console.log(btnsecondary)

for (let i = 0; i < btnsecondary.length; i++) {
    btnsecondary[i].addEventListener('mouseover', () => {
        btnsecondary[i].style.opacity = '1';
    })
}
console.log(btnsecondary)
    //les logos réseaux sociaux et les logos Batman(header+sur le côté) ont effet hover sur les icônes .
let image = document.getElementsByClassName('image');

for (let i = 0; i < image.length; i++) {
    image[i].addEventListener('mouseover', () => {
        image[i].style.color = '#FFFF00';
    });
    image[i].addEventListener('mouseout', () => {
        image[i].style.color = 'none';
    });
}
//les icônes à côté doivent défiler en suivant le scroll de la page.

//tous les titres du site apparaissent avec un fade in et démarrent de gauche à droite.
$(document).ready(function() {
    $('#load').FadeIn();
    $('#load').animate({
        left: "500px",
    }, "slow");
});