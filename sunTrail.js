import * as THREE from "three";


export function createSunTrail(){


    const points = [];


    const geometry =
    new THREE.BufferGeometry();


    const material =
    new THREE.LineBasicMaterial({

        color:0xffff00,

        transparent:true,

        opacity:0.8

    });



    const line =
    new THREE.Line(
        geometry,
        material
    );


    line.visible = true;



    let lastSampleTime = -1;



    return {


        line,


        addPoint(position, simTime){



            // هر یک دقیقه شبیه سازی یک نقطه

            const minute =
            Math.floor(
                simTime / (5 / 1440)
            );



            if(minute === lastSampleTime){

                return;

            }



            lastSampleTime =
            minute;



            points.push(
                position.clone()
            );



            geometry.setFromPoints(
                points
            );

        },



        show(){

            line.visible = true;

        },



        hide(){

            line.visible = false;

        },



        toggle(){

            line.visible =
            !line.visible;

        },



        isVisible(){

            return line.visible;

        },


        clear(){

            points.length = 0;

            lastSampleTime = -1;

            geometry.setFromPoints(
                points
            );

        }


    };

}
