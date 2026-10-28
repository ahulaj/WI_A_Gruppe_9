// WI_A_Gruppe_9

let rezepte = ladeRezepte();
let bearbeitetesRezeptId = null;

const rezeptFormular = document.getElementById("rezept-formular");
const sucheEingabe = document.getElementById("suche-eingabe");
const kategorieFilter = document.getElementById("filter-kategorie");

// Liest das Formular aus, speichert ein neues oder bearbeitetes Rezept und setzt das Formular zurück
function speichereFormular(event) {
  event.preventDefault();

  const daten = leseFormular();
  if (!pruefeFormular(daten)) {
    return;
  }

  if (bearbeitetesRezeptId !== null) {
    const index = rezepte.findIndex(rezept => rezept.id === bearbeitetesRezeptId);
    daten.id = bearbeitetesRezeptId;

    if (index !== -1) {
      rezepte[index] = daten;
    }
  } else {
    daten.id = Date.now();
    rezepte.push(daten);
  }

  speichereRezepte(rezepte);

  // Suche und Filter zurücksetzen, damit das gespeicherte Rezept sichtbar ist
  sucheEingabe.value = "";
  kategorieFilter.value = "alle";

  aktualisiereAnzeige();
  beendeBearbeitung();
  wechsleAnsicht("meine-rezepte");
}

// Startet die Bearbeitung eines vorhandenen Rezepts und wechselt zum Formular
function starteBearbeitung(id) {
  const rezept = rezepte.find(rezept => rezept.id === id);

  if (!rezept) {
    return;
  }

  fuelleFormular(rezept);
  bearbeitetesRezeptId = id;

  document.getElementById("formular-titel").textContent = "Rezept bearbeiten";
  document.getElementById("speichern-button").textContent = "Änderungen speichern";
  document.getElementById("abbrechen-button").classList.remove("versteckt");

  wechsleAnsicht("neues-rezept");
  window.scrollTo(0, 0);
}

// Beendet den Bearbeitungsmodus und setzt das Formular zurück
function beendeBearbeitung() {
  bearbeitetesRezeptId = null;
  setzeFormularZurueck();
}

// Fragt vor dem Löschen nach, entfernt dann das Rezept mit der übergebenen id und aktualisiert Speicher und Anzeige
function loescheRezept(id) {
  const rezept = rezepte.find(rezept => rezept.id === id);

  if (!rezept) {
    return;
  }

  const bestaetigt = confirm("Möchtest du das Rezept „" + rezept.name + "“ wirklich löschen?");

  if (!bestaetigt) {
    return;
  }

  rezepte = rezepte.filter(rezept => rezept.id !== id);
  speichereRezepte(rezepte);

  if (id === bearbeitetesRezeptId) {
    beendeBearbeitung();
  }

  aktualisiereAnzeige();
}

// Filtert die Rezepte nach dem Suchbegriff und zeigt das Ergebnis an
function aktualisiereAnzeige() {
  const gefilterteRezepte = filtereRezepte(rezepte, sucheEingabe.value, kategorieFilter.value);

  let hinweisText;
  if (rezepte.length === 0) {
    hinweisText = "Noch keine Rezepte vorhanden. Lege dein erstes Rezept unter ‚Neues Rezept‘ an.";
  } else {
    hinweisText = "Keine passenden Rezepte gefunden. Probiere einen anderen Suchbegriff oder eine andere Kategorie.";
  }

  zeigeRezepte(gefilterteRezepte, hinweisText);
  zeigeTrefferAnzahl(gefilterteRezepte.length, rezepte.length);
}

rezeptFormular.addEventListener("submit", speichereFormular);
// Bricht die Bearbeitung ab und kehrt zur Rezeptliste zurück
document.getElementById("abbrechen-button").addEventListener("click", () => {
  beendeBearbeitung();
  wechsleAnsicht("meine-rezepte");
});
document.getElementById("dialog-schliessen").addEventListener("click", function () {
  document.getElementById("rezept-dialog").close();
});

// Wechselt beim Klick auf einen Navigationsbutton die Ansicht
document.querySelectorAll(".nav-button").forEach(button => {
  button.addEventListener("click", () => wechsleAnsicht(button.dataset.ansicht));
});
sucheEingabe.addEventListener("input", aktualisiereAnzeige);
kategorieFilter.addEventListener("change", aktualisiereAnzeige);

// Blendet die Fehlermeldung eines Feldes aus, sobald dort getippt wird
FEHLER_FELDER.forEach(feldName => {
  document.getElementById("rezept-" + feldName).addEventListener("input", () => {
    entferneFehler(feldName);
  });
});

aktualisiereAnzeige();