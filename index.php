<?php
global $wp_query;

require_once('functions.php');

$page = $wp_query->query_vars['pagename'];

if(empty($page)) {
    PageController::home();
}
else if ($page == 'a-propos') {
    PageController::about();
}

?>