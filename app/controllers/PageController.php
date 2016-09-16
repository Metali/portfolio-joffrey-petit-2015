<?php

class PageController
{
    public function __construct() {}

    static public function home()
    {
        /*
        $projects = \Project::getAll();

        $var = array(
            'projects' => $projects
        );
        */
        self::render('home');
    }

    static public function render($template,$var = null)
    {
        if($var) extract($var);

        require_once(TEMPLATES_PATH . 'partials/header.php');
        require_once(TEMPLATES_PATH . 'partials/navbar.php');
        require_once(TEMPLATES_PATH . $template . '.php');
        require_once(TEMPLATES_PATH . 'partials/footer.php');
    }
}