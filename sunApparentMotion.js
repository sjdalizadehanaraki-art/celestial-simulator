import * as THREE from "three";


export function createSunMotion(
    sun,
    time
){


    const radius = 5;


    const obliquity =
    THREE.MathUtils.degToRad(
        23.44
    );





    function update(){



        // حرکت سالانه خورشید روی دایره البروج

        const lambda =
        THREE.MathUtils.degToRad(

            time.getEclipticAngle()

        );





        // مختصات اولیه دایره البروج

        let x =
        Math.cos(lambda);



        let y =
        Math.cos(obliquity)
        *
        Math.sin(lambda);



        let z =
        Math.sin(obliquity)
        *
        Math.sin(lambda);







        // حرکت روزانه زمین

        const theta =
        THREE.MathUtils.degToRad(

            time.getDailyAngle()

        );







        const rotatedX =

        x *
        Math.cos(theta)
        -
        y *
        Math.sin(theta);





        const rotatedY =

        x *
        Math.sin(theta)
        +
        y *
        Math.cos(theta);







        // اصلاح جهت محور برای هماهنگی با Local Sky

        sun.position.set(

            rotatedX * radius,

            z * radius,

            rotatedY * radius

        );



    }







    return {


        update


    };


}
