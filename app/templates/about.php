<div id="about-navigation" style="height:<?= $anchor_menu_height ?>px">
    <ul id="navigation-dots">
        <?= $anchor_dots ?>
    </ul>
    <div id="dot-loading"></div>
</div>
<div id="about">
    <div id="about-content" class="page-content container">
        <?= $page['content']; ?>
    </div>
    <div id="about-cover">
        <img src="<?= $page['image']['full']; ?>" />
    </div>
</div>