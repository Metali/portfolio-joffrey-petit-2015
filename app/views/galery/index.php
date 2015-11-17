<?php include(THEME_PATH . "views/header.php"); ?>

<div id="galery" data-conf='<?= $conf ?>'>
    <?php echo mediaModule($media); ?>
</div>
<button id="load-more" class="square-button">plus de photos</button>

<?php include(THEME_PATH . "views/footer.php"); ?>