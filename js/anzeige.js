// WI_A_Gruppe_9

// Lesbare Namen für die internen Kategorie-Werte
const KATEGORIE_TEXTE = {
  fruehstueck: "Frühstück",
  hauptgericht: "Hauptgericht",
  dessert: "Dessert",
  snack: "Snack"
};

// Gibt den lesbaren Text zur Kategorie zurück, bei unbekanntem Wert "Sonstiges"
function kategorieText(wert) {
  return KATEGORIE_TEXTE[wert] || "Sonstiges";
}

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
  karte.appendChild(
    erstelleElement("p", kategorieText(rezept.kategorie), "rezept-kategorie")
  );
  karte.appendChild(
    erstelleElement("p", rezept.dauer + " Min.", "rezept-dauer")
  );

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

  const bearbeitenButton = erstelleElement("button", "Bearbeiten");
  bearbeitenButton.type = "button";

  bearbeitenButton.addEventListener("click", function () {
    starteBearbeitung(rezept.id);
  });

  karte.appendChild(bearbeitenButton);

  const loeschenButton = erstelleElement("button", "Löschen");
  loeschenButton.type = "button";

  loeschenButton.addEventListener("click", function () {
    loescheRezept(rezept.id);
  });

  karte.appendChild(loeschenButton);

  return karte;
}

// Zeigt die übergebene Liste an. Ist sie leer, erscheint stattdessen der hinweisText
function zeigeRezepte(liste, hinweisText) {
  const rezeptListe = document.getElementById("rezept-liste");
  const leerHinweis = document.getElementById("leer-hinweis");

  rezeptListe.textContent = "";

  if (liste.length === 0) {
    leerHinweis.textContent = hinweisText;
    leerHinweis.classList.remove("versteckt");
  } else {
    leerHinweis.textContent = "";
    leerHinweis.classList.add("versteckt");
  }

  liste.forEach(function (rezept) {
    rezeptListe.appendChild(erstelleRezeptKarte(rezept));
  });
}
// Zeigt über der Liste die Anzahl der Rezepte an
function zeigeTrefferAnzahl(anzahlGefunden, anzahlGesamt) {
  const trefferAnzahl = document.getElementById("treffer-anzahl");

  if (anzahlGesamt === 0) {
    trefferAnzahl.textContent = "";
  } else if (anzahlGefunden < anzahlGesamt) {
    trefferAnzahl.textContent = anzahlGefunden + " von " + anzahlGesamt + " Rezepten";
  } else if (anzahlGesamt === 1) {
    trefferAnzahl.textContent = "1 Rezept";
  } else {
    trefferAnzahl.textContent = anzahlGesamt + " Rezepte";
  }
}