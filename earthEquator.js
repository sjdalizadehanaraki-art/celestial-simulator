import * as THREE from "three";

export function createEarthEquator(scene){

    const radius = 1;

    const points = [];

    for(let i = 0; i <= 360; i++){

        const a = THREE.MathUtils.degToRad(i);

        points.push(

            new THREE.Vector3(

                radius * Math.cos(a),
                radius * Math.sin(a),
                0

            )

        );

    }

    const geometry =
    new THREE.BufferGeometry().setFromPoints(points);

    const material =
    new THREE.LineBasicMaterial({

        color:0x00ff00

    });

    const equator =
    new THREE.LineLoop(
        geometry,
        material
    );

    scene.add(equator);

}
