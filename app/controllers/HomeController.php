<?php

class HomeController extends BaseController {

    public function __construct(){}

    public function index() {
        $page = MediaModel::getByPostSlug("accueil");
        parent::view("home/index");
    }
}