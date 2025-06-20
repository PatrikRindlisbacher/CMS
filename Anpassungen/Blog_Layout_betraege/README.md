
Anpassung Joomla 5.3 blog.php 20.06.2025 intro_items Ausgabe RAW Custom Listen Feld  bloglayout
-----------------------------------------------------------------------------------------------
einfügen nach Zeile 105      -->      <?php foreach ($this->intro_items as $key => &$item) : ?> 
resp. Zeile 106 ersetzen durch die neuen 3 Zeilen
************************************************************************************************ 


<?php $bloglayout = $item->jcfields['bloglayout']->rawvalue ?? ''; ?> 
<?php $bloglayout = htmlspecialchars($bloglayout, ENT_QUOTES, 'UTF-8'); ?>
<div class="com-content-category-blog__item blog-item <?= $bloglayout; ?>">




Original
---------
<div class="com-content-category-blog__item blog-item">






Ausgabe in der Console gesamtes Item Objekt plain JSON
-----------------------------------------------------
echo '<script>console.log("item OBJ: ' . addslashes(json_encode($item)) . '");</script>';


Ausgabe in der Console gesamtes Item Objekt Baum
-----------------------------------------------------
echo '<script>console.log("item OBJ:", ' . json_encode($item) . ');</script>';



Zugriff auf RAW Wert von einem Custom Listen Feld
-------------------------------------------------
$bloglayout = $item->jcfields['bloglayout']->rawvalue;
$bloglayout = $item->jcfields['bloglayout']->rawvalue ?? '';      --> Sichere Versrion mit Leer Rücgabe wenn leer



// Wert vom Feld mit name = "bloglayout"
$bloglayoutValue = '';
foreach ($item->jcfields as $f) if ($f->name === 'bloglayout') $bloglayoutValue = $f->value;



<?php
$bloglayoutRaw = '';
if (isset($item->jcfields) && is_array($item->jcfields)) {
    foreach ($item->jcfields as $f) {
        if (isset($f->name) && $f->name === 'bloglayout') {
            $bloglayoutRaw = $f->rawvalue ?? '';
            break;
        }
    }
}
echo '<script>console.log("bloglayout RAW: ' . $bloglayoutRaw . '");</script>';
?>
