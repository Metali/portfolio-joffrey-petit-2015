var JP = JP || {};

JP.galery = {
    imageSize: 300,
    gutter: 20,

    init: function () {
        JP.galery.setWidth();
        JP.galery.imageLoad();
    },
    setWidth: function () {
        var capacity = $(window).width() / (JP.galery.imageSize + JP.galery.gutter);
        var finalWidth = Math.floor(capacity) * (JP.galery.imageSize + JP.galery.gutter);
        $("#galery").css({'width': finalWidth});
    },
    imageLoad: function(callback) {

        var $grid = $("#galery").masonry({
            itemSelector: '.picture',
            gutter: JP.galery.gutter
        });

        $grid
            .imagesLoaded()
            .progress(function(instance, image) {
                $(image.img)
                    .animate({"opacity":"1"},300);

                $grid.masonry('layout');
            })

            .always(function(){
                if(callback) {
                    callback();
                }
            });


    }

};

$(document).ready(function () {
    if ($("#galery").length > 0) {
        JP.galery.init();

        $(window).on("resize", function () {
            JP.galery.setWidth();
        });
    }
});