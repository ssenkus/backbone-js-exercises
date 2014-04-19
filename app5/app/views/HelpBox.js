var HelpBox = Backbone.View.extend({
    initialize: function(options) {
        this.model = options.model;
        console.log('HelpBox options', options)
        this.model.bind('change', this.render, this);
        this.render();
    },
    events: {
        'click': 'updateContents'
    },
    render: function() {
        var self = this;
        $.when(
            $('#helpBox').html(_.template($('#help-box-template').html(), {helpMessage: this.model})))
            .then(function() {
            self.setElement($("#helpBoxContainer"));
        });
        return this;

    }
});