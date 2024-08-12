const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const image = new Image();
const MAX_SCALE = 5;
const SCALE_STEP = 0.2;
let imageScale = 1;

canvas.addEventListener('mousewheel', canvasZoom);
canvas.addEventListener('mouseover', disableScroll);
canvas.addEventListener('mouseout', enableScroll);

function draw() {
    image.addEventListener("load", function(){
        // 画像のスケーリング表示
        ctx.save();
        ctx.scale(imageScale, imageScale);
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        ctx.restore();

        // 倍率の描画
        ctx.font = '30px "arial black"';
        ctx.fillStyle = 'white';
        ctx.fillText('x' + imageScale.toFixed(1), 390, 300);
        ctx.lineWidth = 2;
        ctx.strokeText('x' + imageScale.toFixed(1), 390, 300);

        // 枠の描画
        ctx.lineWidth = 3;
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
    });
    image.src = "https://kano.arkoak.com/images/harinezumi.jpg";
}

function canvasZoom(e) {
    if (e.wheelDelta > 0) {
        imageScale += SCALE_STEP;
        if (imageScale > MAX_SCALE) {
            imageScale = MAX_SCALE;
        }
    } else {
        imageScale -= SCALE_STEP;
        if (imageScale <= 1) {
            imageScale = 1;
        }
    }
    draw();
}

// Cnavas上ではブラウザのスクロールを無効に
function disableScroll() {document.addEventListener("mousewheel", scrollControl, { passive: false });}
function enableScroll() {document.removeEventListener("mousewheel", scrollControl, { passive: false });}
function scrollControl(e) {e.preventDefault();}

draw();