MealPlanner.module('MealsApp.List', function(List, MealsApp, Backbone, Marionette, $, _) {
    List.Meal = Backbone.Marionette.ItemView.extend({
        template: '#meal-template',
        tagName: 'tr',
        events: {
            'click td': 'highlightName',
            'click button.deleteBtn': 'deleteClicked',
            "click td a.js-show": "showClicked"
        },
        showClicked: function(e) {
            e.preventDefault();
            e.stopPropagation();
            this.trigger("meal:show", this.model);
        },
        remove: function() {
            var self = this;
            this.$el.fadeOut(500, function() {
                Marionette.ItemView.prototype.remove.call(self)
            });

        },
        highlightName: function(e) {
            this.$el.toggleClass('warning')
            console.log('highlight toggled on model', this.model)
        },
        deleteClicked: function(e) {
            e.stopPropagation();
            //this.model.collection.remove(this.model)
            this.trigger('meal:delete', this.model);
        }
    });

    List.Meals = Backbone.Marionette.CompositeView.extend({
        tagName: 'table',
        className: 'table table-bordered table-striped table-hover',
        itemView: List.Meal,
        template: '#meal-list',
        itemViewContainer: 'tbody',
        //   MAPS to event handler 'itemview:meal:delete'
        onItemviewMealDelete: function() {
            this.$el.animate({'height': '0px'},
            1200, function() {
                $(this).fadeIn(200);
            });
        }
        //*/
    });



});




