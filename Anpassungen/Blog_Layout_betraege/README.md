
Ausgabe in der Console gesamtes Item Objekt plain JSON
-----------------------------------------------------
echo '<script>console.log("item OBJ: ' . addslashes(json_encode($item)) . '");</script>';


Ausgabe in der Console gesamtes Item Objekt Baum
-----------------------------------------------------
echo '<script>console.log("item OBJ:", ' . json_encode($item) . ');</script>';



Zugriff auf RAW Wert von einem Custom Listen Feld
-------------------------------------------------
$rawValue = $item->jcfields['bloglayout']->rawvalue;




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
