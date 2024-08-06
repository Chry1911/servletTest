/**
 * 
 */
var showDialog = function(params) {
    $('#dialog').srdialog(params);
};

// Specific function to show error dialogs
var showErrorDialog = function(message) {
    showDialog({
        message: message || 'An error occurred while processing your request.',
        type: 'error',
        debug: true
    });
};

var showWarningDialog = function(message) {
	showDialog({
		message: message || 'Please be careful, something here is dangerous.',
		type: 'warning',
		debug: true
	})
};

var showInfoDialog = function(message) {
	showDialog({
		message: message || 'This is only an alert.',
		type : 'info',
		debug: true
	})
};

var showSuccessDialog = function(message) {
	showDialog({
		message: message || 'Success man, be the best.',
		type: 'success',
		debug: true
	})
};