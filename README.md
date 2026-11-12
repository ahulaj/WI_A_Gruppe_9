<!-- WI_A_Gruppe_8 (Gruppe H) -->

# Rezeptverwalter

## Projektrahmen

Portfolioprüfung „Einführung Webtechnologien“ im Modul „Fortgeschrittene Systementwicklung“, Kurs WWI25A, DHBW Mosbach.

## Team

Gruppe H im Kurs, offiziell WI_A_Gruppe_8.

- Niklas Schusser
- Maximilian Göllnitz
- Arlind Hulaj

## Projektidee

Der Rezeptverwalter ist eine Webanwendung, in der man eigene Rezepte mit Zutaten und Zubereitungsschritten anlegen kann. Gespeicherte Rezepte lassen sich später schnell wiederfinden, bearbeiten und löschen. Alle Daten bleiben direkt im Browser gespeichert, eine Installation oder ein Server ist nicht nötig.

## Starten

1. Den Ordner `WI_A_Gruppe_8` entpacken.
2. Die Datei `index.html` per Doppelklick in einem aktuellen Browser öffnen (zum Beispiel Chrome, Edge oder Firefox). Ein aktueller Browser ist nötig, weil die Detailansicht das HTML-Element `dialog` nutzt.
3. Eine Installation ist nicht nötig. Die Anwendung kommt ohne Frameworks, Bibliotheken oder Internetverbindung aus.

Die Rezepte werden im `localStorage` des Browsers gespeichert. Sie bleiben nach dem Neuladen erhalten, gelten aber nur für den jeweiligen Browser auf dem jeweiligen Gerät.

## Funktionen

- Neue Rezepte anlegen mit Name, Kategorie, Zubereitungszeit, Zutaten (eine pro Zeile) und Zubereitungsschritten (ein Schritt pro Zeile)
- Rezepte bearbeiten und die Bearbeitung abbrechen
- Rezepte löschen, mit Sicherheitsabfrage
- Eingabeprüfung mit verständlichen Meldungen direkt am Feld (Pflichtfelder, Zeit von 1 bis 600 Minuten, Name bis 60 Zeichen)
- Suche nach Rezeptname oder Zutat
- Kategorie-Filter, kombinierbar mit der Suche, inklusive Anzeige der Trefferanzahl
- Hinweise bei leerer Rezeptliste und wenn die Suche nichts findet
- Detailansicht eines Rezepts in einem Dialogfenster
- Dauerhafte Speicherung im Browser, auch nach dem Neuladen der Seite
- Drei Ansichten mit Navigation: „Neues Rezept“, „Meine Rezepte“ und „Über uns“
- Responsives Layout für Desktop und Smartphone
- Kurze Bestätigung nach dem Speichern, Ändern und Löschen eines Rezepts
- Barrierearme Bedienung: vollständig per Tastatur nutzbar, Sprunglink zum Hauptinhalt, beschriftete Buttons, mit den Feldern verknüpfte Fehlermeldungen und Fokus auf das erste fehlerhafte Feld

## Testrezepte

Mit diesen vier Rezepten lassen sich alle Funktionen schnell ausprobieren. Die Suche nach „tomate“ findet Rezept 1 und 4, die Suche nach „schoko“ in der Kategorie „Dessert“ nur Rezept 3.

| Nr. | Name | Kategorie | Zeit | Zutaten (eine pro Zeile) | Zubereitung (ein Schritt pro Zeile) |
| --- | --- | --- | --- | --- | --- |
| 1 | Spaghetti Bolognese | Hauptgericht | 40 | 400 g Spaghetti, 300 g Hackfleisch, 1 Zwiebel, 1 Dose Tomaten, Salz und Pfeffer | Zwiebel würfeln und anbraten, Hackfleisch krümelig braten, Tomaten zugeben und 20 Minuten köcheln, Spaghetti kochen und servieren |
| 2 | Overnight Oats | Frühstück | 10 | 50 g Haferflocken, 150 ml Milch, 1 EL Honig, Beeren | Haferflocken mit Milch und Honig mischen, über Nacht kalt stellen, morgens mit Beeren servieren |
| 3 | Schoko-Muffins | Dessert | 35 | 200 g Mehl, 100 g Zucker, 2 Eier, 100 g Schokolade, 120 ml Milch | Ofen auf 180 Grad vorheizen, alles verrühren, Teig in Förmchen füllen, 20 Minuten backen |
| 4 | Tomaten-Mozzarella-Toast | Snack | 10 | 2 Scheiben Toast, 1 Tomate, 1 Mozzarella, Basilikum | Toast belegen, 5 Minuten überbacken, mit Basilikum servieren |

