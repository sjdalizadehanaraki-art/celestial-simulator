// horizontalProjection.js
//
// تبدیل مختصات افقی آسمان به مختصات پیکسلی
//
// azimuth : درجه
// altitude: درجه


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





    // -------------------------
    // مقیاس برابر
    // -------------------------


    const azimuthRange =
    maxAzimuth -
    minAzimuth;



    const altitudeRange =
    maxAltitude -
    minAltitude;



    const range =
    Math.max(
        azimuthRange,
        altitudeRange
    );



    const scale =
    Math.min(
        width,
        height
    )
    /
    range;





    // اندازه واقعی میدان دید

    const viewWidth =
    azimuthRange *
    scale;


    const viewHeight =
    altitudeRange *
    scale;





    // مرکز کادر

    const offsetX =
    (width - viewWidth) / 2;


    const offsetY =
    (height - viewHeight) / 2;








    function project(

        altitude,

        azimuth

    ){



        const x =
        offsetX
        +
        (
            azimuth -
            minAzimuth
        )
        *
        scale;



        const y =
        height
        -
        (
            offsetY
            +
            (
                altitude -
                minAltitude
            )
            *
            scale
        );



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


        scale


    };

}
