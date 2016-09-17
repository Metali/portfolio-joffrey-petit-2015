<div id="home" class="container">
    <div id="last-images-preview">
        <?php foreach($projects as $project): ?>
            <a href="<?= $project['link'] ?>" class="home-project" id="project-<?= customID($project); ?>">
                <h2 id="title-<?= customID($project); ?>" class="home-project-title"><?= $project['title'] ?></h2>

                <div class="home-project_image" style="background:url('<?= $project['image']['medium']; ?>') no-repeat center center; ">
                    <img src="<?= $project['image']['small']; ?>" class="hidden-desktop hidden-tablet" id="image-<?= customID($project); ?>"/>
                </div>
            </a>
        <?php endforeach; ?>
    </div>
</div>