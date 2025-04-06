let zone_sae = "";
Object.keys(SAE).forEach(key => {
    const { titre, compétences } = SAE[key];
    let competencesContent = "";

    if (compétences.length > 1) {
        competencesContent = `<div class="Competence"><marquee direction="left" scrollamount="6">${compétences.join(' ')}</marquee></div>`;
    } else {
        competencesContent = `<div class="Competence">${compétences}</div>`;
    }

    zone_sae += `<a href="sae_detail.html?num_sae=${key}">
                    <div class="SAE">
                        <h3>${key}</h3>
                        <p>${titre}</p>
                        <div class="Competence"><p>${competencesContent}</p></div>
                    </div>
                </a>`;
});

document.querySelector(".SAEContent").innerHTML = zone_sae;


