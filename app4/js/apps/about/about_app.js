MealPlanner.module('AboutApp', function(AboutApp, MealPlanner, Backbone, Marionette, $, _) {
    AboutApp.Router = Marionette.AppRouter.extend({
        appRoutes: {
            'about': 'showAbout'
        }
        
    });
    
    var API = {
      showAbout: function() {
          AboutApp.Show.Controller.showAbout();
          MealPlanner.execute('set:active:header', 'about');
      }  
        
    };
    
    MealPlanner.on('about:show', function() {
        MealPlanner.navigate('about');
        API.showAbout();
    });
    
    MealPlanner.addInitializer(function(){
        new AboutApp.Router({
           controller: API 
        });
    });
    
    
});