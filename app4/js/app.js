var MealPlanner = new Marionette.Application();

MealPlanner.addRegions({
    mainRegion: '#main-region'
});

MealPlanner.on('initialize:after', function() {
    console.log('after initialization');


});




