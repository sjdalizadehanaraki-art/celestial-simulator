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


    return {


        line,


        addPoint(position){


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


        clear(){

            points.length = 0;

            geometry.setFromPoints(
                points
            );

        }

    };

}
