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

    let azimuth = Math.PI;



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





        // جهت ها

        ctx.fillStyle =
        "white";


        ctx.font =
        "20px Arial";


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





        // رسم مسیر خورشید

        ctx.strokeStyle =
        "rgba(255,255,0,0.8)";


        ctx.beginPath();



        pathPoints.forEach(
            (point,index)=>{


                const px =
                w/2
                +
                (
                    (point.azimuth - Math.PI)
                    /
                    Math.PI
                )
                *
                (w/2-80);



                const py =
                horizon
                -
                (
                    point.altitude /
                    (Math.PI/2)
                )
                *
                (horizon-50);



                if(index===0){

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





        // موقع فعلی خورشید


        const x =
        w/2
        +
        (
            (azimuth - Math.PI)
            /
            Math.PI
        )
        *
        (w/2-80);



        const y =
        horizon
        -
        (
            altitude /
            (Math.PI/2)
        )
        *
        (horizon-50);




        // خود خورشید (نقطه کوچک)

        ctx.fillStyle =
        "yellow";


        ctx.beginPath();


        ctx.arc(

            x,
            y,

            4,

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
