$(document).ready(function() {

    //$.ajax({url: }).success();

    var Quote = Backbone.Model.extend({
        url: 'apis/quote/quote.php'
            ,
        defaults: {
            link: 'default link',
            quote: 'default quote',
            source: 'default source'
        },
        initialize: function() {
        },
        validate: function() {
        },
// override backbone synch to force a jsonp call
        sync: function(method, model, options) {

            console.log('sync', method, model, options)
            var params = _.extend({
                type: 'GET',
                dataType: 'json',
                url: this.url,
            },
                options);

            return $.ajax(params);
        },
    });




    var QuoteView = Backbone.View.extend({
        initialize: function() {
            var that = this;
            this.model = new Quote();
            this.model.fetch().then(function() {
                that.render();
            });
        },
        events: {
            'click button': 'updateQuote'

        },
        updateQuote: function() {
            var that = this;
            this.model = new Quote();
            this.model.fetch().then(function() {
                that.render();
            });
            },
            render: function() {
            var template = _.template($('#quoteViewTemplate').html(), {quote: this.model});
            this.$el.html(template)

        },
    });
    var quoteView = new QuoteView({el: $('#quoteView')});

});