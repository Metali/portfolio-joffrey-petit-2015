<?php

class MediaFormator {
    public function __construct(){}

    public static function getThumbnail($media)
    {
        $data = [];

        foreach($media as $key => $image) {
            $data[]["full"] = $media[$key];
        }

        return $data;
    }
}