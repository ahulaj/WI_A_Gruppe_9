// WI_A_Gruppe_9

let rezepte = ladeRezepte();
let bearbeitetesRezeptId = null;

const rezeptFormular = document.getElementById("rezept-formular");

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
  zeigeRezepte(rezepte);
  beendeBearbeitung();
}

// Startet die Bearbeitung eines vorhandenen Rezepts
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

  rezeptFormular.scrollIntoView({ behavior: "smooth" });
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
  zeigeRezepte(rezepte);
}

rezeptFormular.addEventListener("submit", speichereFormular);
document.getElementById("abbrechen-button").addEventListener("click", beendeBearbeitung);

// Blendet die Fehlermeldung eines Feldes aus, sobald dort getippt wird
FEHLER_FELDER.forEach(feldName => {
  document.getElementById("rezept-" + feldName).addEventListener("input", () => {
    entferneFehler(feldName);
  });
});

zeigeRezepte(rezepte);