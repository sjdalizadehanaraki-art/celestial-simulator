import * as THREE from "three";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(0, 0, 6);

const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

document.body.appendChild(renderer.domElement);


// نورها
const ambient = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambient);

const sun = new THREE.DirectionalLight(0xffffff, 2);
sun.position.set(5, 3, 5);
scene.add(sun);


// کره زمین
const earth = new THREE.Mesh(
    new THREE.SphereGeometry(1, 64, 64),
    new THREE.MeshStandardMaterial({
        color: 0x2c82ff,
        roughness: 0.8,
        metalness: 0
    })
);

scene.add(earth);


// محورهای مختصات
scene.add(new THREE.AxesHelper(2.5));


function animate() {

    requestAnimationFrame(animate);

    earth.rotation.y += 0.003;

    renderer.render(scene, camera);

}

animate();


window.addEventListener("resize", () => {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

});
