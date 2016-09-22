<div id="galery">
    <div class="container">
        <div id="galery-projects">
            <?php foreach ($projects as $project): ?>
                <a href="<?= $project['link'] ?>" class="galery-project">
                    <h2 class="project-title"><?= $project['title'] ?></h2>
                    <img src="<?= $project['image']['medium'] ?>"/>
                </a>
            <?php endforeach; ?>
        </div>
    </div>
</div>
