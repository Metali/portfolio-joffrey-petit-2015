var JP = JP || {};

JP.galery = {
    imageSize: 300,
    gutter: 20,
    boxpreview: "",

    init: function () {
        JP.galery.setWidth();
        JP.galery.imageLoad();
        this.boxpreview = "";
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


    },
    boxPreview: function($this) {
        var image = $this.attr("href");
        console.log(image);

        if($("#box-preview").length > 0) {
            $("#box-preview").remove();
        }

        this.boxpreview = "<div id='box-preview'><img src='" + image + "' /></div>";
        $("body").prepend(this.boxpreview);
    }

};

$(document).ready(function () {
    if ($("#galery").length > 0) {
        JP.galery.init();

        $(window).on("resize", function () {
            JP.galery.setWidth();
        });

        $("body").on("click",".picture",function(e) {
            e.preventDefault();
            JP.galery.boxPreview($(this));
        })
    }
});