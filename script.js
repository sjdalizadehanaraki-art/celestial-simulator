import * as THREE from 
'https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    100
);

camera.position.z = 3;


const renderer = new THREE.WebGLRenderer();

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

document.body.appendChild(renderer.domElement);


const geometry = new THREE.SphereGeometry(
    1,
    64,
    64
);

const material = new THREE.MeshBasicMaterial({
    color: 0x1565c0
});


const earth = new THREE.Mesh(
    geometry,
    material
);

scene.add(earth);


function animate(){

    requestAnimationFrame(animate);

    renderer.render(
        scene,
        camera
    );

}

animate();
