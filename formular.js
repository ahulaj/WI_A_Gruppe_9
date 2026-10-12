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
    zutaten: textZuListe(document.getElementById("rezept-zutaten").value),
    zubereitung: textZuListe(document.getElementById("rezept-zubereitung").value)
  };
}