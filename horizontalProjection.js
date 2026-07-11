// horizontalProjection.js
//
// تبدیل altitude / azimuth به مختصات پیکسلی
// مقیاس هر دو محور برابر است


export function createHorizontalProjection({

    width,

    height,

    latitude,

    longitude

}){


    // -------------------------
    // محدوده دید ناظر
    // -------------------------


    const minAzimuth =
    longitude - 90;


    const maxAzimuth =
    longitude + 90;



    const minAltitude =
    latitude;


    const maxAltitude =
    latitude + 90;





    const azimuthRange =
    maxAzimuth -
    minAzimuth;



    const altitudeRange =
    maxAltitude -
    minAltitude;





    // -------------------------
    // میدان دید مربع
    // -------------------------


    const squareSize =
    Math.min(
        width,
        height
    )
    *
    0.8;





    // درجه به پیکسل
    // هر دو محور یکسان


    const scale =
    squareSize /
    Math.max(
        azimuthRange,
        altitudeRange
    );






    const viewWidth =
    azimuthRange *
    scale;


    const viewHeight =
    altitudeRange *
    scale;






    // مرکز صفحه


    const centerX =
    width / 2;


    const centerY =
    height / 2;







    function project(

        altitude,

        azimuth

    ){



        const x =
        centerX
        +
        (
            azimuth -
            (
                (
                    minAzimuth +
                    maxAzimuth
                )
                /
                2
            )
        )
        *
        scale;





        const y =
        centerY
        -
        (
            altitude -
            (
                (
                    minAltitude +
                    maxAltitude
                )
                /
                2
            )
        )
        *
        scale;





        return {

            x,

            y

        };


    }








    return{


        project,


        minAzimuth,

        maxAzimuth,


        minAltitude,

        maxAltitude,


        scale,


        centerX,

        centerY,


        viewWidth,

        viewHeight


    };

}
