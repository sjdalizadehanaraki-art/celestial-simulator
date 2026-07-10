import * as THREE from "three";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);


const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(0, 0, 4);


// رندر
const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

renderer.setPixelRatio(
    window.devicePixelRatio
);

document.body.appendChild(renderer.domElement);



// نور
const ambient = new THREE.AmbientLight(
    0xffffff,
    0.4
);

scene.add(ambient);


const sunLight = new THREE.DirectionalLight(
    0xffffff,
    2
);

sunLight.position.set(
    5,
    3,
    5
);

scene.add(sunLight);



// بارگذاری تصویر زمین
const loader = new THREE.TextureLoader();


const earthTexture = loader.load(
    "earth.png"
);


// کره زمین
const earth = new THREE.Mesh(
    new THREE.SphereGeometry(
        1,
        64,
        64
    ),

    new THREE.MeshStandardMaterial({
        map: earthTexture,
        roughness: 1
    })
);


scene.add(earth);



// محور مختصات
const axes = new THREE.AxesHelper(2.5);

scene.add(axes);



// چرخش
function animate(){

    requestAnimationFrame(animate);

    earth.rotation.y += 0.003;

    renderer.render(
        scene,
        camera
    );

}


animate();



// تنظیم صفحه
window.addEventListener(
"resize",
()=>{

camera.aspect =
window.innerWidth /
window.innerHeight;

camera.updateProjectionMatrix();


renderer.setSize(
window.innerWidth,
window.innerHeight
);

});
