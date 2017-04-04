cordova.define("cordova-plugin-mparticle.mparticle", function(require, exports, module) {
'use strict'

var cordova = require('cordova')

var exec = function (action, args) {
  cordova.exec(function (winParam) {},
                 function (error) { console.log(error) },
                 'MParticle',
                 action,
                 args)
}

var MParticle = {
  EventType: {
    Navigation: 1,
    Location: 2,
    Search: 3,
    Transaction: 4,
    UserContent: 5,
    UserPreference: 6,
    Social: 7,
    Other: 8
  },

  UserAttributeType: {
    FirstName: '$FirstName',
    LastName: '$LastName',
    Address: '$Address',
    State: '$State',
    City: '$City',
    Zipcode: '$Zip',
    Country: '$Country',
    Age: '$Age',
    Gender: '$Gender',
    MobileNumber: '$Mobile'
  },

  UserIdentityType: {
    Other: 0,
    CustomerId: 1,
    Facebook: 2,
    Twitter: 3,
    Google: 4,
    Microsoft: 5,
    Yahoo: 6,
    Email: 7,
    Alias: 8,
    FacebookCustomAudienceId: 9
  },

  Gender: {
    Male: 'M',
    Female: 'F',
    NotAvailable: 'NA'
  },

  ProductActionType: {
    AddToCart: 1,
    RemoveFromCart: 2,
    Checkout: 3,
    CheckoutOption: 4,
    Click: 5,
    ViewDetail: 6,
    Purchase: 7,
    Refund: 8,
    AddToWishlist: 9,
    RemoveFromWishlist: 10
  },

  PromotionActionType: {
    View: 0,
    Click: 1
  },

  logEvent: function (eventName, type, attributes) {
    exec('logEvent', [eventName, type, attributes])
  },

  logScreenEvent: function (screenName, attributes) {
    exec('logScreenEvent', [screenName, attributes])
  },

  setUserAttribute: function (key, value) {
    if (value && value.constructor === Array) {
      exec('setUserAttributeArray', [key, value])
    } else {
      exec('setUserAttribute', [key, value])
    }
  },

  setUserAttributeArray: function (key, values) {
    exec('setUserAttributeArray', [key, values])
  },

  setUserTag: function (tag) {
    exec('setUserTag', [tag])
  },

  removeUserAttribute: function (key) {
    exec('removeUserAttribute', [key])
  },

  setUserIdentity: function (userIdentity, identityType) {
    exec('setUserIdentity', [userIdentity, identityType])
  }
}

module.exports = MParticle


});
