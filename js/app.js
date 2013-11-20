$(document).ready(function() {

    var Slides = Backbone.Model.extend({
        defaults: {
            id: -1,
            content: 'default content',
            sort_order: -1
        },
        initialize: function() {
            _.bindAll(this);
        },
        validate: function() {
        },
        parse: function(res) {
            alert(res);
            return res.data;
        }
    });

    var CarouselSlides = Backbone.Collection.extend({
            model: Slides,
        url: function() {
            return  window.location.hostname + window.location.pathname + 'slides.php';
        },
        parse: function(response) {
            alert(response);
            return response.data;

        }

    });

    var CarouselView = Backbone.View.extend({
        //el: '#carousel-inner',
        initialize: function() {
            this.slides = new CarouselSlides();
            //this.slides.bind('all', this.render, this);
            this.slides.fetch();
            console.log('this.slides', this.slides);  
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