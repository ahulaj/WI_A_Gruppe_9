// WI_A_Gruppe_9

const SPEICHER_SCHLUESSEL = "wi_a_gruppe_9_rezepte";

// Liest alle gespeicherten Rezepte aus dem localStorage
// Bei kaputten Daten wird eine leere Liste zurückgegeben
function ladeRezepte() {
  const gespeicherterText = localStorage.getItem(SPEICHER_SCHLUESSEL);

  if (gespeicherterText === null) {
    return [];
  }

  try {
    const daten = JSON.parse(gespeicherterText);

    if (!Array.isArray(daten)) {
      return [];
    }

    // Unvollständige Einträge (z. B. alte Testdaten) überspringen
    return daten.filter(rezept => Array.isArray(rezept.zutaten) && Array.isArray(rezept.zubereitung));
  } catch (fehler) {
    console.warn("Gespeicherte Rezepte konnten nicht gelesen werden.");
    return [];
  }
}

// Speichert die Liste aller Rezepte im localStorage
function speichereRezepte(rezepte) {
  localStorage.setItem(SPEICHER_SCHLUESSEL, JSON.stringify(rezepte));
}