var app = {};

$(document).ready(function() {
  //  Backbone.Form.validators.errMessages.required = ''<img src="http://www.clker.com/cliparts/1/f/c/1/12379140591570510706dholler_ok.svg.med.png" width="30" height="30" />';

    app.lead = new Lead();
    app.formView = new FormView();
//    app.formView.initialize();
    $('.form_pop').on('click', function(e) {
        e.preventDefault();
        (app.formView.rendered) ? app.formView.popUp() : app.formView.render();
    });


});
