$(document).ready(function() {



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
        el: $('#carousel-container'),
        collection: new CarouselSlides,
        listItems: $('.list-group-item'),
        initialize: function() {
            var self = this;
            //this.collection.bind('reset refresh', this.render, this);
            //this.collection.bind("reset", _.bind(this.render, this));
            this.listenTo(this.collection, 'sync', this.render);
            this.listenTo(this.collection, 'change', this.render);
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
            console.log('render dat view')
            this.populate();

        },
        populate: function() {
            this.collection.models.forEach(function(a, b, c) {
                $('.item .slide_content').eq(b).append(a.get('slide_content'));
                $('.list-group-item-text').eq(b).text(a.get('menu_description'));
                $('.carousel-caption').eq(b).text(a.get('menu_header'));
                $('.list-group-item-heading').eq(b).text(a.get('menu_header'));
            });
        },
        events: {
            'click #btnInfo': 'btnGetInfo',
            'click #btnSuccess': 'btnShowForm',
            'click .list-group-item': 'changeSlide'

        },
        btnGetInfo: function() {
            $('#myModal').modal({
                remote: 'modals/mountain.html'
            });
        },
        btnShowForm: function() {
            $('#formModal').modal({
                remote: 'modals/form.html'
            });            
        },
        changeSlide: function(e) {

            var $targetElem = $(e.currentTarget);
            var $listItemNum = $targetElem.index();
            $targetElem.addClass('active').siblings().removeClass('active');
            $('#carousel0').carousel($listItemNum);
            $('#carousel0').carousel({pause: true});
        }

    });


    window.carousel = new CarouselView();
    setInterval(function() {
        console.log(new Date().toString());
        window.carousel.collection.fetch();
        window.carousel.populate();
    }, 10000);

});