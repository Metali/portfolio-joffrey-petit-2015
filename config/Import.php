<?php

class Import
{

    private $directory = ["functions/","models/","services/","controllers/"];

    public function __construct()
    {
        $this->importDirectory();
    }

    public function importDirectory()
    {
        foreach ($this->directory as $dir) {
            $handle = opendir(THEME_PATH . $dir);
            while (($entry = readdir($handle)) !== false) {
                if ($entry != "." && $entry != "..") {
                    $this->includeOrDie(THEME_PATH . $dir . $entry);
                }
            }
        }
    }

    public function includeOrDie($entry)
    {
        if(!include($entry)) {
            echo "<!-- Can't include $entry -->";
        }
    }
}