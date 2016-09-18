<?php
class PageController
{
    public function __construct() {}

    static public function home()
    {
        $projects = \ProjectModel::get(4);

        $var = array(
            'projects' => $projects
        );
        self::render('home',$var);
    }

    static public function about()
    {

        $page = \PageModel::getContent();

        $string = $page["content"];
        $pattern = "/<h2 ?.*>(.*)<\/h2>/";
        preg_match_all($pattern, $string, $matches);

        $dots = "";
        $el = $matches[0];
        $anchorMenuHeight = 0;

        for($i=0;$i<count($el);$i++) {

            $search = array('<h2>','<h2 class="p1">','<em>','</em>','</h2>');
            $title = str_replace($search,'',$el[$i]);
            $contentTitle = $title;
            $title = strtolower($title);

            $title = str_replace(['É','é','ê','è','È'],'e',$title);
            $title = str_replace(['â','à','À'],'a',$title);
            $title = str_replace(['ç','Ç'],'c',$title);

            $dots .= "<li class='about-anchor' id='about-anchor-{$title}' data-anchor='about-title-{$title}'></li>";
            $page["content"] = str_replace($el[$i],'<h2 id="about-title-' . $title . '"><em>' . $contentTitle .'</em></h2>',$page['content']);
            $anchorMenuHeight += 30;
            if($i<(count($el)-1)) {
                $anchorMenuHeight += 100;
            }
        }

        $var = array(
            'page' => $page,
            'anchor_dots' => $dots,
            'anchor_menu_height' => $anchorMenuHeight
        );

        self::render('about',$var);
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