import * as THREE from "three";

export function createearthEquator(scene){

    const material = new THREE.LineBasicMaterial({
        color: 0x00ff00
    });

    const points = [
        new THREE.Vector3(-1,0,0),
        new THREE.Vector3(1,0,0)
    ];

    const geometry =
        new THREE.BufferGeometry().setFromPoints(points);

    const line = new THREE.Line(
        geometry,
        material
    );

    scene.add(line);

}
