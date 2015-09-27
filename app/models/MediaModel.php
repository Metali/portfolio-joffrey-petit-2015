<?php

class MediaModel {
    public function __construct() {}

    public static function getMedia($number,$offset = 0) {

        $query_images_args = array(
            'post_type' => 'attachment', 'post_mime_type' =>'image', 'post_status' => 'inherit', 'posts_per_page' => $number, 'offset' => $offset
        );

        $query_images = new WP_Query( $query_images_args );
        $images = array();
        foreach ( $query_images->posts as $image) {

            $images[] = array(
                "preview" => wp_get_attachment_image_src( $image->ID,"medium"),
                "link" => wp_get_attachment_image_src( $image->ID,"large"),

            );
        }
        return $images;
    }

    public static function getByPostSlug($slug)
    {
        $args = array(
            'name'        => $slug,
            'post_type'   => 'post',
            'post_status' => 'publish',
            'numberposts' => -1
        );
        $post = get_posts($args);
        return get_attached_media('image',$post[0]->ID);
    }
}
