const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resize();
window.addEventListener("resize", resize);


let centerX;
let centerY;
let radius = 120;


function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    centerX = canvas.width / 2;
    centerY = canvas.height / 2;


    // زمین
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "#1c6dd0";
    ctx.fill();

    ctx.strokeStyle = "white";
    ctx.stroke();


    // محور X
    ctx.beginPath();
    ctx.moveTo(centerX - 250, centerY);
    ctx.lineTo(centerX + 250, centerY);
    ctx.strokeStyle = "red";
    ctx.stroke();


    // محور Y
    ctx.beginPath();
    ctx.moveTo(centerX, centerY + 250);
    ctx.lineTo(centerX, centerY - 250);
    ctx.strokeStyle = "lime";
    ctx.stroke();


    // محور Z (فعلا نمایش ساده)
    ctx.beginPath();
    ctx.moveTo(centerX - 150, centerY + 150);
    ctx.lineTo(centerX + 150, centerY - 150);
    ctx.strokeStyle = "cyan";
    ctx.stroke();


    // نوشته محورها
    ctx.fillStyle = "white";
    ctx.fillText("X", centerX + 260, centerY);
    ctx.fillText("Y", centerX, centerY - 260);
    ctx.fillText("Z", centerX + 160, centerY - 160);

}

draw();
