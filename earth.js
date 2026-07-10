import * as THREE from "three";


export function createEarth(scene){


    const textureLoader =
    new THREE.TextureLoader();


    const earthTexture =
    textureLoader.load(
        "./earth.png"
    );


    const earth =
    new THREE.Mesh(

        new THREE.SphereGeometry(
            1,
            64,
            64
        ),


        new THREE.MeshBasicMaterial({

            map: earthTexture

        })

    );


    scene.add(earth);



    // نقاط مرجع


    // +X اعتدال بهاری
    createPoint(
        scene,
        new THREE.Vector3(1.2,0,0),
        0xff0000
    );


    // +Y طول 90 شرقی
    createPoint(
        scene,
        new THREE.Vector3(0,1.2,0),
        0x00ff00
    );


    // +Z قطب شمال
    createPoint(
        scene,
        new THREE.Vector3(0,0,1.2),
        0x0088ff
    );


}



function createPoint(
    scene,
    position,
    color
){

    const point =
    new THREE.Mesh(

        new THREE.SphereGeometry(
            0.08,
            16,
            16
        ),

        new THREE.MeshBasicMaterial({
            color:color
        })

    );


    point.position.copy(position);


    scene.add(point);

}
