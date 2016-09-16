<?php
class Autoload {
    private $directory = ["models/","controllers/"];
    public function __construct()
    {
        $this->importDirectory();
    }
    public function importDirectory()
    {
        foreach ($this->directory as $dir) {
            $handle = opendir(APP_PATH . $dir);

            while (($entry = readdir($handle)) !== false) {
                if ($entry != "." && $entry != "..") {
                    $this->includeOrDie(APP_PATH . $dir . $entry);
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

new Autoload();