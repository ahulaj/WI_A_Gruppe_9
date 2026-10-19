// WI_A_Gruppe_9

// Gibt nur die Rezepte zurück, die zum Suchbegriff UND zur gewählten Kategorie passen.
// Suchbegriff: Name oder mindestens eine Zutat enthält ihn (Groß- und Kleinschreibung egal)
// Kategorie: "alle" bedeutet kein Filter
function filtereRezepte(liste, suchbegriff, kategorie) {
  const begriff = suchbegriff.trim().toLowerCase();

  return liste.filter(rezept => {
    const nameTrifft = rezept.name.toLowerCase().includes(begriff);
    const zutatTrifft = rezept.zutaten.some(zutat => zutat.toLowerCase().includes(begriff));
    const passtSuche = nameTrifft || zutatTrifft;
    const passtKategorie = kategorie === "alle" || rezept.kategorie === kategorie;
    return passtSuche && passtKategorie;
  });
}
