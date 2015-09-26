<?php
function mediaModule($media)
{
    $view = "";
   
    foreach ($media as $picture) {

        $view .= '
        <a href="' . $picture["preview"][0] . '" class="picture">
            <img width="' . $picture["preview"][2] . '" height="' . $picture["preview"][1] . '" src="' . $picture["preview"][0] . '" />
        </a>
        ';
    }
    return $view;
};
