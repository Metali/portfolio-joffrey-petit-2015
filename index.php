<?php
define("THEME_PATH", __DIR__ . "/app/");

include("config/Import.php");
include("config/Routes.php");

new Import;
new Routes;

include("routes.php");

