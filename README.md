<!-- WI_A_Gruppe_9 -->

# Rezeptverwalter

## Projektrahmen

Portfolioprüfung „Einführung Webtechnologien“ im Modul „Fortgeschrittene Systementwicklung“, Kurs WWI25A, DHBW Mosbach.

## Team

- Niklas Schusser
- Maximilian Göllnitz
- Arlind Hulaj

## Projektidee

Der Rezeptverwalter ist eine Webanwendung, in der man eigene Rezepte mit Zutaten und Zubereitungsschritten anlegen kann. Gespeicherte Rezepte lassen sich später schnell wiederfinden, bearbeiten und löschen. Alle Daten bleiben direkt im Browser gespeichert, eine Installation oder ein Server ist nicht nötig.

## Starten

1. Den Ordner `WI_A_Gruppe_9` entpacken.
2. Die Datei `index.html` per Doppelklick in einem aktuellen Browser öffnen (zum Beispiel Chrome, Edge oder Firefox).
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
- Barrierearme Bedienung, zum Beispiel per Tastatur und mit beschrifteten Buttons

## Aufbau

| Datei | Aufgabe |
| --- | --- |
| `index.html` | Grundgerüst der Seite mit Navigation, den drei Ansichten und dem Detail-Dialog |
| `css/style.css` | Gesamte Gestaltung mit Farb- und Abstandsvariablen, Layout und Anpassungen für schmale Bildschirme |
| `js/speicher.js` | Lädt und speichert die Rezepte im localStorage und fängt ungültige Daten ab |
| `js/anzeige.js` | Erstellt die Rezeptkarten, zeigt Hinweise, Trefferanzahl und die Detailansicht an |
| `js/formular.js` | Liest das Formular aus, prüft die Eingaben, zeigt Fehlermeldungen und füllt das Formular zum Bearbeiten |
| `js/filter.js` | Filtert die Rezepte nach Suchbegriff und Kategorie |
| `js/navigation.js` | Wechselt zwischen den drei Ansichten und markiert den aktiven Menüpunkt |
| `js/app.js` | Startpunkt der Anwendung, verbindet alle Teile und reagiert auf Eingaben |
| `img/` | Hintergrundbilder der Foto-Banner |

## Team und Zuständigkeiten

| Person | Schwerpunkt |
| --- | --- |
| Niklas Schusser | Rezeptanzeige, Detailansicht und Rezeptraster |
| Maximilian Göllnitz | Formular, Eingabeprüfung und Bearbeiten |
| Arlind Hulaj | Speicherung, Suche, Filter und Navigation |

Alle drei Teammitglieder haben an HTML, CSS und JavaScript gearbeitet. Die einzelnen Arbeitsschritte sind in der Git-Historie nachvollziehbar.