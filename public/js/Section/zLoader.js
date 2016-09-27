loading = {}, endLoading = false, loaderWidth = 0;

app.loader = {
    init:function() {
        app.loader.$loaderDOM.show(
           app.loader.start()
        )
    },
    start: function(data,link) {
        allImgLoaded = false;
        endLoading = false;
        loaderWidth = 0;
        imgLoaded = 0;
        if(typeof link == 'undefined') {
            link = window.location.pathname
        }

        link = link.replace(window.location.origin,'');
        window.history.pushState(null, '', link);

        setTimeout(function() {
            if(typeof data != 'undefined') {
                document.getElementById('page-content').innerHTML = data.response;
            }
        },500);

        app.loader.preload(function() {})
    },
    preload: function(callback) {

        loading = setInterval(function(){
            app.loader.update(10);

            app.loader.preloadImg();

            waitForImgThen(function() {
                if(document.readyState == 'complete') {
                    setTimeout(function() {
                        app.loader.update(100);
                        endLoading = true;
                    },1000)
                }
            });

            if(endLoading) {
                clearInterval(loading);
                app.loader.$loaderDOM.hide(callback);
            }
        },500);
    },
    preloadImg: function() {
        var img = document.getElementsByTagName('img');
        var percent = loaderWidth;
        var finalPercent = (50 / img.length) * imgLoaded;
        app.loader.update(percent + finalPercent);
    },
    update: function(percent) {
        if(percent < loaderWidth || percent > 100) return;

        loaderWidth = percent;
        TweenMax.to('#loading-bar .loading-updating',0.2,{width:percent + '%'})
    },
    $loaderDOM: {
        show: function(callback) {

            document.getElementById('loader').style.zIndex = 600;

            var t = new TimelineMax({repeat:0,onComplete:function() {
                document.getElementById('loader').className += ' active';
                if(typeof callback == 'function') {
                    callback();
                }
                window.scrollTo(0,0);
            }})

                t
                .to('#loading-bar .loading-updating',0,{width:'0'})
                .to('#page-content',0.3,{opacity:0})
                .staggerTo('#nav a',0.3,{opacity:0},0.3)
                // .fromTo('#loader',0.3,{opacity:0},{opacity:1})

        },
        hide: function(callback) {

            app.loader.bindSection();

            var t = new TimelineMax({repeat:0, onComplete: function() {
                document.getElementById('loader').style.zIndex = 0;
                if (typeof callback == 'function') {
                    callback();
                }
            }})

                removeClass(document.getElementById('loader'),'active');

                t
                // .fromTo('#loader',0.3,{opacity:1},{opacity:0})
                .staggerTo('#nav a',0.3,{opacity:1},0.3)
                .to('#page-content',0.3,{opacity:1})
        }
    },
    bindSection: function() {
        if(!app.responsive.isDesktop()) return;

        
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