// WI_A_Gruppe_9

function erstelleElement(tagName, text, klassenName) {
    const element = document.createElement(tagName);
    element.textContent = text;
    if (klassenName) {
        element.className = klassenName;
    }
    return element;
}

function erstelleRezeptKarte(rezept) {
    const karte = erstelleElement("article", "", "rezept-karte");

    karte.appendChild(erstelleElement("h3", rezept.name));
    karte.appendChild(erstelleElement("p", rezept.kategorie, "rezept-kategorie"));

    karte.appendChild(erstelleElement("h4", "Zutaten"));
    const zutatenListe = erstelleElement("ul", "");
    rezept.zutaten.forEach(function (zutat) {
        zutatenListe.appendChild(erstelleElement("li", zutat));
    });
    karte.appendChild(zutatenListe);

    karte.appendChild(erstelleElement("h4", "Zubereitung"));
    const schritteListe = erstelleElement("ol", "");
    rezept.zubereitung.forEach(function (schritt) {
        schritteListe.appendChild(erstelleElement("li", schritt));
    });
    karte.appendChild(schritteListe);

    const loeschenButton = erstelleElement("button", "Löschen");
    loeschenButton.type = "button";
    loeschenButton.addEventListener("click", function () {
        loescheRezept(rezept.id);
    });
    karte.appendChild(loeschenButton);

    return karte;
}

function zeigeRezepte(liste) {
    const rezeptListe = document.getElementById("rezept-liste");
    rezeptListe.textContent = "";

    liste.forEach(function (rezept) {
        rezeptListe.appendChild(erstelleRezeptKarte(rezept));
    });
}