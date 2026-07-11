// solarPosition.js
//
// خروجی:
// altitude : degree
// azimuth  : degree


export function createSolarPosition(
    time,
    observer
){


    const rad =
    Math.PI / 180;


    const deg =
    180 / Math.PI;




    function update(){



        const year =
        time.getYearFraction();



        const day =
        time.getDayFraction();





        // میل خورشید

        const declination =
        23.44 *
        Math.sin(
            year *
            Math.PI *
            2
        );





        // زاویه ساعتی
        // ظهر خورشیدی = صفر


        const hourAngle =
        (
            day *
            360
            -
            180
        );






        const lat =
        observer.getLatitude()
        *
        rad;



        const dec =
        declination *
        rad;



        const ha =
        hourAngle *
        rad;







        // ارتفاع


        const altitude =
        Math.asin(

            Math.sin(lat)
            *
            Math.sin(dec)

            +

            Math.cos(lat)
            *
            Math.cos(dec)
            *
            Math.cos(ha)

        )
        *
        deg;







        // آزیموت


        let azimuth =
        Math.atan2(

            Math.sin(ha),

            Math.cos(ha)
            *
            Math.sin(lat)

            -

            Math.tan(dec)
            *
            Math.cos(lat)

        )
        *
        deg;



        azimuth += 180;



        if(azimuth < 0)

            azimuth += 360;



        if(azimuth >= 360)

            azimuth -= 360;







        return {


            altitude,


            azimuth


        };


    }





    return {


        update


    };


}
