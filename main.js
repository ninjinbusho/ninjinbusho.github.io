function init() {
    var map = L.map('map', {
        crs: L.CRS.Simple
    });       // (1)地図を表示する場所
}
var bounds = [[0,0], [1000,1000]];
var image = L.imageOverlay('P1360169-1.jpg', bounds).addTo(map);
map.fitBounds(bounds);

const canvas = document.getElementById("myCanvas");        
    let imagePath = "image.jpg";
    draw(canvas,imagePath);
    function draw(canvas,imagePath){
        console.log("draw");
        const image = new Image();
        image.addEventListener("load",function (){
            canvas.width = 300;
            canvas.height = 300;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(image, 0, 0);
            console.log("load!");
        });
    image.src = imagePath;
}