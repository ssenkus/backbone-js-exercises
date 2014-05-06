MealPlanner.module('AboutApp.Show', function(Show, MealPlanner, Backbone, Marionette, $, _) {
    
    Show.Controller ={
        showAbout: function() {
            var view = new Show.Message();
            MealPlanner.mainRegion.show(view);
            
        }
        
    }
    
});