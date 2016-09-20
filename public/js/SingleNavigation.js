app.singleNavigation = {
    init:function() {
        var img = document.getElementsByTagName('img');
        var duration = 0;
        for(var i=0;i<img.length;i++) {
            duration += img[i].offsetWidth + 100;

        }
        var height = duration - window.innerHeight + 300;
        duration += 500;

        document.getElementById('single').style.height = duration + 'px';
        document.getElementById('single-content').style.width= duration + 'px';

        var animation = TweenMax.fromTo('#single-content',duration,{x:'0'},{x:'-' + height + 'px'});

        this.scene('single',animation,duration,window.innerHeight / 2,'#single-content')
    },
    scene: function(triggerElement,tween,duration,offset,pin) {
        offset = offset || 0;

        var controller = new ScrollMagic.Controller();
        new ScrollMagic.Scene({
            triggerElement: '#' + triggerElement,
            duration: duration,
            offset:offset
        })
            .setTween(tween)
            .setPin(pin)
            //.addIndicators()
            .addTo(controller)
    },
}

if(divExists('single')) {
    app.singleNavigation.init();
}