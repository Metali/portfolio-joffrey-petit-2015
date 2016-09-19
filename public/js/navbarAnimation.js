app.navbarAnimation = {
    menu: "nav-full",
    init: function () {
        document.getElementById('nav-menu').addEventListener('click', app.navbarAnimation.onclick);
    },
    onclick: function () {
        var navFull = document.getElementById(app.navbarAnimation.menu);

        if(hasClass(navFull,'active')) {
            removeClass(navFull,'active');
            app.navbarAnimation.hide();
        } else {
            navFull.className += 'active';
            app.navbarAnimation.show();
        }
    },
    closeButton: {
        show: function() {
            var timeline = new TimelineMax({repeat:0});
            timeline
                .to('#nav-menu div',0.2,{bottom:0,top:0,margin:'auto'})
                .to('#nav-menu div',0.2,{transform:'rotate(45deg)'})
                .to('#nav-menu div:nth-of-type(2)',0.2,{transform:'rotate(-45deg)'})
        },
        reset: function() {

            var timeline = new TimelineMax({repeat:0});
            timeline
                .to('#nav-menu div',0.2,{transform:'rotate(0deg)'})
                .to('#nav-menu div',0.2,{bottom:'7px',top:'21px',margin:'auto'})
                .to('#nav-menu div:nth-of-type(1)',0.2,{top:'7px',bottom:'21px',margin:'auto'})
        }
    },
    show: function() {
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
        TweenMax.to("#" + app.navbarAnimation.menu + ' li', 0, {opacity:0})
        TweenMax.fromTo("#page-content", 1, {x:0,opacity:1, ease: Power4.easeInOut}, {x:'50%',opacity:0,ease: Power4.easeInOut})
        TweenMax.fromTo("#" + app.navbarAnimation.menu, 1, {left:'-100%', ease: Power4.easeInOut}, {left:0,ease: Power4.easeInOut})

        app.navbarAnimation.closeButton.show();

        setTimeout(function() {
            TweenMax.staggerFromTo("#" + app.navbarAnimation.menu + ' li', 0.4,
                {y:'-10px',opacity:0,ease: Power4.easeInOut},
                {y:0,opacity:1,ease: Power4.easeInOut},
                0.1
            );
        },500)
    },
    hide: function() {
        TweenMax.staggerFromTo("#" + app.navbarAnimation.menu + ' li', 0.4,
            {y:0,opacity:1,ease: Power4.easeInOut},
            {y:'-10px',opacity:0,ease: Power4.easeInOut},
            0.1
        );
        setTimeout(function() {
            TweenMax.fromTo("#" + app.navbarAnimation.menu, 1, {left:0,ease: Power4.easeInOut},{left:'-100%', ease: Power4.easeInOut})
            TweenMax.fromTo("#page-content", 1, {x:'50%',opacity:0,ease: Power4.easeInOut},{x:'0%',opacity:1, ease: Power4.easeInOut})

            app.navbarAnimation.closeButton.reset();

            document.getElementsByTagName('body')[0].style.overflow = 'auto';
            setTimeout(function() {
                document.getElementById('page-content').style = '';
            },1000);
        },500)
    }
};

if (divExists('nav')) {
    app.navbarAnimation.init();
}