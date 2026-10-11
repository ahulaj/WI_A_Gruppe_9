// WI_A_Gruppe_9

let rezepte = ladeRezepte();
const rezeptFormular = document.getElementById("rezept-formular");

// Liest das Formular aus, speichert das neue Rezept und leert das Formular
function speichereFormular(event) {
  event.preventDefault();

  const neuesRezept = {
    id: Date.now(),
    name: document.getElementById("rezept-name").value.trim(),
    kategorie: document.getElementById("rezept-kategorie").value,
    zutaten: document.getElementById("rezept-zutaten").value,
    zubereitung: document.getElementById("rezept-zubereitung").value
  };

  rezepte.push(neuesRezept);
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
  