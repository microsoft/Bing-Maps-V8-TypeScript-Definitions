/// <reference path="scripts/MicrosoftMaps/Microsoft.Maps.All.d.ts" />

var map = new Microsoft.Maps.Map('#MyMap', {
    credentials: 'Your Bing Maps Key'    
});

Microsoft.Maps.Events.addHandler(map, 'click', (e: Microsoft.Maps.IMouseEventArgs) => {
    //The location on the map that the user clicked.
    var loc = e.location;
});

var layer = new Microsoft.Maps.Layer();

var pin = new Microsoft.Maps.Pushpin(map.getCenter(), {
    color: new Microsoft.Maps.Color(150, 150, 0, 0)
});

Microsoft.Maps.Events.addOne(pin, 'changed', (e: Microsoft.Maps.IPrimitiveChangedEventArgs) => {
    //e.name => name of property that changed.
    //e.sender => reference to the pushpin object that changed.
});

layer.add(pin);

map.layers.insert(layer);

Microsoft.Maps.loadModule('Microsoft.Maps.GeoJSON', () => {
    Microsoft.Maps.GeoJSON.readFromUrl('URL to file', (data) => {
        if (data instanceof Array) {
            //Data is an array of shapes.
        } else {
            //Data is a single shape.
        }

        map.entities.push(data);
    });
});

Microsoft.Maps.loadModule('Microsoft.Maps.Autosuggest', {
    credentials: 'Your Bing Maps Key',
    callback: () => {
        var asManager = new Microsoft.Maps.AutosuggestManager();
        asManager.attachAutosuggest('mySuggestionTextbox', 'suggestionsContainer', (result) => {
            //Do something with the selected result.
        });
    }
});
