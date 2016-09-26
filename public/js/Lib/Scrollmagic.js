app.scrollmagic = {
    scenes: [],
    controllers: [],

    destroy: function () {

        if(app.scrollmagic.controllers.length == 0) return;

        for (var s = 0; s < app.scrollmagic.scenes.length; s++) {
            app.scrollmagic.scenes[s].destroy(true);
        }

        for (var c = 0; c < app.scrollmagic.controllers.length; c++) {
            app.scrollmagic.controllers[c].destroy(true);
        }

        app.scrollmagic.controllers = [];
        app.scrollmagic.scenes = [];
    },
}