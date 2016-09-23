<?php

$ssl = isset($_SERVER['HTTPS']) ? 'https' : 'http';
define('SITE_URL', $ssl. '://' . $_SERVER['HTTP_HOST']);
define('TEMPLATES_PATH', dirname(__DIR__) . '/app/templates/');
define('APP_PATH', dirname(__DIR__) . '/app/');
define('ASSETS_MINIFIED_PATH', SITE_URL . '/wp-content/themes/joffreypetit-2017/public/compressed/');
define('PUBLIC_PATH', SITE_URL . '/wp-content/themes/joffreypetit-2017/public/');
