export function createLocalSky(){


const canvas =
document.createElement("canvas");


canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;


canvas.style.position="absolute";
canvas.style.top="0";
canvas.style.left="0";
canvas.style.display="none";
canvas.style.zIndex="5";


document.body.appendChild(canvas);



const ctx =
canvas.getContext("2d");



let altitude = 0;

let azimuth = 180;



let visible = false;



function setSunPosition(
    alt,
    azi
){

    altitude = alt;

    azimuth = azi;

}




function draw(){


if(!visible)
return;



const w =
canvas.width;


const h =
canvas.height;



ctx.clearRect(
0,
0,
w,
h
);



ctx.fillStyle="black";

ctx.fillRect(
0,
0,
w,
h
);



// خط افق

const horizon =
h*0.75;



ctx.strokeStyle="white";


ctx.beginPath();

ctx.moveTo(
0,
horizon
);

ctx.lineTo(
w,
horizon
);

ctx.stroke();



// نوشته ها

ctx.fillStyle="white";
ctx.font="20px Arial";


ctx.fillText(
"شرق",
50,
horizon+40
);


ctx.fillText(
"جنوب",
w/2-30,
horizon+40
);


ctx.fillText(
"غرب",
w-80,
horizon+40
);



// تبدیل سمت به X

const x =
w/2
+
(
(azimuth-180)
/90
)
*
(w/2-80);



// تبدیل ارتفاع به Y

const y =
horizon
-
(
altitude /
(Math.PI/2)
)
*
(horizon-50);




// خورشید

ctx.fillStyle="yellow";

ctx.beginPath();

ctx.arc(
x,
y,
20,
0,
Math.PI*2
);

ctx.fill();



}




function show(){

visible=true;

canvas.style.display="block";

draw();

}



function hide(){

visible=false;

canvas.style.display="none";

}



return{

show,

hide,

draw,

setSunPosition

};



}
