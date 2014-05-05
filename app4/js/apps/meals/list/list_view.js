MealPlanner.module('MealsApp.List', function(List, MealsApp, Backbone, Marionette, $, _) {

    List.Layout = Backbone.Marionette.Layout.extend({
        template: '#meals-list-layout',
        regions: {
            panelRegion: '#panel-region',
            mealsRegion: '#meals-region'
        }
    });

    List.Panel = Backbone.Marionette.ItemView.extend({
        template: '#meals-list-panel',
        triggers: {
            'click button.js-new': 'meal:new'
        }
    });

    List.Meal = Backbone.Marionette.ItemView.extend({
        template: '#meal-list-item',
        tagName: 'tr',
        events: {
            'click td': 'highlightName',
            'click button.js-delete': 'deleteClicked',
            'click td a.js-edit': 'editClicked',
            "click button.js-show": "showClicked"
        },
        editClicked: function(e) {
            e.preventDefault();
            e.stopPropagation();
            this.trigger('meal:edit', this.model);

        },
        showClicked: function(e) {
            e.preventDefault();
            e.stopPropagation();
            this.trigger("meal:show", this.model);
        },
        deleteClicked: function(e) {
            e.stopPropagation();
            //this.model.collection.remove(this.model)
            this.trigger('meal:delete', this.model);
        },
        remove: function() {
            var self = this;
            this.$el.fadeOut(500, function() {
                Marionette.ItemView.prototype.remove.call(self);
            });

        },
        flash: function(cssClass) {
            var $view = this.$el;
            $view.hide().toggleClass(cssClass).fadeIn(800, function() {
                setTimeout(function() {
                    $view.toggleClass(cssClass);
                }, 500);
            });

        },
        highlightName: function(e) {
            this.$el.toggleClass('warning')
            console.log('highlight toggled on model', this.model)
        },
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




