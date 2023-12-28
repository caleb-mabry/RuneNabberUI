var img = [
  8793, // original width of image (here from `example/karta.jpg`)
  4993, // original height of image
];
var map = L.map("map", {
  crs: L.CRS.Simple,
});

// assign map and image dimensions
var rc = new L.RasterCoords(map, img);
// set max zoom Level (might be `x` if gdal2tiles was called with `-z 0-x` option)
map.setMaxZoom(9);
// all coordinates need to be unprojected using the `unproject` method
// set the view in the lower right edge of the image
map.setView(rc.unproject([img[0], img[1]]), 4);

L.TileLayer.MyCustomLayer = L.TileLayer.extend({
  createTile: function (coords) {
    const { x, y, z } = coords;
    const tile = document.createElement("img");

    fetch(
      `https://vivacious-magenta.cmd.outerbase.io/get-tile-v7?x=${z}&y=${x}&z=${y}`
    )
      .then((data) => data.text())
      .then((resp) => {
        tile.src = resp.replace(/"/g, "");
      });

    return tile;
  },
});

L.tileLayer.myCustomLayer = function (templateUrl, options) {
  return new L.TileLayer.MyCustomLayer(templateUrl, options);
};

L.tileLayer
  .myCustomLayer("", {
    noWrap: true,
    bounds: rc.getMaxBounds(),
  })
  .addTo(map);
// L.tileLayer(
//   "https://vivacious-magenta.cmd.outerbase.io/get-tile-v7?x={z}&y={x}&z={y}",
//   {
//     noWrap: true,
//     bounds: rc.getMaxBounds(),
//     minZoom: 0,
//     maxNativeZoom: rc.zoomLevel(),
//   }
// ).addTo(map);
map.on("click", function (event) {
  // any position in leaflet needs to be projected to obtain the image coordinates
  var coords = rc.project(event.latlng);
  console.log(event);
  var marker = L.marker(rc.unproject(coords)).addTo(map);
  marker
    .bindPopup("[" + Math.floor(coords.x) + "," + Math.floor(coords.y) + "]")
    .openPopup();
});
