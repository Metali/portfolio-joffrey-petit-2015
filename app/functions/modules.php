<?php
function mediaModule($media)
{
    $view = "";

    foreach ($media as $picture) {
        $view .= '
        <a href="' . $picture["preview"][0] . '" class="picture">
            <img src="' . $picture["preview"][0] . '" />
        </a>
        ';
    }
    return $view;
};