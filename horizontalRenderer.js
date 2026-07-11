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


        ctx.strokeStyle =
        "white";


        ctx.lineWidth =
        2;



        ctx.strokeRect(

            projection.centerX -
            projection.viewWidth/2,


            projection.topY,


            projection.viewWidth,


            projection.viewHeight

        );


    }









    function drawAxes(){



        // -------------------
        // خط افق / Azimuth
        // -------------------


        ctx.strokeStyle =
        "red";


        ctx.lineWidth = 2;



        ctx.beginPath();


        ctx.moveTo(

            projection.centerX -
            projection.viewWidth/2,

            projection.bottomY

        );



        ctx.lineTo(

            projection.centerX +
            projection.viewWidth/2,

            projection.bottomY

        );



        ctx.stroke();







        // -------------------
        // محور ارتفاع
        // -------------------


        ctx.strokeStyle =
        "lime";



        ctx.beginPath();


        ctx.moveTo(

            projection.centerX,

            projection.bottomY

        );



        ctx.lineTo(

            projection.centerX,

            projection.topY

        );



        ctx.stroke();


    }









    function drawLabels(){


        ctx.fillStyle =
        "white";


        ctx.font =
        "16px Arial";



        ctx.fillText(

            "Azimuth",

            projection.centerX-35,

            projection.bottomY+35

        );



        ctx.fillText(

            "Altitude",

            projection.centerX+10,

            projection.topY-10

        );



        ctx.font =
        "14px Arial";



        ctx.fillText(

            projection.minAzimuth.toFixed(0)+"°",

            projection.centerX -
            projection.viewWidth/2,

            projection.bottomY+20

        );



        ctx.fillText(

            projection.maxAzimuth.toFixed(0)+"°",

            projection.centerX +
            projection.viewWidth/2-30,

            projection.bottomY+20

        );



        ctx.fillText(

            projection.minAltitude.toFixed(0)+"°",

            projection.centerX+10,

            projection.bottomY-10

        );



        ctx.fillText(

            projection.maxAltitude.toFixed(0)+"°",

            projection.centerX+10,

            projection.topY+15

        );


    }









    function drawSun(sun){



        const p =
        projection.project(

            sun.altitude,

            sun.azimuth

        );



        ctx.fillStyle =
        "yellow";


        ctx.beginPath();


        ctx.arc(

            p.x,

            p.y,

            7,

            0,

            Math.PI*2

        );


        ctx.fill();


    }








    function drawPath(path){



        if(
            path.length < 2
        )
        return;



        ctx.strokeStyle =
        "yellow";


        ctx.lineWidth =
        2;



        ctx.beginPath();



        path.forEach(

            (point,index)=>{


                const p =
                projection.project(

                    point.altitude,

                    point.azimuth

                );



                if(index===0){

                    ctx.moveTo(
                        p.x,
                        p.y
                    );

                }
                else{

                    ctx.lineTo(
                        p.x,
                        p.y
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



        drawPath(
            path
        );



        if(sun){

            drawSun(
                sun
            );

        }


    }







    return {


        render,


        clear


    };


}
