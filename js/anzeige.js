// Zeigt die übergebene Liste an. Ist sie leer, erscheint stattdessen der hinweisText
function zeigeRezepte(liste, hinweisText) {
  const rezeptListe = document.getElementById("rezept-liste");
  const leerHinweis = document.getElementById("leer-hinweis");

  rezeptListe.textContent = "";

  if (liste.length === 0) {
    leerHinweis.textContent = hinweisText;
    leerHinweis.classList.remove("versteckt");
  } else {
    leerHinweis.textContent = "";
    leerHinweis.classList.add("versteckt");
  }

  liste.forEach(function (rezept) {
    rezeptListe.appendChild(erstelleRezeptKarte(rezept));
  });
}