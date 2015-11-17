<?php
Class BaseController {

    public function __construct(){}

    /**
     * Create view and create variable in $args with their values
     *
     * @param $view
     * @param $data
     */
    public function view($view,$args = null)
    {
        if($args) {
            foreach($args as $variable => $value) {
                ${$variable} = $value;
            }
        }

        include(THEME_PATH . "views/" . $view . ".php");
    }

    public function json($args)
    {
        return json_encode($args);
    }
}