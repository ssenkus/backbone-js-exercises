var HelpBox = Backbone.View.extend({
    initialize: function() {
        
        this.render();
    },
    render: function() {
          var view = this;
        $.when(
            $('#helpBox').html(_.template($('#help-box-template').html()
            )))
            .then(function() {
            view.setElement($("#helpBoxContainer"));
        });
        return this;
    
    }
    
    
});