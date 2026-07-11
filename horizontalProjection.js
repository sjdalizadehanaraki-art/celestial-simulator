// horizontalProjection.js
// تبدیل مختصات آسمان محلی به مختصات صفحه
//
// altitude: درجه (-90 تا +90)
// azimuth : درجه (0 شمال، 90 شرق، 180 جنوب، 270 غرب)


export function createHorizontalProjection(
    width,
    height
){


    const horizon =
    height * 0.75;



    const horizontalScale =
    width / 2 - 40;



    const verticalScale =
    horizon - 120;





    function project(
        altitude,
        azimuth
    ){



        const x =
        width / 2
        +
        (
            (azimuth - 180)
            /
            180
        )
        *
        horizontalScale;




        const y =
        horizon
        -
        (
            altitude
            /
            90
        )
        *
        verticalScale;




        return {

            x,

            y

        };


    }






    function getHorizon(){

        return horizon;

    }





    function getWidth(){

        return width;

    }





    function getHeight(){

        return height;

    }





    return {

        project,

        getHorizon,

        getWidth,

        getHeight

    };


}
