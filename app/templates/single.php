<div id="single" class="container">
    <div id="single-container">
        <h2><?= $page['title'] ?></h2>
        <div id="single-content">
            <?= $page['content'] ?>
            <?php if($page['next_post']): ?>
            <div id="next-post">
                <a href="<?= $page['next_post']['link'] ?>">
                    <p>Album précédent</p>
                    <p class="album-title"><?= $page['next_post']['title'] ?></p>
                </a>
            </div>
            <?php endif; ?>
        </div>
    </div>
</div>