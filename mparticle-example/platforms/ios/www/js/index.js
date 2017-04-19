var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        mparticle.logEvent('Test event', mparticle.EventType.Other, {'Test key': 'Test value'})
        var product = new mparticle.Product('Test product for cart', 1234, 19.99)

        var transactionAttributes = {'transactionId': 'Test transaction id'}
        var event = mparticle.CommerceEvent.createProductActionEvent(mparticle.ProductActionType.AddToCart, [product], transactionAttributes)
        mparticle.logCommerceEvent(event)
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
