const urlParams = new URLSearchParams(window.location.search);
const num_sae = urlParams.get('num_sae');
const saeDetails = SAE[num_sae];

if (saeDetails) {
    document.getElementById('sae-title').innerText = saeDetails.titre;
    document.getElementById('sae-description').innerHTML = saeDetails.description;

    const competencesList = document.getElementById('competences-list');
    saeDetails.compétences.forEach(comp => {
        competencesList.innerHTML += `<p>${comp}</p>`;
    });

    const acList = document.getElementById('ac-list');
    for (let acKey in saeDetails.AC) {
        acList.innerHTML += `<p>${saeDetails.AC[acKey]}</p>`;
    }

    const ressourcesList = document.getElementById('ressources-list');
    for (let resKey in saeDetails.ressources) {
        ressourcesList.innerHTML += `<p>${saeDetails.ressources[resKey]}</p>`;
    }

    document.getElementById('semestre').innerText = `Semestre: ${saeDetails.semestre}`;
}
