import * as THREE from "three";


export function createSunMotion(
    sun,
    time
){


    const radius = 5;



    function update(){


        // روز سال بر اساس سیستم خود پروژه
        // day = 0 یعنی اعتدال بهاری

        const day =
        time.getYearFraction()
        *
        365;



        const hours =
        time.getDayFraction()
        *
        24;





        // =========================
        // میل خورشید
        // مبدأ: اعتدال بهاری
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
        // حرکت روزانه
        // شروع اجرا:
        // 18:16 اعتدال بهاری
        // روی محور +X
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
        // +X = اعتدال بهاری
        // +Z = قطب شمال سماوی
        // =========================


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
