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

// Baut eine kompakte Karte mit Vorschau. Alle Details stehen im Dialog
function erstelleRezeptKarte(rezept) {
  const karte = erstelleElement("article", "", "rezept-karte");

  karte.appendChild(erstelleElement("h3", rezept.name));
  karte.appendChild(
    erstelleElement("p", kategorieText(rezept.kategorie), "rezept-kategorie")
  );
  karte.appendChild(
    erstelleElement("p", rezept.dauer + " Min.", "rezept-dauer")
  );
  karte.appendChild(
    erstelleElement("p", "Zutaten: " + rezept.zutaten.join(", "), "rezept-vorschau")
  );

  const kartenAktionen = erstelleElement("div", "", "karten-aktionen");

  const anzeigenButton = erstelleElement("button", "Anzeigen");
  anzeigenButton.type = "button";

  anzeigenButton.addEventListener("click", function () {
    zeigeRezeptDetails(rezept);
  });

  kartenAktionen.appendChild(anzeigenButton);

  const bearbeitenButton = erstelleElement("button", "Bearbeiten");
  bearbeitenButton.type = "button";

  bearbeitenButton.addEventListener("click", function () {
    starteBearbeitung(rezept.id);
  });

  kartenAktionen.appendChild(bearbeitenButton);

  const loeschenButton = erstelleElement("button", "Löschen");
  loeschenButton.type = "button";

  loeschenButton.addEventListener("click", function () {
    loescheRezept(rezept.id);
  });

  kartenAktionen.appendChild(loeschenButton);

  karte.appendChild(kartenAktionen);

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

// Füllt den Dialog mit allen Infos des Rezepts und öffnet ihn
function zeigeRezeptDetails(rezept) {
  const dialog = document.getElementById("rezept-dialog");
  const zutatenListe = document.getElementById("dialog-zutaten");
  const schritteListe = document.getElementById("dialog-schritte");

  document.getElementById("dialog-titel").textContent = rezept.name;
  document.getElementById("dialog-info").textContent =
    kategorieText(rezept.kategorie) + " · " + rezept.dauer + " Min.";

  zutatenListe.textContent = "";
  schritteListe.textContent = "";

  rezept.zutaten.forEach(function (zutat) {
    zutatenListe.appendChild(erstelleElement("li", zutat));
  });

  rezept.zubereitung.forEach(function (schritt) {
    schritteListe.appendChild(erstelleElement("li", schritt));
  });

  dialog.showModal();
}