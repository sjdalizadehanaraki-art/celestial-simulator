// solarPosition.js
// خروجی:
// altitude : ارتفاع خورشید از افق (degree)
// azimuth  : سمت خورشید از شمال (degree)


export function createSolarPosition(
    time,
    observer
){


    const obliquity =
    23.4393; // درجه میل دایره البروج



    function update(){


        // -------------------------
        // موقعیت سالانه خورشید
        // -------------------------

        const yearFraction =
        time.getYearFraction();



        const declination =
        Math.asin(

            Math.sin(
                obliquity * Math.PI / 180
            )
            *
            Math.sin(
                yearFraction *
                Math.PI *
                2
            )

        )
        *
        180 /
        Math.PI;



        // -------------------------
        // زاویه ساعتی خورشید
        // -------------------------

        const dayFraction =
        time.getDayFraction();



        const hourAngle =
        (
            dayFraction * 360
            -
            180
        );




        // -------------------------
        // عرض جغرافیایی ناظر
        // -------------------------

        const latitude =
        observer.getLatitude();



        const latRad =
        latitude *
        Math.PI /
        180;



        const decRad =
        declination *
        Math.PI /
        180;



        const haRad =
        hourAngle *
        Math.PI /
        180;




        // -------------------------
        // ارتفاع خورشید
        // -------------------------

        const sinAltitude =
        Math.sin(latRad)
        *
        Math.sin(decRad)

        +

        Math.cos(latRad)
        *
        Math.cos(decRad)
        *
        Math.cos(haRad);



        const altitude =
        Math.asin(
            sinAltitude
        )
        *
        180 /
        Math.PI;




        // -------------------------
        // آزیموت خورشید
        // -------------------------

        let azimuth =
        Math.atan2(

            Math.sin(haRad),

            Math.cos(haRad)
            *
            Math.sin(latRad)

            -

            Math.tan(decRad)
            *
            Math.cos(latRad)

        )
        *
        180 /
        Math.PI;



        azimuth += 180;



        // تبدیل به بازه 0 تا 360

        if(azimuth < 0){

            azimuth += 360;

        }


        if(azimuth >= 360){

            azimuth -= 360;

        }




        return {

            altitude,

            azimuth

        };


    }




    return {

        update

    };


}
