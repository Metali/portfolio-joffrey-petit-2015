<?php


class PostFormator {
    public static $instance;
    public static $postFormated;

    public function __construct() {}

    static public function formatFeatured($posts)
    {
        $formatedPosts = self::formatPreview($posts);

        foreach($formatedPosts as $post)
        {

            $post['cover'] = wp_get_attachment_image_src( get_post_thumbnail_id( $post['id'] ), 'full' )[0];
            $featured[] = $post;
        }

        return $featured;
    }

    static public function formatPreview($posts)
    {
        $formatedPost = array();
        foreach($posts as $key => $post)
        {
            $formated = array(
                'id' => $post->ID,
                'author' => get_userdata($post->post_author)->display_name,
                'author_link' => get_author_posts_url( $post->post_author),
                'cover' =>  wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'full' )[0],
                'cover_phone' =>  wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'thumbnail' )[0],
                'title' => $post->post_title,
                'date' => get_the_date( 'j M Y', $post->ID ),
                'link' => get_permalink($post->ID),
                'category' => get_the_category( $post->ID )[0]->name,
                'chapo' => strip_tags(getExcerpt($post->post_content,200))
            );

            $formated['color'] = getCategoryColor(get_the_category($post->ID)[0]->cat_ID);
            $formated['category_link'] = get_category_link(get_the_category( $post->ID )[0]->cat_ID,$post->cat_ID);
            $formatedPost[] = $formated;

        }

        return $formatedPost;
    }

    static public function formatForPost($post)
    {

        $formated = array(
            'id' => $post->ID,
            'author' => get_userdata($post->post_author)->display_name,
            'author_link' => get_author_posts_url( $post->post_author),
            'cover' =>  wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'full' )[0],
            'cover_phone' =>  wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'thumbnail' )[0],
            'title' => $post->post_title,
            'comments' => $post->comment_count,
            'date' => get_the_date( 'j M Y', $post->ID ),
            'link' => get_permalink($post->ID),
            'category' => get_the_category( $post->ID )[0]->name,
            'chapo' => strip_tags(getExcerpt($post->post_content,200)),
            'content' => apply_filters ("the_content", $post->post_content),
        );

        $formated['next_post'] = [];
        $formated['prev_post'] = [];

        if(get_previous_post()) {
            $formated['prev_post'] = ['title' => get_previous_post()->post_title, 'link' => get_permalink(get_previous_post()->ID)];
        }

        if(get_next_post()) {
            $formated['next_post'] = ['title' => get_next_post()->post_title, 'link' => get_permalink(get_next_post()->ID)];
        }

        $formated['color'] = getCategoryColor(get_the_category($post->ID)[0]->cat_ID);
        $formated['category_link'] = get_category_link(get_the_category( $post->ID )[0]->cat_ID,$post->cat_ID);


        self::$postFormated = $formated;

        return $formated;
    }

    static public function getInstance() {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }
}