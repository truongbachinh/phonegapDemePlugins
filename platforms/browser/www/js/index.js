var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
    }
};

function callAlert() {
    navigator.notification.alert(
        'You are the winner!',  // message
        alertDismissed,              // callback
        'Game Over',            // title
        'Done'            // buttonName
    );
}
function alertDismissed() {
    alert('You close button');

}

function callConfirm() {
    navigator.notification.confirm(
        'You are the winner!', // message
        onConfirm,            // callback to invoke with index of button pressed
        'Game Over',           // title
        ['Restart','Exit']     // buttonLabels
    );
}
function onConfirm(buttonIndex) {
    alert('You selected button ' + buttonIndex);
}

function callPrompt() {
    navigator.notification.prompt(
        'Please enter your name',  // message
        onPrompt,                  // callback to invoke
        'Registration',            // title
        ['Ok','Exit'],             // buttonLabels
        'Jane Doe'                 // defaultText
    );
}
function onPrompt(results) {
    alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
}
function callBeep() {
    navigator.notification.beep(3);
}

function callVibration() {
    navigator.vibrate(3000);
}

function takePicture() {
    navigator.camera.getPicture(onSuccess, onFail,
        {
            quality: 50,
            allowEdit: false,
            destinationType: Camera.DestinationType.FILE_URI
    });
}
function onSuccess(url) {
    alert(url);
   var image = document.getElementById('imageContainer');
   image.innerHTML = '<img src="' + url + '" width="50%"/>';
}
function onFail(message) {
    alert('Failed because: ' + message);
}
