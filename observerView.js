import * as THREE from "three";


export function createObserverView(
    scene,
    observer
){


    const group =
    new THREE.Group();



    scene.add(
        group
    );







    // نیم کره آسمان

    const geometry =
    new THREE.SphereGeometry(
        5,
        64,
        32,
        0,
        Math.PI * 2,
        0,
        Math.PI / 2
    );



    const material =
    new THREE.MeshBasicMaterial({

        color:0x004400,

        transparent:true,

        opacity:0.15,

        side:THREE.BackSide,

        depthWrite:false

    });



    const sky =
    new THREE.Mesh(
        geometry,
        material
    );



    // چون دوربین داخل کره است
    // نیمه بالا باید بالای سر باشد

    sky.rotation.x =
    0;



    group.add(
        sky
    );








    return {

        group

    };


}
