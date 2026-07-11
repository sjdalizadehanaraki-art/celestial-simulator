export function createHorizontalSun(projection){


    let x = 0;

    let y = 0;



    function update(

        altitude,
        azimuth,

        canvas,

        observer

    ){

        const point =
        projection.project(

            azimuth,

            altitude,

            canvas.width,

            canvas.height

        );


        x =
        point.x;


        y =
        point.y;

    }




    function draw(ctx){


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



    return{

        update,

        draw

    };

}
