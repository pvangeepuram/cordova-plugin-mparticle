cordova.define("cordova-plugin-mparticle.mparticle", function(require, exports, module) {
'use strict';

var cordova = require('cordova');

module.exports.EventType = {
  Navigation: 1,
  Location: 2,
  Search: 3,
  Transaction: 4,
  UserContent: 5,
  UserPreference: 6,
  Social: 7,
  Other: 8
};

module.exports.UserAttributeType = {
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
};

module.exports.UserIdentityType = {
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
};

module.exports.Gender = {
  Male: 'M',
  Female: 'F',
  NotAvailable: 'NA'
};

module.exports.ProductActionType = {
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
};

module.exports.PromotionActionType = {
  View: 0,
  Click: 1
};

var exec = function(action, args) {
    cordova.exec(function(winParam) {},
                 function(error) {},
                 "MParticle",
                 action,
                 args);
}

module.exports.logEvent = function(eventName, type, attributes) {
    exec("logEvent", [eventName, type, attributes]);
};

module.exports.logScreenEvent = function(screenName, attributes) {
    exec("logScreenEvent", [screenName, attributes]);
};

module.exports.setUserAttribute = function(key, value) {
    if (value && value.constructor === Array) {
        exec("setUserAttributeArray", [key, value]);
    } else {
        exec("setUserAttribute", [key, value]);
    }
};

module.exports.setUserAttributeArray = function(key, values) {
    exec("setUserAttributeArray", [key, values]);
};

module.exports.setUserTag = function(tag) {
    exec("setUserTag", [tag]);
};

module.exports.removeUserAttribute = function(key) {
    exec("removeUserAttribute", [key]);
};

module.exports.setUserIdentity = function(userIdentity, identityType) {
    exec("setUserIdentity", [userIdentity, identityType]);
};
});
