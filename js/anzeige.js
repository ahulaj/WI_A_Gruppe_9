// WI_A_Gruppe_9

function zeigeRezepte(liste) {
    const rezeptListe = document.getElementById("rezept-liste");
    rezeptListe.textContent = "";

    liste.forEach(function (rezept) {
        const eintrag = document.createElement("li");
        eintrag.textContent = rezept.name + " (" + rezept.kategorie + ")";
        rezeptListe.appendChild(eintrag);
    });
}