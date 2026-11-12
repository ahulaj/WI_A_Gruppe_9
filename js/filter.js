// WI_A_Gruppe_8 (Gruppe H)

// Gibt die Rezepte zurück, deren Name oder Zutaten den Suchbegriff enthalten
// und die zur gewählten Kategorie passen ("alle" bedeutet kein Filter)
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
