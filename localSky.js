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



    document.body.appendChild(
        canvas
    );


    const ctx =
    canvas.getContext("2d");



    function show(){

        canvas.style.display =
        "block";

        draw();

    }



    function hide(){

        canvas.style.display =
        "none";

    }



    function draw(){


        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        ctx.fillStyle =
        "black";

        ctx.fillRect(
            0,
            0,
            canvas.width,
            canvas.height
        );



        const w =
        canvas.width;

        const h =
        canvas.height;



        // افق

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



        // جهت ها

        ctx.fillStyle =
        "white";

        ctx.font =
        "20px Arial";


        ctx.fillText(
            "شرق",
            50,
            h*0.75+40
        );


        ctx.fillText(
            "جنوب",
            w/2-30,
            h*0.75+40
        );


        ctx.fillText(
            "غرب",
            w-80,
            h*0.75+40
        );



        // خورشید تست

        ctx.fillStyle =
        "yellow";


        ctx.beginPath();


        ctx.arc(
            w/2,
            h/3,
            20,
            0,
            Math.PI*2
        );


        ctx.fill();


    }



    return {

        show,

        hide,

        draw

    };


}
