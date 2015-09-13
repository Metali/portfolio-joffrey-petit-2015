<!DOCTYPE html>
<head>
    <?php wp_head() ?>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" id="viewport" content="width=device-width, initial-scale=1, user-scalable=yes">
    <title><?php bloginfo('name'); ?></title>
    <link href="<?= get_template_directory_uri() ?>/app/assets/compiled/main.css" media="all" rel="stylesheet" type="text/css">
    <style>
        html { margin-top: 0px !important; }
        * html body { margin-top: 0px !important; }
        @media screen and ( max-width: 782px ) {
            html { margin-top: 0px !important; }
            * html body { margin-top: 0px !important; }
        }
    </style>
    <script>
        var theme_url = "<?= get_template_directory_uri(); ?>";
    </script>
</head>
<body>
<?php include(THEME_PATH . "views/partials/nav.php"); ?>
