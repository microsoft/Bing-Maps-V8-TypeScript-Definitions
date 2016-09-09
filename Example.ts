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

Microsoft.Maps.loadModule('Microsoft.Maps.DrawingTools', {
    credentials: 'Your Bing Maps Key',
    callback: () => {
        var drawingTools = new Microsoft.Maps.DrawingTools(map);
        drawingTools.create(Microsoft.Maps.DrawingTools.ShapeType.polyline);
    }
});

Microsoft.Maps.loadModule('Microsoft.Maps.Search', () => {
    var searchManager = new Microsoft.Maps.Search.SearchManager(map);
    searchManager.geocode({
        bounds: map.getBounds(),
        where: 'somewhere',
        callback: (answer, userData) => {
            map.setView({ bounds: answer.results[0].bestView });
            map.entities.push(new Microsoft.Maps.Pushpin(answer.results[0].location));
        }
    });
});`


/***********************
* Custom Overlay Example
************************/

class TopographicOverlay extends Microsoft.Maps.CustomOverlay {

    bounds: Microsoft.Maps.LocationRect;
    image: string;

    private img: HTMLImageElement;

    constructor(bounds: Microsoft.Maps.LocationRect, image: string) {
        super({ beneathLabels: true });

        this.bounds = bounds;
        this.image = image;
    }

    onAdd() {
        //Create an image element that will be used as the overlay.
        this.img = document.createElement('img');
        this.img.src = this.image;
        this.img.style.width = '100%';
        this.img.style.height = '100%';
        this.img.style.position = 'absolute';
        this.setHtmlElement(this.img);
    }

    onLoad() {
        this.repositionOverlay();

        //Update the position of the image when the view changes.
        Microsoft.Maps.Events.addHandler(map, 'viewchange', function () {
            this.repositionOverlay();
        });
    }

    onRemove() {
        //Logic to perform when overlay has been removed from the map.
    }

    private repositionOverlay() {
        //Streach and position the image based on the bounding box pixel coordinates.
        var topLeft = <Microsoft.Maps.Point>map.tryLocationToPixel(this.bounds.getNorthwest(), Microsoft.Maps.PixelReference.control);
        var bottomRight = <Microsoft.Maps.Point>map.tryLocationToPixel(this.bounds.getSoutheast(), Microsoft.Maps.PixelReference.control);

        this.img.style.left = topLeft.x + 'px';
        this.img.style.top = topLeft.y + 'px';
        this.img.style.width = (bottomRight.x - topLeft.x) + 'px';
        this.img.style.width = (bottomRight.x - topLeft.x) + 'px';
        this.img.style.height = (bottomRight.y - topLeft.y) + 'px';
    }
}

//The bounding box and url for the image to overlay.
var bounds = Microsoft.Maps.LocationRect.fromCorners(new Microsoft.Maps.Location(40.5, -123.5), new Microsoft.Maps.Location(40, -123));
var imageSrc = 'https://bingmapsisdk.blob.core.windows.net/isdksamples/topographicMap.gif';

//Implement the new custom overlay class.
var overlay = new TopographicOverlay(bounds, imageSrc);

//Add the custom overlay to the map.
map.layers.insert(overlay);
