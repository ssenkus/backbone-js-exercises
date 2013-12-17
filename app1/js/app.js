$(document).ready(function() {
    /*
     Backbone.sync = function(method, model) {
     console.log('method' + ": " + model.url);
     };
     */

    var Slide = Backbone.Model.extend({
        defaults: {
            id: -1,
            content: 'default content',
            sort_order: -1
        },
        initialize: function() {
            console.log('initialized model');
        },
        validate: function() {
        },
        parse: function(res) {
            console.log('model', res);
            return res;
        }
    });

    var CarouselSlides = Backbone.Collection.extend({
        model: Slide,
        url: 'slides.php',
        parse: function(response) {
            console.log('collection - response', response);
            return response.data;
        }
    });

    var CarouselView = Backbone.View.extend({
        collection: new CarouselSlides(),
        listItems: $('.list-group-item'),
        
        initialize: function() {
            var self = this;
            this.listenTo(this.collection, 'reset', this.render)
            this.collection.fetch().done(function() {
                self.render();
            });
        },
        render: function() {
            var template = _.template($("#slide0-content").html(), {title: 'Slide 0 Title'});
            $('.item:eq(0)').html(template);
            $('#carousel0').carousel({
                interval: 0,
                pause: true
            });
            this.collection.models.forEach(this.populate);
        },
        populate: function(a, b, c) {
           
            $('.item .slide_content').eq(b).append(a.get('slide_content'));
            $('.list-group-item-text').eq(b).text(a.get('menu_description'));
            $('.carousel-caption').eq(b).text(a.get('menu_header'));
            $('.list-group-item-heading').eq(b).text(a.get('menu_header'));
        },
        events: {
            'click #btnInfo': 'btnGetInfo',
            'click .list-group-item': 'changeSlide'

        },
        btnGetInfo: function() {
            $('#myModal').modal({
                remote: 'modals/mountain.html'
            });
        },
        changeSlide: function(e) {
            console.log(e)
            var $targetElem = $(e.currentTarget);
            var $listItemNum = $targetElem.index();
            $targetElem.addClass('active').siblings().removeClass('active');
            $('#carousel0').carousel($listItemNum);
            $('#carousel0').carousel({pause: true});
        }

    });


    window.carousel = new CarouselView({el: $('#carousel-container')});
    
});