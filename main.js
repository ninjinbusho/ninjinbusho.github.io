function init() {
    var map = L.map('map');       // (1)地図を表示する場所
    map.setView([35.658825, 139.702904], 5); // (2)地図の中心座標とズームレベル
    // (3)表示する地図のURLや著作権表記
     L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
           attribution: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a>"
       }).addTo(map);
     }

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