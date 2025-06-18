Joomla sucht die Layout-Optionen in folgendem Pfad deines aktiven Templates:

/templates/<dein_template>/html/com_content/article/




Layout-Datei anlegen oder kopieren
Du kannst z. B. die Standardlayout-Datei als Ausgangsbasis nehmen:
/components/com_content/tmpl/article/default.php  

 Kopiere diese Datei nach:

/templates/cassiopeia/html/com_content/article/mein-layout.php

Passe darin dein gewünschtes HTML/CSS/Logik an.


 Hinweis:
Du kannst auch mehrere Layouts definieren – Joomla zeigt alle .php-Dateien in html/com_content/article/ automatisch als Auswahl an.


Bsp:
doppelte_Breite.php

<div class="com-content-article item-page" ...>  

<div class="com-content-article item-page doppelt-breit">
Oder direkt Inline-Style testen:  
<div class="com-content-article item-page" style="max-width: 1200px;">
⚠️ Standardbreite in Cassiopeia ist ca. 600px, also wären 1200px doppelt.

user.css
.doppelt-breit {
  max-width: 1200px;
  margin: 0 auto;
}

 Bonus-Tipp: Testen
Wenn du ?tp=1 in die URL hängst (index.php?tp=1), siehst du die Modul- und Layoutpositionen → ideal zum Feintuning deiner Layout-Breite.