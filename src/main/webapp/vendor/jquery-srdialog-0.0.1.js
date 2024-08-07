/**
 * It create a simple Dialog to show the error or other messages after an incorrect login or other operation
 */
(function($, undefined) {
    "use strict";

    var progname = "[srdialog] ";

    $.widget("sr.srdialog", {
        options: {
            title: undefined,
            message: '',
            type: undefined, // can be 'info', 'success', 'error', 'warning'
            debug: false,
            contextError: "/TestChris/index.jsp",
        },

        _create: function() {
            var self = this;
            if (self.options.debug) { console.log(progname + '_create'); }
        },

        _init: function() {
            var self = this;
            if (self.options.debug) { console.log(progname + '_init'); }
            self._update();
        },

        _update: function() {
            var self = this;
            var dialogClass;

            if (self.options.debug) { console.log(progname + '_update'); }

            // Determine the dialog type class
            switch (self.options.type) {
                case 'success':
                    dialogClass = 'modal-success';
                    break;
                case 'error':
                    dialogClass = 'modal-error';
                    break;
                case 'warning':
                    dialogClass = 'modal-warning';
                    break;
                default:
                    dialogClass = 'modal-info';
            }

            // Update the modal content
            $('#srDialogModal').removeClass('modal-success modal-error modal-warning modal-info').addClass(dialogClass);
            $('#srDialogModalLabel').text(self.options.title);
            $('#srDialogModalMessage').text(self.options.message);

            // Show the modal
            $('#srDialogModal').modal('show');

            // Handle the OK button click
            $('#srDialogModalOkButton').off('click').on('click', function() {
                if (self.options.type === 'error') {
                    window.location.href = self.options.contextError;
                } else {
                    $('#srDialogModal').modal('hide');
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
