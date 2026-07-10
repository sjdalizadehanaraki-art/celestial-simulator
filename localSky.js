export function createLocalSky(){


    const canvas =
    document.createElement("canvas");


    canvas.width =
    window.innerWidth;

    canvas.height =
    window.innerHeight;


    canvas.style.position =
    "absolute";


    canvas.style.top =
    "0";


    canvas.style.left =
    "0";


    canvas.style.display =
    "none";


    canvas.style.zIndex =
    "5";


    document.body.appendChild(
        canvas
    );



    const ctx =
    canvas.getContext("2d");



    let sunX = 0.5;

    let sunY = 0.3;



    let visible = false;



    function setSunPosition(
        x,
        y
    ){

        sunX = x;

        sunY = y;

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



        ctx.fillStyle =
        "black";


        ctx.fillRect(
            0,
            0,
            w,
            h
        );



        // خط افق

        ctx.strokeStyle =
        "white";


        ctx.beginPath();


        ctx.moveTo(
            0,
            h*0.75
        );


        ctx.lineTo(
            w,
            h*0.75
        );


        ctx.stroke();



        // خورشید


        ctx.fillStyle =
        "yellow";


        ctx.beginPath();


        ctx.arc(
            sunX*w,
            sunY*h,
            20,
            0,
            Math.PI*2
        );


        ctx.fill();


    }



    function show(){

        visible = true;

        canvas.style.display =
        "block";

        draw();

    }



    function hide(){

        visible = false;

        canvas.style.display =
        "none";

    }



    return {

        show,

        hide,

        draw,

        setSunPosition

    };


}
