<?php
global $wp_query;

require_once('functions.php');

$page = $wp_query->query_vars['pagename'];

if(is_home()) {
    PageController::home();
}
else if ($page == 'a-propos') {
    PageController::about();
}
else if ($page == 'galerie') {
    PageController::galery();
}
else if (is_single()) {
    PageController::single();
}

?>
