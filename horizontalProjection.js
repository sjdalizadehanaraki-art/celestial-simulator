// horizontalProjection.js
// تبدیل مختصات آسمان محلی به مختصات پیکسلی


export function createHorizontalProjection(
    width,
    height
){


    const horizon =
    height * 0.75;



    const horizontalScale =
    width / 2 - 20;


    const verticalScale =
    horizon - 120;




    function project(
        altitude,
        azimuth
    ){


        // azimuth:
        // 0 شمال
        // 90 شرق
        // 180 جنوب
        // 270 غرب



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




    return {

        project

    };


}
