MealPlanner.module('HeaderApp.List', function(List, MealPlanner, Backbone, Marionette, $, _) {

    List.Controller = {
        listHeader: function() {
            var links = MealPlanner.request('header:entities');
            var headers = new List.Headers({collection: links});

            headers.on('brand:clicked', function() {
                MealPlanner.trigger('meals:list');

            });

            headers.on('itemview:navigate', function(childView, model) {
                var trigger = model.get('navigationTrigger');
                MealPlanner.trigger(trigger);
                
            });
            MealPlanner.headerRegion.show(headers);

        },
        setActiveHeader: function(headerUrl) {
            var links = MealPlanner.request('header:entities');
            var headerToSelect = links.find(function(header) {
                return header.get('url') === headerUrl;

            });
            headerToSelect.select();
            links.trigger('reset')
        }

    };

});