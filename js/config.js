requirejs.config({
    deps: ['app'],

    paths: {
        "backbone" : "../libs/backbone",
        "jquery" : "../libs/jquery-min",
        "underscore" : "../libs/underscore"

    },
    shim: {
        "backbone" : {
            deps: ["jquery", "underscore"],
            exports: "Backbone"
        }
    }
});
