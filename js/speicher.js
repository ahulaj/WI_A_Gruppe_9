// WI_A_Gruppe_9

const SPEICHER_SCHLUESSEL = "wi_a_gruppe_9_rezepte";

// Liest alle gespeicherten Rezepte aus dem localStorage
function ladeRezepte() {
  const gespeicherterText = localStorage.getItem(SPEICHER_SCHLUESSEL);

  if (gespeicherterText === null) {
    return [];
  }

  return JSON.parse(gespeicherterText);
}

// Speichert die Liste aller Rezepte im localStorage
function speichereRezepte(rezepte) {
  localStorage.setItem(SPEICHER_SCHLUESSEL, JSON.stringify(rezepte));
}