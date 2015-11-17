<?php

Class AjaxController {
    public function __construct() {

    }

    public function getLastMedia() {
        $conf = $_GET['conf'];

        $offset = $conf['number'] * $conf['page'];
        $media = MediaModel::getMedia($conf['number'],$offset);

        $finalConf = array(
            "page" => $conf['page']+1,
            "number" => $conf['number']
        );

        if($media) {
            foreach($media as $variable => $value) {
                ${$variable} = $value;
            }
        }

        $view = mediaModule($media);
        $result = array(
            'view' => $view,
            'conf' => $finalConf
        );

        echo json_encode($result);
        return;
    }

    public function view($view,$args = null)
    {

    }

}