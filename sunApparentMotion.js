import * as THREE from "three";

import {
    getSolarCoordinates
}
from "./astronomy.js";



export function createSunMotion(
    sun,
    time
){


    const radius = 5;





    function update(){



        const day =
        time.getDay();




        const solar =
        getSolarCoordinates(
            day
        );






        const ra =
        THREE.MathUtils.degToRad(
            solar.rightAscension
        );



        const dec =
        THREE.MathUtils.degToRad(
            solar.declination
        );





        const sidereal =
        THREE.MathUtils.degToRad(
            time.getSiderealAngle()
        );






        // زاویه ساعتی

        const hourAngle =
        normalizeAngle(
            sidereal - ra
        );








        // تبدیل مختصات استوایی
        // قرارداد پروژه:
        //
        // X = اعتدال بهاری
        // Z = قطب شمال سماوی
        //
        // حرکت روزانه حول Z



        const x =
        radius *
        Math.cos(dec) *
        Math.cos(hourAngle);



        const y =
        radius *
        Math.cos(dec) *
        Math.sin(hourAngle);



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







function normalizeAngle(angle){



    while(
        angle > Math.PI
    ){

        angle -=
        Math.PI * 2;

    }




    while(
        angle < -Math.PI
    ){

        angle +=
        Math.PI * 2;

    }



    return angle;


}
