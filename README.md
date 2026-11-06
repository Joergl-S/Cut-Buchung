# Cut-Buchung

Web-App fürs Handy: Screenshot vom Buchungskalender (Wilson) auswählen – die App liest,
an welchem Werktag welcher Schnittraum gebucht ist (`Cut 92`, `VM-Cut 08`, …), und legt
dafür Termine im Handy-Kalender an (`.ics`).

- **Kostenlos und lokal:** Die Texterkennung (Tesseract.js) läuft auf dem Gerät.
  Screenshots werden nirgendwohin hochgeladen. Alle Dateien liegen im Repo (`ocr/`).
- **Offline:** Nach dem ersten Öffnen funktioniert die App auch ohne Internet.

## Benutzung

1. `https://joergl-s.github.io/Cut-Buchung/` in Safari öffnen,
   über **Teilen → „Zum Home-Bildschirm“** als App ablegen.
2. Screenshot der Monatsansicht wählen (mehrere möglich) → **Screenshot analysieren**.
3. Liste prüfen, ggf. Räume korrigieren oder Tage an-/abwählen.
4. **Zum Kalender hinzufügen** → auf dem iPhone „Alle hinzufügen“.

Tage hinter „+ weitere 3“ sind im Screenshot nicht sichtbar – dafür zusätzlich einen
Screenshot der Ansicht „Arbeitswoche“ verwenden.

## Lizenzen

Tesseract.js und tesseract.js-core: Apache 2.0 (siehe `ocr/LICENSE-*`).
