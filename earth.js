import * as THREE from "three";


export function createEarth(parent){


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


    earth.rotation.x =
    THREE.MathUtils.degToRad(90);


    parent.add(earth);



    // نقاط مرجع

    // +X اعتدال بهاری
    createPoint(
        parent,
        new THREE.Vector3(1.2,0,0),
        0xff0000
    );


    // +Y طول 90 شرقی
    createPoint(
        parent,
        new THREE.Vector3(0,1.2,0),
        0x00ff00
    );


    // +Z قطب شمال
    createPoint(
        parent,
        new THREE.Vector3(0,0,1.2),
        0x0088ff
    );


}




function createPoint(
    parent,
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


    parent.add(point);

}
