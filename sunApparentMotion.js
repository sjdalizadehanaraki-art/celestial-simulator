import * as THREE from "three";


export function createSunMotion(
    sun,
    time
){



    const radius = 5;





    function update(){



        const date =
        time.getDate();



        const hours =
        date.getHours()
        +
        date.getMinutes() / 60;





        const day =
        getDayOfYear(
            date
        );





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
        (hours - 12) *
        15;






        const H =
        THREE.MathUtils.degToRad(
            hourAngle
        );



        const dec =
        THREE.MathUtils.degToRad(
            declination
        );





        // مسیر ساده در کره سماوی

        const x =
        radius *
        Math.cos(dec) *
        Math.cos(H);




        const y =
        radius *
        Math.sin(dec);




        const z =
        radius *
        Math.cos(dec) *
        Math.sin(H);






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







function getDayOfYear(date){


    const start =
    new Date(
        date.getFullYear(),
        0,
        0
    );



    const diff =
    date - start;



    return Math.floor(
        diff /
        (1000 * 60 * 60 * 24)
    );


}
