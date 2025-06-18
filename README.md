# CMS Joomla Cassiopeia CSS  
(gedacht nur für unsere Arbeitsgruppe !!! )


[Zur Dokumentation für Joomla Inhalt anpassen ](Dokumentation/README.md)

# Installation:
- Codespace öffnen
- npm install um die abhänigen Module zu installieren  
    "postcss": "^8.5.5"  
    "postcss-cli": "^11.0.1"  
    "postcss-discard-comments": "^7.0.4"  
    "postcss-import": "^16.1.0"  
    
- chmod +x ./node_modules/.bin/postcss

Benutzung:
starten -->    npx postcss src/css/main.css -o dist/main.css

Ergebnis -->   im DIST Ordner ist die fertige USER.CSS

Verwenden:  
user.css manuell oder per FTP Kopieren in Webspace