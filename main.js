function init() {
    var map = L.map('map', {
        crs: L.CRS.Simple
    });       // (1)地図を表示する場所
    //var bounds = [[0,0], [4896,3264]];
    //var image = L.imageOverlay('image.jpg', bounds).addTo(map);
    //map.fitBounds(bounds);
    map.setView(L.latLng(-1024/2, 1024/2), 0)
    L.tileLayer("tiles/{z}_{x}_{y}.png").addTo(map);
}

