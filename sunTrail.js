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


    const lastPoint =
    new THREE.Vector3(
        Infinity,
        Infinity,
        Infinity
    );


    const minDistance = 0.02;


    function rebuild(){

        geometry.setFromPoints(
            points
        );

    }


    return{

        line,


        addPoint(position){

            if(
                lastPoint.distanceTo(position)
                < minDistance
            ){

                return;

            }


            lastPoint.copy(position);


            points.push(
                position.clone()
            );


            rebuild();

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

            lastPoint.set(
                Infinity,
                Infinity,
                Infinity
            );

            rebuild();

        }

    };

}
