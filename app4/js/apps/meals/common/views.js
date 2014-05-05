MealPlanner.module('MealsApp.Common.Views', function(Views, MealPlanner, Backbone, Marionette, $, _) {

    Views.Form = Marionette.ItemView.extend({
        template: '#meal-form',
        events: {
            'click button.js-submit': 'submitClicked'

        },
        submitClicked: function(e) {
            e.preventDefault();
            var data = Backbone.Syphon.serialize(this);
            this.trigger('form:submit', data);
        },
           
            
        onRender: function() {

            if (!this.options.asModal || this.options.asModal === undefined) {
                var $title = $('<h1>', {text: this.viewTitle});
                this.$el.prepend($title);
            }
        },
        onShow: function() {

            if (this.options.asModal) {
                this.$el.dialog({
                    modal: true,
                    title: this.viewTitle,
                    width: 'auto'
                });
            }
        },
        onFormDataInvalid: function(errors) {
            console.log('invalid form data', errors);
            var $view = this.$el;
            var clearFormErrors = function() {
                var $form = $view.find("form");
                $form.find(".help-inline.has-error").each(function() {
                    $(this).remove();
                });
                $form.find(".control-group.has-error").each(function() {
                    $(this).removeClass("error");
                });
            };

            var markErrors = function(value, key) {
                var $controlGroup = $view.find("#meal-" + key).parent();
                var $errorEl = $("<span>", {
                    class: "help-inline has-error",
                    text: value
                });
                $controlGroup.append($errorEl).addClass("has-error");
            };

            clearFormErrors();
            _.each(errors, markErrors);

        }
            
    });


});