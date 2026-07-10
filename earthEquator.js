import * as THREE from "three";

export function createEarthEquator(scene){

    const equator = new THREE.Mesh(

        new THREE.TorusGeometry(
            1,
            0.01,
            16,
            128
        ),

        new THREE.MeshBasicMaterial({

            color:0x00ff00

        })

    );

    scene.add(equator);

}
