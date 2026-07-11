// horizontalRenderer.js

export function createHorizontalRenderer(
    canvas,
    projection
){


    const ctx =
    canvas.getContext("2d");





    function clear(){

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

    }







    function drawBackground(){


        ctx.fillStyle =
        "black";


        ctx.fillRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


    }








    function drawFrame(){


        const minAz =
        projection.minAzimuth;


        const maxAz =
        projection.maxAzimuth;


        const minAlt =
        projection.minAltitude;


        const maxAlt =
        projection.maxAltitude;



        const p1 =
        projection.project(
            minAlt,
            minAz
        );


        const p2 =
        projection.project(
            maxAlt,
            maxAz
        );



        ctx.strokeStyle =
        "white";


        ctx.lineWidth = 2;



        ctx.strokeRect(

            p1.x,

            p2.y,

            p2.x-p1.x,

            p1.y-p2.y

        );


    }








    function drawAxes(){



        // محور آزیموت

        const left =
        projection.project(
            projection.minAltitude,
            projection.minAzimuth
        );


        const right =
        projection.project(
            projection.minAltitude,
            projection.maxAzimuth
        );



        ctx.strokeStyle =
        "red";


        ctx.lineWidth = 2;


        ctx.beginPath();


        ctx.moveTo(
            left.x,
            left.y
        );


        ctx.lineTo(
            right.x,
            right.y
        );


        ctx.stroke();





        // محور ارتفاع


        const bottom =
        projection.project(
            projection.minAltitude,
            0
        );


        const top =
        projection.project(
            projection.maxAltitude,
            0
        );



        ctx.strokeStyle =
        "lime";


        ctx.beginPath();


        ctx.moveTo(
            bottom.x,
            bottom.y
        );


        ctx.lineTo(
            top.x,
            top.y
        );


        ctx.stroke();



    }








    function drawLabels(){



        ctx.fillStyle =
        "white";


        ctx.font =
        "14px Arial";



        ctx.fillText(

            "Azimuth",

            canvas.width/2-30,

            canvas.height-30

        );



        ctx.fillText(

            "Altitude",

            20,

            canvas.height/2

        );



        ctx.fillText(

            projection.minAzimuth.toFixed(0)+"°",

            30,

            canvas.height/2+20

        );



        ctx.fillText(

            projection.maxAzimuth.toFixed(0)+"°",

            canvas.width-70,

            canvas.height/2+20

        );



        ctx.fillText(

            projection.minAltitude.toFixed(0)+"°",

            canvas.width/2+10,

            canvas.height-50

        );



        ctx.fillText(

            projection.maxAltitude.toFixed(0)+"°",

            canvas.width/2+10,

            50

        );


    }









    function drawSun(
        sun
    ){


        const pos =
        projection.project(

            sun.altitude,

            sun.azimuth

        );



        ctx.fillStyle =
        "yellow";


        ctx.beginPath();


        ctx.arc(

            pos.x,

            pos.y,

            7,

            0,

            Math.PI*2

        );


        ctx.fill();


    }










    function drawPath(
        path
    ){



        if(path.length < 2)
        return;



        ctx.strokeStyle =
        "yellow";


        ctx.lineWidth = 2;



        ctx.beginPath();



        path.forEach(

            (point,index)=>{


                const pos =
                projection.project(

                    point.altitude,

                    point.azimuth

                );



                if(index===0){

                    ctx.moveTo(
                        pos.x,
                        pos.y
                    );

                }
                else{

                    ctx.lineTo(
                        pos.x,
                        pos.y
                    );

                }


            }

        );



        ctx.stroke();



    }










    function render({

        sun,

        path=[]

    }){


        clear();


        drawBackground();


        drawFrame();


        drawAxes();


        drawLabels();



        if(sun){

            drawSun(
                sun
            );

        }



        drawPath(
            path
        );


    }







    return {


        render,


        clear


    };


}
