MealPlanner.module('HeaderApp', function(Header, MealPlanner, Backbone, Marionette, $, _) {




    var API = {
        listHeader: function() {
            Header.List.Controller.listHeader();
        }
    };

    MealPlanner.commands.setHandler("set:active:header", function(name) {
        MealPlanner.HeaderApp.List.Controller.setActiveHeader(name);
    });

    Header.on("start", function() {
        API.listHeader();
    });

});