loading = {}, endLoading = false;

app.loader = {
    init:function() {
        this.start();
    },
    start: function(data,link) {
        endLoading = false;

        if(typeof link == 'undefined') {
            link = window.location.pathname
        }

        link = link.replace(window.location.origin,'');
        window.history.pushState(null, '', link);

        if(typeof data != 'undefined') {
            document.getElementById('page-content').innerHTML = data.response;
        }
        app.loader.bindSection();

        app.loader.preload(function() {
        })
    },
    preload: function(callback) {

        /*loading = setInterval(function(){

            if(document.readyState == 'loaded') {
                app.loader.update(25);
            }

            if(document.readyState == 'interactive') {
                app.loader.update(40);
            }

            if(document.readyState == 'complete') {
                app.loader.update(100);
            }

            if(endLoading) {
                clearInterval(loading);
                app.loader.$loaderDOM.hide(callback);
            }
        },100);

        */

        setTimeout(function() {
            app.loader.$loaderDOM.hide(callback);
        },2000)
    },
    update: function(percent) {
        TweenMax.to('#loading-bar .loading-updating',0.2,{width:percent + '%'})

        if(percent == 100) {
            endLoading = true;
        }
    },
    $loaderDOM: {
        show: function(callback) {
            document.getElementById('loader').style.zIndex = 600;

            var timeline = new TimelineMax({repeat:0,onComplete:function() {
                if(typeof callback == 'function') {
                    callback();
                }
                window.scrollTo(0,0);
            }})

            timeline
                .to('#loading-bar .loading-updating',0,{width:'0'})
                .to('#page-content',0.3,{opacity:0})
                .staggerFromTo('#nav a',0.3,{opacity:1},{opacity:0},0.3)
                .fromTo('#loader',0.3,{opacity:0},{opacity:1})

        },
        hide: function(callback) {
            var timeline = new TimelineMax({repeat:0, onComplete: function() {
                document.getElementById('loader').style.zIndex = 0;

                if (typeof callback == 'function') {
                    callback();
                }
            }});

            timeline
                .fromTo('#loader',0.3,{opacity:1},{opacity:0})
                .staggerFromTo('#nav a',0.3,{opacity:0},{opacity:1},0.3)
                .to('#page-content',0.3,{opacity:1})
        }
    },
    bindSection: function() {
        app.scrollmagic.destroy();
        window.removeEventListener('scroll',app.aboutNavigation.animeOnScroll);

        app.AjaxBinder.init();
        if(divExists('single')) {
            app.single.init();
        }

        if(divExists('about')) {
            app.aboutNavigation.init();
            window.addEventListener('scroll', app.aboutNavigation.animeOnScroll);
        }

        if(divExists('galery')) {
            app.galery.init();
        }
    }
};

app.loader.init();