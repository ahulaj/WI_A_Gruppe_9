// WI_A_Gruppe_9

// Gibt nur die Rezepte zurück, deren Name den Suchbegriff enthält (Groß- und Kleinschreibung egal)
function filtereRezepte(liste, suchbegriff) {
  const begriff = suchbegriff.trim().toLowerCase();

  return liste.filter(rezept => rezept.name.toLowerCase().includes(begriff));
}
