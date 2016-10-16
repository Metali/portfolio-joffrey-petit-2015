<!DOCTYPE html>
<html lang="fr-fr">
<head>
    <title><?= get_bloginfo('name'); ?></title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta property="og:title" content="<?= get_bloginfo('name'); ?>">
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?= get_bloginfo('url'); ?>">
    <meta name="twitter:title" content="<?= get_bloginfo('name'); ?>">
    <meta name="twitter:description" content="<?= get_bloginfo('description'); ?>">
    <link rel="stylesheet" href="<?= ASSETS_MINIFIED_PATH ?>/main.css">
    <link rel="icon" type="image/png" href="/images/favicon-16x16.png" sizes="16x16">
    <title><?= get_bloginfo('name'); ?></title>
    <meta name="description" content="<?= get_bloginfo('description'); ?>">
    
    <?php //do_action('wp_head'); ?>
    <script>app={};imgLoaded=0;imgLoadedArray=[]</script>
	<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-47064352-4', 'auto');
  ga('send', 'pageview');

</script>
</head>
<?php
    $class = '';

    if(is_home()){
        $class = 'home';
    }

    if(is_single()) {
        $class = 'post';
    }

    if(is_page()) {
        $class = 'page-template';
    }

    if(is_archive()) {
        $class = 'archive';
    }
?>
<body class="<?= $class ?>">
