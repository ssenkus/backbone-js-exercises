$(document).ready(function() {
    /*
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
     
     */
    var CarouselView = Backbone.View.extend({
        //el: '#carousel-inner',
        initialize: function() {
            this.render();
        },
        render: function() {
            var template = _.template($("#slide0-content").html(), {title: 'Slide 0 Title'});
            $('.item:eq(0)').html(template);
            $('#carousel0').carousel({
                interval: 5000,
                pause: 'hover'
            });

        },
        events: {
            'click #btnInfo': 'btnGetInfo',
            'click a.list-group-item': 'changeSlide'
        },
        btnGetInfo: function() {
            $('#myModal').modal({
                remote: 'modals/mountain.html'
            });
        },
        changeSlide: function(e) {
            var targetElem = $(e.currentTarget);
            var listItemNum = targetElem.index();
            targetElem.addClass('active').siblings().removeClass('active');
            $('#carousel0').carousel(listItemNum);    
        }

    });

    var carousel = new CarouselView({el: $('#carousel-container')});

});