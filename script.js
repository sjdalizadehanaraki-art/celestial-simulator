import * as THREE from 
'https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js';

import { OrbitControls } from 
'https://cdn.jsdelivr.net/npm/three@0.160/examples/jsm/controls/OrbitControls.js';


// صحنه
const scene = new THREE.Scene();


// دوربین
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(0, 0, 5);


// رندر
const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

document.body.appendChild(renderer.domElement);


// کنترل با لمس و موس
const controls = new OrbitControls(
    camera,
    renderer.domElement
);

controls.enableDamping = true;


// کره زمین
const earthGeometry = new THREE.SphereGeometry(
    1,
    64,
    64
);


const earthMaterial = new THREE.MeshStandardMaterial({
    color: 0x1565c0
});


const earth = new THREE.Mesh(
    earthGeometry,
    earthMaterial
);


scene.add(earth);


// نور خورشید
const light = new THREE.DirectionalLight(
    0xffffff,
    2
);

light.position.set(5,3,5);

scene.add(light);


// نور محیط
scene.add(
    new THREE.AmbientLight(
        0xffffff,
        0.3
    )
);


// محورهای مختصات
const axes = new THREE.AxesHelper(3);

scene.add(axes);


// حلقه دایره البروج (فعلاً ساده)
const eclipticGeometry =
    new THREE.RingGeometry(
        1.35,
        1.36,
        128
    );


const eclipticMaterial =
    new THREE.MeshBasicMaterial({
        color: 0xffff00,
        side: THREE.DoubleSide
    });


const ecliptic =
    new THREE.Mesh(
        eclipticGeometry,
        eclipticMaterial
    );


// زاویه میل دایره البروج
ecliptic.rotation.x =
    THREE.MathUtils.degToRad(23.44);


scene.add(ecliptic);



// انیمیشن
function animate(){

    requestAnimationFrame(animate);

    controls.update();

    renderer.render(
        scene,
        camera
    );

}


animate();



// تنظیم اندازه صفحه
window.addEventListener(
'resize',
()=>{

camera.aspect =
window.innerWidth/window.innerHeight;

camera.updateProjectionMatrix();


renderer.setSize(
window.innerWidth,
window.innerHeight
);

});
