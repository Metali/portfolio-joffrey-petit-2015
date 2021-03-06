<?php
require_once('config/constants.php');
require_once('config/autoloader.php');

add_theme_support( 'post-thumbnails' );
set_post_thumbnail_size( 300, 600, true );
add_image_size( 'image-preview', 500, 9999 );

/* Thanks Ganey : https://gist.github.com/ganey/1e8b86311a475afec49daea1170d5816 */
function adjustColor($hex, $steps) {
    // Steps should be between -255 and 255. Negative = darker, positive = lighter
    $steps = max(-255, min(255, $steps));
    // Normalize into a six character long hex string
    $hex = str_replace('#', '', $hex);
    if (strlen($hex) == 3) {
        $hex = str_repeat(substr($hex,0,1), 2).str_repeat(substr($hex,1,1), 2).str_repeat(substr($hex,2,1), 2);
    }
    // Split into three parts: R, G and B
    $color_parts = str_split($hex, 2);
    $return = '#';
    foreach ($color_parts as $color) {
        $color   = hexdec($color); // Convert to decimal
        $color   = max(0,min(255,$color + $steps)); // Adjust color
        $return .= str_pad(dechex($color), 2, '0', STR_PAD_LEFT); // Make two char hex code
    }
    return $return;
}

function customID($project) {
    return $project['slug'] . '-' . $project['id'];
}

add_filter( 'get_post_metadata', 'ps_default_disable_links', 10, 4 );
function ps_default_disable_links( $value, $object_id, $meta_key, $single ) {
    if( '_promo_slider_disable_links' == $meta_key ) {
        $value = 'true';
    }
    return $value;
}