import * as THREE from 
'https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js';


// ساخت صحنه
const scene = new THREE.Scene();


// دوربین
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    100
);

camera.position.z = 4;


// رندر
const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

document.body.appendChild(renderer.domElement);


// کره زمین
const geometry = new THREE.SphereGeometry(
    1,
    64,
    64
);


const material = new THREE.MeshStandardMaterial({
    color: 0x1565c0,
    roughness: 0.7
});


const earth = new THREE.Mesh(
    geometry,
    material
);


scene.add(earth);


// نور خورشید
const sunlight = new THREE.DirectionalLight(
    0xffffff,
    2
);

sunlight.position.set(
    5,
    3,
    5
);

scene.add(sunlight);


// نور محیط
const ambient = new THREE.AmbientLight(
    0xffffff,
    0.3
);

scene.add(ambient);



// محورهای مختصات سه بعدی
const axes = new THREE.AxesHelper(3);

scene.add(axes);



// حلقه دایره البروج
const eclipticGeometry =
    new THREE.RingGeometry(
        1.4,
        1.42,
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


    // چرخش زمین
    earth.rotation.y += 0.003;


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
    window.innerWidth /
    window.innerHeight;


    camera.updateProjectionMatrix();


    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

});
