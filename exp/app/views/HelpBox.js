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
        var view = this;
        $.when(
            $('#helpBox').html(_.template($('#help-box-template').html(), {helpMessage: this.model})))
            .then(function() {
            view.setElement($("#helpBoxContainer"));
        });
        return this;

    }
});