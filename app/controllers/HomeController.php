<?php

class HomeController extends BaseController {

    public function __construct(){}

    public function index() {
        parent::view("home/index");
    }
}