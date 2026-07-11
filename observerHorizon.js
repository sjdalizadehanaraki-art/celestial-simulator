import * as THREE from "three";


export function createObserverHorizon(){


    const group =
    new THREE.Group();





    // زمین زیر پای ناظر

    const ground =
    new THREE.Mesh(

        new THREE.PlaneGeometry(
            40,
            40
        ),

        new THREE.MeshBasicMaterial({

            color:0x8b4513,

            side:THREE.DoubleSide

        })

    );



    ground.rotation.x =
    -Math.PI / 2;



    ground.position.y =
    -5;



    group.add(
        ground
    );






    // نیمه آسمان برای تست

    const sky =
    new THREE.Mesh(

        new THREE.SphereGeometry(
            19,
            64,
            64
        ),

        new THREE.MeshBasicMaterial({

            color:0x3366ff,

            transparent:true,

            opacity:0.15,

            side:THREE.BackSide,

            depthWrite:false

        })

    );



    group.add(
        sky
    );







    return {

        group

    };


}
