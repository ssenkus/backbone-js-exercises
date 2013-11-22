$(document).ready(function() {

    var Slide = Backbone.Model.extend({
        defaults: {
            id: -1,
            content: 'default content',
            sort_order: -1
        },
        initialize: function() {

        },
        validate: function() {
        },
        parse: function(res) {
            console.log('model', res);
            return res.data;
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
        //el: '#carousel-inner',
        collection: new CarouselSlides,
        initialize: function() {
            var self = this;
            this.collection.fetch().done(function() {
                self.render();
            });
            this.listItems = $('.list-group-item');
            this.render();
        },
        render: function() {
            var template = _.template($("#slide0-content").html(), {title: 'Slide 0 Title'});
            $('.item:eq(0)').html(template);
            $('#carousel0').carousel({
                interval: 0,
                pause: true
            });

            var coll = this.collection;
            console.log('this.collection', this.collection);

//            console.log(this.listItems);
//            this.collection.each(function(i) {
  //              console.log('log item.', i);
    //        });

        },
        events: {
            'click #btnInfo': 'btnGetInfo',
            'click a.list-group-item': 'changeSlide'
                // '': ''
        },
        btnGetInfo: function() {
            $('#myModal').modal({
                remote: 'modals/mountain.html'
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


    var carousel = new CarouselView({el: $('#carousel-container')});
});