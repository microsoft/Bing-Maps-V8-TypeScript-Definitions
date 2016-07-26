/// <reference path="scripts/MicrosoftMaps/Microsoft.Maps.d.ts" />
var map = new Microsoft.Maps.Map('#MyMap', {
    credentials: 'Your Bing Maps Key'
});
Microsoft.Maps.Events.addHandler(map, 'click', function (e) {
    //The location on the map that the user clicked.
    var loc = e.location;
});
var layer = new Microsoft.Maps.Layer();
var pin = new Microsoft.Maps.Pushpin(map.getCenter(), {
    color: new Microsoft.Maps.Color(150, 150, 0, 0)
});
Microsoft.Maps.Events.addOne(pin, 'changed', function (e) {
    //e.name => name of property that changed.
    //e.sender => reference to the pushpin object that changed.
});
layer.add(pin);
map.layers.insert(layer);
Microsoft.Maps.loadModule('Microsoft.Maps.GeoJSON', function () {
    Microsoft.Maps.GeoJSON.readFromUrl('URL to file', function (data) {
        if (data instanceof Array) {
        }
        else {
        }
        map.entities.push(data);
    });
});
Microsoft.Maps.loadModule('Microsoft.Maps.Autosuggest', {
    credentials: 'Your Bing Maps Key',
    callback: function () {
        var asManager = new Microsoft.Maps.AutosuggestManager();
        asManager.attachAutosuggest('mySuggestionTextbox', 'suggestionsContainer', function (result) {
            //Do something with the selected result.
        });
    }
});
//# sourceMappingURL=Example.js.map