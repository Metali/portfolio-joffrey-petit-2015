<?php

Class Routes
{

    public function __construct(){}

    /**
     * For the route, load a $controller and his $method if exist
     *
     * @param $route
     * @param $controller
     */
    public static function get($route, $args)
    {
        if ($_SERVER["REQUEST_URI"] == $route) {
            header("HTTP/1.1 200 OK");
            $controller = explode("@", $args);

            new $controller[0];

            if (count($controller) > 1) {
                call_user_func($controller);
            }
        }
    }

    public static function ajax($args)
    {
        header("HTTP/1.1 200 OK");
        $controller = explode("@", $args);

        new $controller[0];

        if (count($controller) > 1) {
            call_user_func($controller);
        }
    }

    public function get404()
    {
        echo "404";
    }

}