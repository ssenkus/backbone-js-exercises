var Quote = Backbone.Model.extend({
    url: function() {
        return 'http://www.iheartquotes.com/api/v1/random?format=json';
    },
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
// Default JSON-request options.
        var params = _.extend({
            type: 'GET',
            dataType: 'jsonp',
            url: model.url(),
            jsonp: 'jsonp',//"jsonpCallback", // the api requires the jsonp callback name to be this exact name
            processData: false
        },
        options);

// Make the request.
        return $.ajax(params);
    },
    parse: function(response) {
// parse can be invoked for fetch and save, in case of save it can be undefined so check before using
        if (response) {
            if (response.success) {
                    alert('sdf');
// here you write code to parse the model data returned and return it as a js object
// of attributeName: attributeValue
                return {
                    link: response.link,
                    source: response.source,
                    quote: response.quote
                }; 
            }
        }
    }

});

var quote = new Quote;
quote.fetch({dataType: "jsonp"});
console.log(quote);


/*
var Quotes = Backbone.Collection.extend({
    model: Quote,
    url: function() {
        return 'http://api.theysaidso.com/qod.json?category=management';
    }

});
var quotes = new Quotes;
quotes.fetch({dataType: "jsonp"});
quotes.each(function(i) {
    console.log(i)

});

*/