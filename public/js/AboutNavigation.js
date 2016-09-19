app.aboutNavigation = {
    init: function() {

        var anchors = document.getElementsByClassName('about-anchor');

        for(var i=0; i<anchors.length;i++) {
            var id = anchors[i].id;
            document.getElementById(id).addEventListener("click", app.aboutNavigation.bindDot);
        }

        this.bindImage();
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
    },
    bindImage: function() {
        var height = document.getElementById('about').offsetHeight - window.innerHeight /2;
        var img = TweenMax.fromTo('#about-cover',0.3,{top:'0%'},{top:'10%'});
        this.scene('about',img,height, window.innerHeight / 2);

    },
    bindText: function() {
        var p = TweenMax.fromTo('#about-content p',0.3,{opacity:0},{opacity:1});
        var height = document.getElementById('about-content').offsetHeight - window.innerHeight /2;
        this.scene('about-content',img,height, window.innerHeight / 2);
    },
    scene: function(triggerElement,tween,duration,offset) {
        offset = offset || 0;

        var controller = new ScrollMagic.Controller();
        new ScrollMagic.Scene({
            triggerElement: '#' + triggerElement,
            duration: duration,
            offset:offset
        })
            .setTween(tween)
            .addIndicators()
            .addTo(controller)
    }
}

if(divExists('about')) {
    app.aboutNavigation.init();
}