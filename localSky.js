// localSky.js
// نمایش آسمان محلی
// ورودی خورشید:
// altitude : degree
// azimuth  : degree


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



    let altitude = 0;

    let azimuth = 180;



    let visible = false;



    const pathPoints = [];




    function setSunPosition(
        alt,
        azi
    ){

        altitude = alt;

        azimuth = azi;


        pathPoints.push({

            altitude: alt,

            azimuth: azi

        });


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




        const horizon =
        h * 0.75;




        // خط افق

        ctx.strokeStyle =
        "white";


        ctx.lineWidth = 1;


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





        // جهت‌ها

        ctx.fillStyle =
        "white";


        ctx.font =
        "20px Arial";



        ctx.fillText(
            "شرق",
            50,
            horizon + 40
        );


        ctx.fillText(
            "جنوب",
            w/2 - 30,
            horizon + 40
        );


        ctx.fillText(
            "غرب",
            w - 80,
            horizon + 40
        );




        // -------------------------
        // مسیر خورشید
        // -------------------------


        ctx.strokeStyle =
        "rgba(255,255,0,0.8)";


        ctx.lineWidth = 2;


        ctx.beginPath();



        pathPoints.forEach(
            (point,index)=>{


                const px =
                w/2
                +
                (
                    (point.azimuth - 180)
                    /
                    180
                )
                *
                (w/2 - 20);




                const py =
                horizon
                -
                (
                    point.altitude
                    /
                    90
                )
                *
                (horizon - 120);



                if(index === 0){

                    ctx.moveTo(
                        px,
                        py
                    );

                }
                else{

                    ctx.lineTo(
                        px,
                        py
                    );

                }


            }
        );


        ctx.stroke();






        // -------------------------
        // موقع فعلی خورشید
        // -------------------------


        const x =
        w/2
        +
        (
            (azimuth - 180)
            /
            180
        )
        *
        (w/2 - 20);




        const y =
        horizon
        -
        (
            altitude
            /
            90
        )
        *
        (horizon - 120);





        // خورشید

        ctx.fillStyle =
        "yellow";


        ctx.beginPath();


        ctx.arc(
            x,
            y,
            6,
            0,
            Math.PI*2
        );


        ctx.fill();




    }





    function clearPath(){

        pathPoints.length = 0;

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

        setSunPosition,

        clearPath

    };


}
