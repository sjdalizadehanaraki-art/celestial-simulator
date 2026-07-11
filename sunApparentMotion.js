import * as THREE from "three";


export function createSunMotion(
    sun,
    time,
    observerTransform,
    observer
){



    const radius = 5;





    function update(){



        /*
        
        فعلاً از تاریخ و زمان کنترلر استفاده می‌کنیم
        
        ساعت خورشیدی تقریبی
        
        */

        const date =
        time.getDate();




        const hours =
        date.getHours()
        +
        date.getMinutes()/60;





        // میل تقریبی خورشید

        const day =
        getDayOfYear(
            date
        );



        const declination =
        23.44 *
        Math.sin(
            THREE.MathUtils.degToRad(
                (360/365)
                *
                (day-81)
            )
        );







        // زاویه ساعتی

        const hourAngle =
        (hours - 12) * 15;







        const position =
        observerTransform.equatorialToHorizontal(

            0,

            declination,

            hourAngle

        );





        sun.position.copy(
            position
        );



    }





    return {


        update


    };

}






function getDayOfYear(date){


    const start =
    new Date(
        date.getFullYear(),
        0,
        0
    );



    const diff =
    date-start;



    return Math.floor(
        diff /
        (1000*60*60*24)
    );

}
