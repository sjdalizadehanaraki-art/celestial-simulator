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





        // زاویه ساعت

        const hourAngle =
        sidereal -
        ra;







        // مختصات استوایی کره سماوی


        const x =
        radius *
        Math.cos(dec) *
        Math.cos(hourAngle);




        const y =
        radius *
        Math.sin(dec);




        const z =
        radius *
        Math.cos(dec) *
        Math.sin(hourAngle);








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
