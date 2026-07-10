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



    let lastSampleTime = -1;



    function rebuild(){


        geometry.setFromPoints(
            points
        );


    }



    return {



        line,



        addPoint(position, simTime){


            const minute =
            Math.floor(
                simTime / (5 / 1440)
            );



            if(
                minute === lastSampleTime
            ){

                return;

            }



            lastSampleTime =
            minute;



            points.push(
                position.clone()
            );


            rebuild();


        },



        show(){

            line.visible = true;


            rebuild();

        },



        hide(){

            line.visible = false;

        },



        toggle(){

            line.visible =
            !line.visible;


            if(line.visible){

                rebuild();

            }

        },



        isVisible(){

            return line.visible;

        },



        clear(){

            points.length = 0;

            lastSampleTime = -1;

            rebuild();

        }



    };

}
