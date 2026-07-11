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





        // میل خورشید

        const declination =
        23.44 *
        Math.sin(

            THREE.MathUtils.degToRad(
                (360 / 365) *
                (day - 81)
            )

        );





        // زاویه ساعتی

        const hourAngle =
        (hours - 12)
        *
        15;



        const H =
        THREE.MathUtils.degToRad(
            hourAngle
        );


        const dec =
        THREE.MathUtils.degToRad(
            declination
        );






        // مختصات روی کره سماوی

        let x =
        radius *
        Math.cos(dec)
        *
        Math.cos(H);



        let y =
        radius *
        Math.cos(dec)
        *
        Math.sin(H);



        let z =
        radius *
        Math.sin(dec);






        // چرخش صفحه دایره البروج
        // حول محور X به اندازه 23.44 درجه

        const obliquity =
        THREE.MathUtils.degToRad(
            23.44
        );



        const y2 =
        y *
        Math.cos(obliquity)
        -
        z *
        Math.sin(obliquity);



        const z2 =
        y *
        Math.sin(obliquity)
        +
        z *
        Math.cos(obliquity);





        sun.position.set(
            x,
            y2,
            z2
        );



    }





    return {

        update

    };


}
