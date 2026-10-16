// Filtert die Rezepte nach dem Suchbegriff und zeigt das Ergebnis an
function aktualisiereAnzeige() {
  const gefilterteRezepte = filtereRezepte(rezepte, sucheEingabe.value);

  let hinweisText;
  if (rezepte.length === 0) {
    hinweisText = "Noch keine Rezepte vorhanden. Lege jetzt dein erstes Rezept an.";
  } else {
    hinweisText = "Keine passenden Rezepte gefunden. Probiere einen anderen Suchbegriff.";
  }

  zeigeRezepte(gefilterteRezepte, hinweisText);
}