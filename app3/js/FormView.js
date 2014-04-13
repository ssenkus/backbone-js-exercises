/*
 * 
 * 
 * TODO: 
 * ----------------------------------------------------
 *     validation for inputs
 *     preloading images in CSS stylesheet
 * 
 */
var FormView = Backbone.View.extend({
    utils: {
        loadCSS: function(href) {
            var head = document.getElementsByTagName('head')[0];
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = href;
            head.appendChild(link);
        }
    },
    events: {
        // modal events
        //     'modal:close': 'logEvent',
        //     'modal:before-block': 'logEvent',
        //     'modal:block': 'logEvent',
        //     'modal:before-open': 'logEvent',
        //     'modal:open': 'logEvent',
        //     'modal:before-close': 'logEvent',
        // form events
        'click #page1Btn': 'validatePage1',
        'click #back': 'backToPage1',
        'click #SubmitButton': 'validatePage2',
        // TODOS
        'blur input': 'detectElem'
    },
    detectElem: function(e) {
        console.log('detectElem', e);
        var inputElem = $(e.target).attr('name');
        this.checkInput(inputElem);
    },
    showValidInputImg: function($elem, action) {
        console.log('showValidInputImg')
        if (action === 'show') {
            $elem.find('.successimg').show();
        } else {
            $elem.find('.successimg').hide();
        }
    },
    checkInput: function(elem) {
        console.log('checkInput', elem, this.form.fields[elem]);
        var formElem = this.form.fields[elem];
        var result = formElem.validate();

        // undefined/null are returned by validate if the input value is valid
        // return values = error
        if (result === undefined || result === null) {
            this.showValidInputImg(formElem.$el, 'show');
            return false;
        } else {
            this.showValidInputImg(formElem.$el, 'hide');
            return true;
        }
    },
    logEvent: function(e) {
        console.log('logged event', e.type);
    },
    initialize: function() {
        // images referenced in stylesheet must be preloaded to avoid FOUCs
        //  this.utils.loadCSS('http://www.duralabel.com/forms/formfiles/form.css');
        //  this.utils.loadCSS('http://www.gpcontent.com/global-includes/css/bootstrap.css');
        this.createForm();
    },
    rendered: false, // don't render more than once! This should be set/reset when using a lightbox
    render: function() {
        this.setElement('#modal');
        this.popUp();
        this.showPage(1);
        this.rendered = true;
        return this;

    },
    createForm: function() {
        console.log('createForm', this);


        // create the form and render it
        this.form = new Backbone.Form({
            model: app.lead,
            template: _.template($('#formTemplate_General').html()),
        }).render();

        console.log('form', this.form)
        //    this.form.setElement('#request_form');
        //    this.form.on('first_name:change', this.alertEvent);



        /*     this.listenTo(this.form, 'change', this.testEvent);
         this.listenTo(this.form, 'focus', this.focusEvent);
         this.listenTo(this.form, 'blur', this.blurEvent);
         */

    },
    blurEvent: function(e) {
        console.log('blur', e);
    },
    backToPage1: function() {
        this.showPage(1);
    },
    showPage: function(page) {
        switch (page) {
            case 1:
                $('#page1, #page1Btn').show();
                $('#page2, #SubmitButton').hide();
                break;
            case 2:
                $('#page1, #page1Btn').hide();
                $('#page2, #SubmitButton').show();
                break;
        }
    },
    validatePage1: function() {
        // get input field names from template data-fields attr
        var page1Fields = $('#page1 > div').data('fields').split(',');
        var errors = [];
        _.each(page1Fields, function(i) {
            errors.push(this.checkInput(i));
        }, this);

        // if no errors, proceed to page 2

        if (_.contains(errors, true)) {
            alert('errors');
        } else {
            this.showPage(2);
        }

    },
    validatePage2: function(e) {
        // stop auto form submit, validate first
        e.preventDefault();
        var page2Fields = $('#page2 > div').data('fields').split(',');
        var errors = [];
        _.each(page2Fields, function(i) {
            errors.push(this.checkInput(i));
        }, this);

        if (_.contains(errors, true)) {
            alert('errors')
        } else {
            // if no errors, submit the form!
            this.form.commit();
            alert("this form will submit\n\n check your console for the model data (JSON)\n\nthis data will eventually be sent to the server for processing")
            console.log('FORM MODEL DATA', this.form.model);
        }
    },
    popUp: function() {
        //console.log(this.form.$el)
        this.$el.append(this.form.$el).modal({
            fadeDuration: 200,
            fadeDelay: 0,
            modalClass: '',
            closeText: ''
        });
    },
    alertEvent: function(e) {
        alert('alert event');
    },
    focusEvent: function(e) {
        console.log('focus', e);
    }
});