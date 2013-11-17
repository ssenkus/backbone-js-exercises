$(document).ready(function() {

    var Slides = Backbone.Model.extend({
        defaults: {
            description: 'this is a test description'
            
        },
        initialize: function() {
            
            
        }
        
    });

    var CarouselSlides = Backbone.Collection.extend({
        model: Slides
    });


    var CarouselView = Backbone.View.extend({
        initialize: function() {
            this.render();
        },
        render: function() {
            var template = _.template($("#slide0-content").html(), {title: 'Slide 0 Title'});
            // Load the compiled HTML into the Backbone "el"
                        $('#carousel0').carousel();
            this.$el.html(template);

        },
        events: {
            'click #btnInfo': 'btnGetInfo'

        },
        btnGetInfo: function() {
            $('#myModal').modal({
                remote: 'modals/mountain.html'
            });
        }
    });
    
    var carousel = new CarouselView({el: $('#carousel-inner')});
    
});