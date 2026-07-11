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





    function drawHorizon(){


        const center =
        projection.project(
            0,
            180
        );


        const radius =
        canvas.width * 0.35;



        ctx.strokeStyle =
        "rgba(255,255,255,0.8)";


        ctx.lineWidth = 2;



        ctx.beginPath();


        ctx.arc(

            canvas.width/2,

            center.y,

            radius,

            0,

            Math.PI*2

        );


        ctx.stroke();


    }







    function drawAltitudeLines(){


        const levels =
        [
            30,
            60
        ];



        levels.forEach(
            altitude=>{


                const center =
                projection.project(
                    altitude,
                    180
                );



                const radius =
                canvas.width *
                0.35 *
                (
                    1 -
                    altitude/100
                );



                ctx.strokeStyle =
                "rgba(255,255,255,0.25)";


                ctx.lineWidth = 1;



                ctx.beginPath();


                ctx.arc(

                    canvas.width/2,

                    center.y,

                    radius,

                    0,

                    Math.PI*2

                );


                ctx.stroke();


            }
        );


    }







    function drawDirections(){


        const points = [

            {
                name:"شمال",
                azimuth:0
            },

            {
                name:"شرق",
                azimuth:90
            },

            {
                name:"جنوب",
                azimuth:180
            },

            {
                name:"غرب",
                azimuth:270
            }

        ];




        ctx.fillStyle =
        "white";


        ctx.font =
        "20px Arial";




        points.forEach(
            point=>{


                const pos =
                projection.project(
                    0,
                    point.azimuth
                );



                ctx.fillText(

                    point.name,

                    pos.x-20,

                    pos.y+35

                );


            }
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

            6,

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
        "rgba(255,255,0,0.8)";


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


        drawHorizon();


        drawAltitudeLines();


        drawDirections();



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
