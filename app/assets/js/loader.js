var JP = JP || {};

JP.loader = {
    loader: '<span class="loader"><span class="icon-spinner"></span></span>',
    show: function($container) {
        $container.append(this.loader);
    },
    hide: function() {
        $("body .loader").fadeOut(500).queue(function(){
            $("body .loader").remove();
        });
    }
};