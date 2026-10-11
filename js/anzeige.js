// WI_A_Gruppe_9

function zeigeRezepte(liste) {
    const rezeptListe = document.getElementById("rezept-liste");
    rezeptListe.textContent = "";

    liste.forEach(function (rezept) {
        const eintrag = document.createElement("li");
        eintrag.textContent = rezept.name + " (" + rezept.kategorie + ")";

        const loeschenButton = document.createElement("button");
        loeschenButton.type = "button";
        loeschenButton.textContent = "Löschen";
        loeschenButton.addEventListener("click", function () {
            loescheRezept(rezept.id);
        });
        eintrag.appendChild(loeschenButton);

        rezeptListe.appendChild(eintrag);
    });
}