<?php

function raise_image_size_limit() {
    return -1;
}
add_filter('wp_thumbnail_creation_size_limit','raise_image_size_limit');