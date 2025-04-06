// easter egg pour jouer une secousse et un bruit de shotgun comme dans HL1 lors du clic sur ma photo
function piouPiou() {
    playSound('assets/audio/shotgun_click.wav');

    const body = document.body;
    body.style.position = 'relative';

    const movements = [
        { x: -15, y: 0 },
        { x: 0, y: 0 },
        { x: 5, y: 0 },
        { x: 0, y: 0 }
    ];

    let index = 0;
    const shake = setInterval(() => {
        body.style.transform = `translate(${movements[index].x}px, ${movements[index].y}px)`;
        if (++index >= movements.length) clearInterval(shake);
    }, 50);
}

// animation du scroll et vérification du scroll
function checkScroll() {
    Array.from(document.getElementsByClassName('Pied')).forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            element.classList.add('visible');
        }
    });
}

// ecouteur du scroll pour vérifier la lisibilité
window.addEventListener('scroll', checkScroll);