# CMS Joomla Cassiopeia CSS  
(gedacht nur für unsere Arbeitsgruppe !!! )


[Zur Dokumentation für Joomla Inhalt anpassen ](Dokumentation/README.md)

# Installation Codespace um User.css zu erstellen:
- Codespace öffnen im Github
- npm install um die abhänigen Module zu installieren  
    npm install postcss"  
    npm install postcss-cli  
    npm install postcss-discard-comments  
    npm install postcss-import  
    
- chmod +x ./node_modules/.bin/postcss

Vorbereitung:  
Alle Source CSS Dateien liegen im Ordner src/css

Benutzung:
starten -->    npx postcss src/css/main.css -o dist/main.css

Ergebnis -->   im DIST Ordner ist die fertige USER.CSS

Verwenden:  
user.css manuell oder per FTP Kopieren in Webspace
