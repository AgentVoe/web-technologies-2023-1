<?php
function buildGallery($imagesDir, $thumbnailsDir) {
    $images = glob($thumbnailsDir . "*.{jpg,jpeg,png,gif}", GLOB_BRACE);
    foreach ($images as $image) {
        $imageName = basename($image);
        echo '<a href="' . $imagesDir . $imageName . '" target="_blank">';
        echo '<img src="' . $image . '" alt="Thumbnail">';
        echo '</a>';
    }
}
?>