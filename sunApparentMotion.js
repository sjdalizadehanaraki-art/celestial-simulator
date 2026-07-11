import * as THREE from "three";


export function createSunMotion(
    sun,
    time
){


    const radius = 5;



    function update(){


        // روز سال پروژه
        // day = 0  => اعتدال بهاری

        const day =
        time.getDay();




        const hours =
        time.getDayFraction()
        *
        24;






        // =========================
        // میل خورشید
        // =========================


        const declination =
        23.44 *
        Math.sin(

            THREE.MathUtils.degToRad(
                day *
                360 /
                365
            )

        );



        const dec =
        THREE.MathUtils.degToRad(
            declination
        );








        // =========================
        // زاویه روزانه
        //
        // شروع:
        // 18:16 اعتدال بهاری
        // روی +X
        // =========================


        const startHour =
        18.266;



        const hourAngle =
        (
            hours -
            startHour
        )
        *
        15;



        const H =
        THREE.MathUtils.degToRad(
            hourAngle
        );








        // =========================
        // مختصات کره سماوی
        //
        // X = اعتدال بهاری
        // Y = قطب شمال سماوی
        // =========================


        const x =
        radius *
        Math.cos(dec)
        *
        Math.cos(H);



        const y =
        radius *
        Math.sin(dec);



        const z =
        radius *
        Math.cos(dec)
        *
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
