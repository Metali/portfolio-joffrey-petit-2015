<?php
Routes::get("/","HomeController@index");
Routes::get("/galerie","GaleryController@index");


if(isset($_GET["action"])) {
    Routes::ajax('AjaxController@'.$_GET["action"]);
}