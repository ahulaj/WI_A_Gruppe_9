// WI_A_Gruppe_9

function textZuListe(text) {
  return text
    .split("\n")
    .map(zeile => zeile.trim())
    .filter(zeile => zeile.length > 0);
}

function leseFormular() {
  return {
    name: document.getElementById("rezept-name").value.trim(),
    kategorie: document.getElementById("rezept-kategorie").value,
    dauer: Number(document.getElementById("rezept-dauer").value),
    zutaten: textZuListe(document.getElementById("rezept-zutaten").value),
    zubereitung: textZuListe(document.getElementById("rezept-zubereitung").value)
  };
}

function zeigeFehler(feldName, text) {
  const fehlerAbsatz = document.getElementById("fehler-" + feldName);
  if (fehlerAbsatz) {
    fehlerAbsatz.textContent = text;
  }
  const feld = document.getElementById("rezept-" + feldName);
  if (feld) {
    feld.setAttribute("aria-invalid", "true");
    feld.classList.add("feld-fehler");
  }
}

const FEHLER_FELDER = ["name", "dauer", "zutaten", "zubereitung"];

// Entfernt Fehlermeldung und Markierung für genau ein Feld
function entferneFehler(feldName) {
  const fehlerAbsatz = document.getElementById("fehler-" + feldName);
  if (fehlerAbsatz) {
    fehlerAbsatz.textContent = "";
  }
  const feld = document.getElementById("rezept-" + feldName);
  if (feld) {
    feld.removeAttribute("aria-invalid");
    feld.classList.remove("feld-fehler");
  }
}

// Entfernt die Fehler aller Felder
function entferneAlleFehler() {
  FEHLER_FELDER.forEach(feldName => entferneFehler(feldName));
}

function pruefeFormular(daten) {
  entferneAlleFehler();
  let istGueltig = true;

  if (!daten.name) {
    zeigeFehler("name", "Bitte gib einen Namen ein.");
    istGueltig = false;
  } else if (daten.name.length > 60) {
    zeigeFehler("name", "Der Name darf höchstens 60 Zeichen lang sein.");
    istGueltig = false;
  }

  if (!daten.dauer) {
    zeigeFehler("dauer", "Bitte gib eine Zubereitungszeit ein.");
    istGueltig = false;
  } else if (!Number.isInteger(daten.dauer) || daten.dauer < 1 || daten.dauer > 600) {
    zeigeFehler("dauer", "Bitte gib eine Zubereitungszeit zwischen 1 und 600 Minuten ein.");
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

function fuelleFormular(rezept) {
  document.getElementById("rezept-name").value = rezept.name;
  document.getElementById("rezept-kategorie").value = rezept.kategorie;
  document.getElementById("rezept-dauer").value = rezept.dauer;
  document.getElementById("rezept-zutaten").value = rezept.zutaten.join("\n");
  document.getElementById("rezept-zubereitung").value = rezept.zubereitung.join("\n");
}