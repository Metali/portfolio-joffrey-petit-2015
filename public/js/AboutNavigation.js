app.aboutNavigation = {
    init: function() {

        var anchors = document.getElementsByClassName('about-anchor');

        for(var i=0; i<anchors.length;i++) {
            var id = anchors[i].id;
            document.getElementById(id).addEventListener("click", app.aboutNavigation.bindDot);
        }
    },
    bindDot: function() {

        var doc = document.documentElement;

        id = this.dataset.anchor;
        var top = {value: (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0)};
        TweenMax.to(top, 1, {
            value: document.getElementById(id).offsetTop, // PROJECTS Y
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