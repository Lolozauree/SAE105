// fonction qui permet de jouer un son a partir d'une source
function playSound(src) {
    const audio = new Audio(src);
    audio.play();
}

// son qu'on entend lorsque l'on clique sur un bouton
function Clic() {
    playSound('assets/audio/click.wav');
}

// actualisation de la date de la dernière modif du fichier pour le footer
const date = new Date(document.lastModified);
const format_date = {year:"numeric", month:"numeric", day:"numeric", hour:"numeric", minute:"numeric"} ;
const dateFR = date.toLocaleDateString("fr-FR", format_date);
document.querySelector("#Date").innerHTML = "<p>MAJ : " + dateFR + "</p>";