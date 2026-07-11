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


        const size =
        projection.scale *
        Math.max(

            projection.maxAzimuth -
            projection.minAzimuth,

            projection.maxAltitude -
            projection.minAltitude

        );



        ctx.strokeStyle =
        "white";


        ctx.lineWidth = 2;



        ctx.strokeRect(

            projection.centerX - size/2,

            projection.centerY - size/2,

            size,

            size

        );


    }









    function drawAxes(){



        // محور Azimuth

        ctx.strokeStyle =
        "red";


        ctx.lineWidth = 2;



        ctx.beginPath();


        ctx.moveTo(

            projection.centerX -
            projection.viewWidth/2,

            projection.centerY

        );



        ctx.lineTo(

            projection.centerX +
            projection.viewWidth/2,

            projection.centerY

        );



        ctx.stroke();







        // محور Altitude


        ctx.strokeStyle =
        "lime";



        ctx.beginPath();



        ctx.moveTo(

            projection.centerX,

            projection.centerY +
            projection.viewHeight/2

        );



        ctx.lineTo(

            projection.centerX,

            projection.centerY -
            projection.viewHeight/2

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

            projection.centerY+30

        );



        ctx.fillText(

            "Altitude",

            projection.centerX+10,

            projection.centerY-20

        );





        ctx.font =
        "14px Arial";



        ctx.fillText(

            projection.minAzimuth.toFixed(0)+"°",

            projection.centerX -
            projection.viewWidth/2,

            projection.centerY+20

        );



        ctx.fillText(

            projection.maxAzimuth.toFixed(0)+"°",

            projection.centerX +
            projection.viewWidth/2-30,

            projection.centerY+20

        );



        ctx.fillText(

            projection.minAltitude.toFixed(0)+"°",

            projection.centerX+10,

            projection.centerY+
            projection.viewHeight/2

        );



        ctx.fillText(

            projection.maxAltitude.toFixed(0)+"°",

            projection.centerX+10,

            projection.centerY-
            projection.viewHeight/2+15

        );


    }









    function drawSun(
        sun
    ){



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









    function drawPath(
        path
    ){



        if(
            path.length < 2
        )
        return;



        ctx.strokeStyle =
        "yellow";


        ctx.lineWidth = 2;



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

        path

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
