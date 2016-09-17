app.homeProjects = {
    animatedOffset: 5,
    init:function() {
        var els = document.getElementsByClassName('home-project');
        for(var i=0;i<els.length;i++) {
            els[i].addEventListener('mouseenter', app.homeProjects.show);
            els[i].addEventListener('mouseleave', app.homeProjects.hide);
        }
    },
    show: function() {
        var id = this.id;
        setTimeout(function() {
            setTimeout(function() {
                document.getElementById(id).getElementsByClassName('home-project-title')[0].className += ' active';
            },200)
        },200);
    },
    hide: function() {
        var id = this.id;
        removeClass(document.getElementById(id).getElementsByClassName('home-project-title')[0],'active');
    }
};

if(divExists('home')) {
    // app.homeProjects.init();
}