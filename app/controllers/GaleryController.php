<?php

class GaleryController extends BaseController {

    public function __construct() {
    }

    public function index() {
        $number = 20;
        $media = MediaModel::getMedia($number);
        $conf = json_encode(array(
            "page" => 1,
            "number" => $number
        ));

        parent::view("galery/index",[
            'media' => $media,
            'conf' => $conf
        ]);
    }
}