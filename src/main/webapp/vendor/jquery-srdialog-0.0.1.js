/**
 * It create a simple Dialog to show the error or other messages after an incorrect login or other operation
 */
(function($, undefined){
	"use strict";
	    
	var progname = "[srdialog] ";

	$.widget("sr.srdialog", {

        options: {
            title: undefined,
            message: '',
            type: undefined, // can be 'info', 'success', 'error', 'warning'
            debug: false,
			contextError : "/TestChris/index.jsp",
        },

        _create: function() {
            var self = this;
            if (self.options.debug) { console.log(progname + '_create'); }
            
            self.element.addClass('sr-dialog');

            // Create the dialog content
            self.element.append('<div class="sr-dialog-content"></div>');

            self._update();
        },

        _update: function() {
            var self = this;
            var dialogClass;

            if (self.options.debug) { console.log(progname + '_update'); }

            // Determine the dialog type class
            switch (self.options.type) {
                case 'success':
                    dialogClass = 'sr-dialog-success';
                    break;
                case 'error':
                    dialogClass = 'sr-dialog-error';
                    break;
                case 'warning':
                    dialogClass = 'sr-dialog-warning';
                    break;
                default:
                    dialogClass = 'sr-dialog-info';
            }

            // Set the dialog content
            self.element.find('.sr-dialog-content').html(self.options.message);

            // Add the appropriate class
            self.element.removeClass('sr-dialog-success sr-dialog-error sr-dialog-warning sr-dialog-info')
                .addClass(dialogClass);

            // Initialize the jQuery UI dialog
            self.element.dialog({
                title: self.options.title,
                modal: true,
                buttons: {
					OK: function() {
						//here do a control what is the type of the message, if type error redirect to login page
                        if (self.options.type === 'error') {
                            window.location.href = self.options.contextError;
                        } else {
                            $(this).dialog("close");
                        }
                    }
                }
            });
        },

        _setOption: function(key, value) {
            var self = this;

            if (self.options.debug) { console.log(progname + '_setOption'); }

            self._super(key, value);

            // Update the dialog when options change
            self._update();
        },

        _setOptions: function(options) {
            var self = this;

            if (self.options.debug) { console.log(progname + '_setOptions'); }

            self._super(options);

            // Update the dialog when multiple options change
            self._update();
        }
    });
})(jQuery);