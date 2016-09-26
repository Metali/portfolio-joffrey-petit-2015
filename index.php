<?php
global $wp_query;

require_once('functions.php');

$page = $wp_query->query_vars['pagename'];


if($_GET['ajax'] == true ) {
    define('AJAX_CALL',true);
}

if(is_home()) {
    PageController::galery();
}
else if ($page == 'a-propos') {
    PageController::about();
}
else if (is_single()) {
    PageController::single();
}

?>
