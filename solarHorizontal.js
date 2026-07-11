// solarHorizontal.js
//
// تبدیل موقعیت خورشید به مختصات افقی ناظر
// خروجی:
// altitude = ارتفاع خورشید
// azimuth = سمت خورشید
//
// سیستم:
// شمال = 0
// شرق = 90
// جنوب = 180
// غرب = 270


export function createSolarHorizontal(
    observer
){


    const latitude =
    observer.getLatitude()
    *
    Math.PI /
    180;



    const longitude =
    observer.getLongitude();




    function calculate(
        elapsedMinutes
    ){


        // -------------------------
        // میل خورشید
        // -------------------------
        //
        // در اعتدال:
        // declination = 0
        //
        // حرکت سالانه ساده


        const yearAngle =

        elapsedMinutes *
        360 /
        (365.2422 * 1440);



        const declination =

        23.44 *
        Math.sin(
            yearAngle *
            Math.PI /
            180
        )
        *
        Math.PI /
        180;







        // -------------------------
        // زاویه ساعتی
        // -------------------------


        const dayMinutes =

        elapsedMinutes %
        1440;



        const hourAngle =

        (
            dayMinutes -
            720
        )
        *
        15 /
        60
        *
        Math.PI /
        180;








        // -------------------------
        // ارتفاع
        // -------------------------


        const sinAltitude =

        Math.sin(latitude)
        *
        Math.sin(declination)

        +

        Math.cos(latitude)
        *
        Math.cos(declination)
        *
        Math.cos(hourAngle);



        const altitude =

        Math.asin(
            sinAltitude
        );







        // -------------------------
        // سمت
        // -------------------------


        const y =

        Math.sin(hourAngle);



        const x =

        Math.cos(hourAngle)
        *
        Math.sin(latitude)

        -

        Math.tan(declination)
        *
        Math.cos(latitude);





        let azimuth =

        Math.atan2(
            y,
            x
        );



        azimuth += Math.PI;






        let altitudeDeg =

        altitude *
        180 /
        Math.PI;



        let azimuthDeg =

        azimuth *
        180 /
        Math.PI;





        if(azimuthDeg < 0){

            azimuthDeg += 360;

        }






        return {

            altitude:
            altitudeDeg,


            azimuth:
            azimuthDeg


        };


    }







    return {


        calculate


    };


}
