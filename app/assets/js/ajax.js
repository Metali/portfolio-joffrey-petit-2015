var JP = JP || {};
JP.ajax = {
    isWorthLoad: function() {
        if($(window).height() >= $("#galery").height()) {
            JP.ajax.infiniteScroll();
        }
    },
    infiniteScroll: function() {
        if(this.getScroll() >= 70 && $(window).attr("ajax") == true && $(window).attr("infinitescroll") == true) {
            JP.ajax.getLastMedia();
        }
    },
    getScroll:function() {
        var galeryHeight = $("#galery").height();
        var currentScroll = $(document).scrollTop() + ($(document).height() / 2);
        var pourcentScroll = currentScroll / galeryHeight * 100;

        return pourcentScroll;
    },
    getLastMedia: function(callback) {

        if( $(window).attr("ajax") != true) {
            return false;
        }
        var conf = JSON.parse($("#galery").attr('data-conf'));

        $(window).attr("ajax",false);
        $(window).attr("infinitescroll",false);

        JP.loader.show($("#galery"));

        $.ajax({
            type: "GET",
            url: "/",
            data: {
               action: 'getLastMedia',
               conf: conf
            },
            dataType: "JSON",
            success: function (data) {
                var $view = $(data.view);
                var $conf = data.conf;
                if($view.length > 0) {
                    $("#galery")
                        .attr('data-conf',JSON.stringify($conf))
                        .append($view)
                        .imagesLoaded(function(){
                            $("#galery").masonry( 'appended', $view, true);
                        });

                    JP.galery.imageLoad(function(){
                        JP.loader.hide();
                    });
                    $(window).attr("ajax",true);
                } else {
                    JP.loader.hide();
                    $(window).attr("ajax",false);
                    $("#load-more").hide();
                    $("#galery").append("<p>Il n'y plus de photos à charger</p>")
                }

                if(callback) {
                    callback(data);
                }
            }
        });
    }
};

$(document).ready(function() {
    if($("#galery").length > 0) {

        $(window).attr("ajax",true);
        $("body").on("click","#box-preview", function() {
            $("#box-preview").remove();
        });

        $("body").on("click","#load-more",function() {
              JP.ajax.getLastMedia();
        });

    }
});