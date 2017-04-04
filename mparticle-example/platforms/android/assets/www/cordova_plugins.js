cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-mparticle.mparticle",
        "file": "plugins/cordova-plugin-mparticle/www/mparticle.js",
        "pluginId": "cordova-plugin-mparticle",
        "clobbers": [
            "mparticle"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-mparticle": "1.0.0",
    "cordova-plugin-console": "1.0.6"
};
// BOTTOM OF METADATA
});