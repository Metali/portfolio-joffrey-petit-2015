<?php
Routes::get("/","HomeController@index");
Routes::get("/galerie","GaleryController@index");
Routes::get("/a-propos","GaleryController@index");
Routes::get("/contact","GaleryController@index");

if(isset($_GET["action"])) {
    Routes::ajax('AjaxController@'.$_GET["action"]);
}
