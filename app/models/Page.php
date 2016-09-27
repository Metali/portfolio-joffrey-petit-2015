<?php


class PageModel
{
    static public function getContent()
    {
        global $post;
        
        $formatedPage = array();
        $formatedPage['id'] = $post->ID;
        $formatedPage['title'] = $post->post_title;
        $formatedPage['link'] = get_permalink($post->ID);
        $formatedPage['slug'] = $post->post_name;
        $formatedPage['description'] = $post->post_excerpt;
        $formatedPage['has_description'] = !empty($post->post_excerpt);

        $formatedPage['image'] = array(
            'full' => wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full' )[0],
            'medium' => wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'image-preview' )[0],
            'small' => wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'thumbnail' )[0]
        );

        $formatedPage['content'] = $post->post_content;
        $formatedPage['has_content'] = !empty($post->post_content);

        $formatedPage['next_post'] = [];

        //$formatedPage['medias'] = get_attached_media( '', $post->ID );

        if(get_previous_post()) {
            $formatedPage['next_post'] = ['title' => get_previous_post()->post_title, 'link' => get_permalink(get_previous_post()->ID)];
        }

        return $formatedPage;
    }
}