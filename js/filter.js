// WI_A_Gruppe_9

// Gibt nur die Rezepte zurück, deren Name oder mindestens eine Zutat den Suchbegriff enthält
// (Groß- und Kleinschreibung egal, Leerzeichen am Rand werden ignoriert)
function filtereRezepte(liste, suchbegriff) {
  const begriff = suchbegriff.trim().toLowerCase();

  return liste.filter(rezept => {
    const nameTrifft = rezept.name.toLowerCase().includes(begriff);
    const zutatTrifft = rezept.zutaten.some(zutat => zutat.toLowerCase().includes(begriff));
    return nameTrifft || zutatTrifft;
  });
}
