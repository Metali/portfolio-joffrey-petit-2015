app.aboutNavigation = {
    scenes: [],
    controllers: [],

    init: function () {

        var anchors = document.getElementsByClassName('about-anchor');
        for (var i = 0; i < anchors.length; i++) {

            if (typeof anchors[i] !== undefined) {
                var id = anchors[i].id;
                document.getElementById(id).addEventListener("click", app.aboutNavigation.bindDot);
            }
        }


        this.bindImage();

        var p = document.getElementById('about-content').getElementsByTagName('p');

        for (var x = 0; x < p.length; x++) {
            app.aboutNavigation.bindText(p[x]);
        }

        var h3 = document.getElementById('about-content').getElementsByTagName('h3');

        for (var z = 0; z < h3.length; z++) {
            app.aboutNavigation.bindText(h3[z]);
        }

        var h2 = document.getElementById('about-content').getElementsByTagName('h2');

        for (var y = 0; y < h2.length; y++) {
            app.aboutNavigation.bindText(h2[y]);
        }

    },
    bindDot: function () {
        var doc = document.documentElement;
        id = this.dataset.anchor;
        var top = {value: (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)};

        TweenMax.to(top, 1.5, {
            value: document.getElementById(id).offsetTop, // PROJECTS Y
            onUpdate: function () {
                window.scrollTo(0, top.value);
            },
            ease: Power4.easeInOut
        });
    },
    bindImage: function () {
        var img = TweenMax.fromTo('#about-cover', 0.3, {top: '0%'}, {top: '10%'});
        var duration = document.getElementById('about').offsetHeight - window.innerHeight;
        this.scene('about', img, duration, window.innerHeight / 2);
    },
    bindText: function (el) {

        if(typeof el == 'undefined') return;

        var offsetTop = el.offsetTop - (document.getElementById('about-content').offsetTop / 4);

        var p = TweenMax.fromTo(el, 0.3, {opacity: 0, y: '50px'}, {opacity: 1, y: 0});
        var duration = window.innerHeight / 10;
        this.scene('about', p, duration, offsetTop);
    },
    scene: function (triggerElement, tween, duration, offset) {
        offset = offset || 0;

        var controller = new ScrollMagic.Controller();
        var scene = new ScrollMagic.Scene({
            triggerElement: '#' + triggerElement,
            duration: duration,
            offset: offset
        })
            .setTween(tween)
            .addTo(controller)

        app.scrollmagic.controllers.push(controller);
        app.scrollmagic.scenes.push(scene);
    },
    animeOnScroll: function (e) {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        top += (document.getElementById('about-content').offsetTop / 4);

        app.aboutNavigation.animeDot(top);
        app.aboutNavigation.animeDotLoading(top);
    },
    animeDot: function (top) {
        var percentLoaded = 0;
        var anchors = document.getElementsByClassName('about-anchor');
        for (var i = 0; i < anchors.length; i++) {
            var titleId = anchors[i].dataset.anchor;
            if (document.getElementById(titleId).offsetTop < top) {
                if (!hasClass(anchors[i], 'active')) {
                    anchors[i].className += ' active';
                    document.getElementById(titleId).className += ' active';
                }
            } else {
                removeClass(anchors[i], 'active');
                removeClass(document.getElementById(titleId), 'active');
            }

            document.getElementById('dot-loading').style.height = percentLoaded + '%';
        }
    },
    animeDotLoading: function (top) {
        var blocHeight = document.getElementById('about-content').offsetHeight - 300;
        var percentLoaded = ( top * 100) / blocHeight;

        document.getElementById('dot-loading').style.height = percentLoaded + '%';
    }
}
