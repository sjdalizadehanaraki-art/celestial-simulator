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



        const dec =
        THREE.MathUtils.degToRad(
            declination
        );





        // زاویه روزانه
        // لحظه شروع: اعتدال بهاری روی +X

        const angle =
        THREE.MathUtils.degToRad(
            (hours / 24) * 360
        );






        const x =
        radius *
        Math.cos(dec) *
        Math.cos(angle);



        const y =
        radius *
        Math.cos(dec) *
        Math.sin(angle);



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
