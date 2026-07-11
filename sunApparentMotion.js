import * as THREE from "three";


export function createSunMotion(
    sun,
    time
){


    const radius = 5;



    function update(){



        const day =
        time.getYearFraction()
        *
        365;



        const hours =
        time.getDayFraction()
        *
        24;





        // میل خورشید نسبت به استوای سماوی

        const declination =
        23.44 *
        Math.sin(

            THREE.MathUtils.degToRad(
                (360 / 365) *
                (day - 81)
            )

        );





        const dec =
        THREE.MathUtils.degToRad(
            declination
        );





        // حرکت روزانه

        const hourAngle =
        (hours - 12)
        *
        15;



        const H =
        THREE.MathUtils.degToRad(
            hourAngle
        );







        // مختصات روی کره سماوی

        const x =
        radius *
        Math.cos(dec)
        *
        Math.cos(H);



        const y =
        radius *
        Math.cos(dec)
        *
        Math.sin(H);



        const z =
        radius *
        Math.sin(dec);






        sun.position.set(
            x,
            y,
            z
        );



    }





    return {

        update

    };


}
