app.galery = {
    init: function() {
        if(app.responsive.isDesktop()) {
            app.galery.setMasonry();
        }

        TweenMax.staggerFromTo('img',0.2,{opacity:0},{opacity:0.4},0.5);

        var els = document.getElementsByClassName('galery-project');
        for(var i=0;i<els.length;i++) {
            app.galery.bindImage(els[i]);
        }
    },
    setMasonry: function() {
        new Masonry('#galery-projects', {
            itemSelector: '.galery-project',
            gutter: 100,
            columnWidth: 500
        });
    },

    bindImage: function(el) {
        var offsetTop = el.offsetTop - (document.getElementById('galery-projects').offsetTop / 4);

        var p = TweenMax.fromTo(el,1,{opacity:0,y:'50px'},{opacity:1,y:0});
        var duration = window.innerHeight / 3;
        this.scene('galery',p,duration, offsetTop);
    },
    scene: function(triggerElement,tween,duration,offset) {
        offset = offset || 0;

        var controller = new ScrollMagic.Controller();
        var scene = new ScrollMagic.Scene({
            triggerElement: '#' + triggerElement,
            duration: duration,
            offset:offset
        })
            .setTween(tween)
            .addTo(controller)

        app.scrollmagic.controllers.push(controller);
        app.scrollmagic.scenes.push(scene);
    },
}