Die Kommas in den Spalten Zutaten und Zubereitung stehen hier nur für einen Zeilenumbruch im Formular.

## Aufbau

| Datei | Aufgabe |
| --- | --- |
| `index.html` | Grundgerüst der Seite mit Navigation, den drei Ansichten und dem Detail-Dialog |
| `css/style.css` | Gesamte Gestaltung mit Farb- und Abstandsvariablen, Layout und Anpassungen für schmale Bildschirme |
| `js/speicher.js` | Lädt und speichert die Rezepte im localStorage und fängt ungültige Daten ab |
| `js/anzeige.js` | Erstellt die Rezeptkarten, zeigt Hinweise, Trefferanzahl, Bestätigungen und die Detailansicht an |
| `js/formular.js` | Liest das Formular aus, prüft die Eingaben, zeigt Fehlermeldungen und füllt das Formular zum Bearbeiten |
| `js/filter.js` | Filtert die Rezepte nach Suchbegriff und Kategorie |
| `js/navigation.js` | Wechselt zwischen den drei Ansichten und markiert den aktiven Menüpunkt |
| `js/app.js` | Startpunkt der Anwendung, verbindet alle Teile und reagiert auf Eingaben |
| `img/` | Hintergrundbilder der Foto-Banner (siehe Bildquellen) |
| `.mailmap` | Ordnet in der Git-Historie jeder Person genau einen Namen und eine E-Mail-Adresse zu |

## Bildquellen

Die beiden Hintergrundbilder der Foto-Banner wurden mit Google Gemini erzeugt und anschließend auf 1024 × 396 Pixel zugeschnitten. Die Prompts sind sinngemäß wiedergegeben.

| Datei | Verwendung | Prompt (sinngemäß) |
| --- | --- | --- |
| `img/hintergrund-start.jpg` | Banner der Ansicht „Neues Rezept“ | Breites Food-Foto für das Banner einer Rezept-Webseite: helle Küchenarbeitsplatte in warmem Licht, im Vordergrund eine Schüssel mit Quinoa, gegrilltem Hähnchen, Avocado, Kirschtomaten und frischen Kräutern, im Hintergrund unscharf eine zweite Schüssel, Kräutertöpfe, Olivenöl und ein Holzbrett. Die linke Bildseite bleibt ruhig und frei für Text. |
| `img/hintergrund-szene.jpg` | Banner der Ansichten „Meine Rezepte“ und „Über uns“ | Breites Küchenfoto für das Banner einer Rezept-Webseite: leere helle Steinarbeitsplatte im warmen Abendlicht, einzelne frische Basilikumblätter im Vordergrund, im Hintergrund unscharf Kräutertöpfe, Pfeffermühlen, Olivenöl, ein Holzbrett und ein Küchentuch. Die linke Bildseite bleibt ruhig und frei für Text. |

## Hinweis zum Gruppennamen

Wir sind im Kurs Gruppe H. Das entspricht der Gruppennummer 8, unser offizieller Gruppenname ist also WI_A_Gruppe_8. Während der Entwicklung stand im Projekt versehentlich WI_A_Gruppe_9. Das ist uns erst bei der Vorbereitung der Abgabe aufgefallen. Wir haben den Gruppennamen daraufhin in allen Dateien auf WI_A_Gruppe_8 korrigiert. Das GitHub-Repository und die älteren Commits in der Git-Historie tragen noch den alten Namen WI_A_Gruppe_9.

## Team und Zuständigkeiten

| Person | Schwerpunkt |
| --- | --- |
| Niklas Schusser | Rezeptanzeige, Detailansicht und Rezeptraster |
| Maximilian Göllnitz | Formular, Eingabeprüfung und Bearbeiten |
| Arlind Hulaj | Speicherung, Suche, Filter und Navigation |

Alle drei Teammitglieder haben an HTML, CSS und JavaScript gearbeitet. Die einzelnen Arbeitsschritte sind in der Git-Historie nachvollziehbar.
