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

// Entfernt das Rezept mit der übergebenen id und aktualisiert Speicher und Anzeige
function loescheRezept(id) {
  rezepte = rezepte.filter(rezept => rezept.id !== id);
  speichereRezepte(rezepte);
  zeigeRezepte(rezepte);
}

rezeptFormular.addEventListener("submit", speichereFormular);

zeigeRezepte(rezepte);