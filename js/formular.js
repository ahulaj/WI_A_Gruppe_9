// WI_A_Gruppe_9

// Teilt einen Text in Zeilen, entfernt Leerzeichen am Rand und wirft leere Zeilen raus
function textZuListe(text) {
  return text
    .split("\n")
    .map(zeile => zeile.trim())
    .filter(zeile => zeile !== "");
}

// Liest alle Formularfelder aus und gibt die Daten als Objekt zurück
function leseFormular() {
  return {
    name: document.getElementById("rezept-name").value.trim(),
    kategorie: document.getElementById("rezept-kategorie").value,
    dauer: Number(document.getElementById("rezept-dauer").value),
    zutaten: textZuListe(document.getElementById("rezept-zutaten").value),
    zubereitung: textZuListe(document.getElementById("rezept-zubereitung").value)
  };
}

// Schreibt eine Fehlermeldung unter das passende Feld
function zeigeFehler(feldName, text) {
  document.getElementById("fehler-" + feldName).textContent = text;
}

// Leert alle Fehlermeldungen im Formular
function entferneAlleFehler() {
  document.querySelectorAll(".fehler-text").forEach(fehler => {
    fehler.textContent = "";
  });
}

// Prüft die Pflichtfelder und gibt zurück, ob das Formular gültig ist
function pruefeFormular(daten) {
  entferneAlleFehler();
  let istGueltig = true;

  if (daten.name === "") {
    zeigeFehler("name", "Bitte gib einen Namen ein.");
    istGueltig = false;
  }

  if (daten.dauer === 0) {
    zeigeFehler("dauer", "Bitte gib eine Zubereitungszeit ein.");
    istGueltig = false;
  }

  if (daten.zutaten.length === 0) {
    zeigeFehler("zutaten", "Bitte gib mindestens eine Zutat ein.");
    istGueltig = false;
  }

  if (daten.zubereitung.length === 0) {
    zeigeFehler("zubereitung", "Bitte gib mindestens einen Zubereitungsschritt ein.");
    istGueltig = false;
  }

  return istGueltig;
}