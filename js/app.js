// WI_A_Gruppe_9

let rezepte = ladeRezepte();
const rezeptFormular = document.getElementById("rezept-formular");

// Liest das Formular aus, speichert das neue Rezept und leert das Formular
function speichereFormular(event) {
  event.preventDefault();

  const daten = leseFormular();
  if (!pruefeFormular(daten)) {
    return;
  }
  daten.id = Date.now();

  rezepte.push(daten);
  speichereRezepte(rezepte);
  zeigeRezepte(rezepte);
  rezeptFormular.reset();
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

// Blendet die Fehlermeldung eines Feldes aus, sobald dort getippt wird
FEHLER_FELDER.forEach(feldName => {
  document.getElementById("rezept-" + feldName).addEventListener("input", () => {
    entferneFehler(feldName);
  });
});

zeigeRezepte(rezepte);