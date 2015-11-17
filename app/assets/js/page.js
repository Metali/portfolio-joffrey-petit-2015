var JP = JP || {};

JP.page = {
    load:function() {
        $("#main").delay(500).animate({"opacity":"1"},500);
        $("#page-loader").delay(1000).fadeOut(500);
    }
};


$(document).ready(function() {
    JP.page.load();
});