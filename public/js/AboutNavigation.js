app.aboutNavigation = {
    init: function() {
        var titles = document.getElementById('about-content').getElementsByTagName('h2');

        var newId = "";

        for(var i=0; i<titles.length;i++) {
            newId = app.aboutNavigation.addDot(titles[i]);
        }
    },
    addDot: function(title) {
        var textTitle = title.innerHTML;
        textTitle = textTitle.replace('<em>','');
        textTitle = textTitle.replace('</em>','');

        var id
        document.getElementById('navigation-dots').innerHTML += '<li data-anchor="' + textTitle + '"></li>';


    },
    bindDot: function() {
        var top = {value: 0};
        TweenMax.to(top, 2, {
            value: document.getElementById('projects').offsetTop, // PROJECTS Y
            onUpdate: function() {
                window.scrollTo(0,top.value);
            },
            ease: Power4.easeInOut
        });
    }
}

if(divExists('about')) {
    app.aboutNavigation.init();
}