var MealPlanner = new Marionette.Application();

MealPlanner.addRegions({
    headerRegion: '#header-region',
    mainRegion: '#main-region',
    dialogRegion: '#dialog-region'
});

MealPlanner.navigate = function(route, options) {
    options || (options = {});
    Backbone.history.navigate(route, options);
};

MealPlanner.getCurrentRoute = function() {
    return Backbone.history.fragment;
};



MealPlanner.on('initialize:after', function() {
    console.log('after initialization');
    if (Backbone.history) {
        Backbone.history.start();

        if (this.getCurrentRoute() === "") {
            MealPlanner.trigger('meals:list');
//            Backbone.history.navigate("meals");
//            MealPlanner.MealsApp.List.Controller.listMeals();
        }

    }
    // MealPlanner.MealsApp.List.Controller.listMeals();
});