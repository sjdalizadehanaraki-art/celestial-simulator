import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";


const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);


// دوربین
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    100
);

camera.position.set(0, 0, 9);


// رندر
const renderer = new THREE.WebGLRenderer({
    antialias:true
});

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

renderer.setPixelRatio(
    window.devicePixelRatio
);

renderer.outputColorSpace = THREE.SRGBColorSpace;

document.body.appendChild(renderer.domElement);


// کنترل
const controls = new OrbitControls(
    camera,
    renderer.domElement
);

controls.enableDamping = true;
controls.enablePan = false;

controls.minDistance = 3;
controls.maxDistance = 30;



// نور
scene.add(
    new THREE.AmbientLight(
        0xffffff,
        0.5
    )
);


const sunLight = new THREE.DirectionalLight(
    0xffffff,
    2
);

sunLight.position.set(5,5,5);

scene.add(sunLight);



// ----------------------
// زمین
// ----------------------

const earthTexture =
new THREE.TextureLoader().load(
    "earth.png"
);


const earth =
new THREE.Mesh(

    new THREE.SphereGeometry(
        1,
        64,
        64
    ),

    new THREE.MeshStandardMaterial({
        map:earthTexture
    })

);


scene.add(earth);




// ----------------------
// کره سماوی
// ----------------------

const skySphere =
new THREE.Mesh(

    new THREE.SphereGeometry(
        5,
        64,
        64
    ),

    new THREE.MeshBasicMaterial({

        color:0x2244ff,
        transparent:true,
        opacity:0.12,
        side:THREE.BackSide

    })

);


scene.add(skySphere);





// ----------------------
// صفحه استوای سماوی
// ----------------------

const equator =
new THREE.Mesh(

    new THREE.RingGeometry(
        4.98,
        5.02,
        128
    ),

    new THREE.MeshBasicMaterial({

        color:0x00ffff,
        transparent:true,
        opacity:0.5,
        side:THREE.DoubleSide

    })

);


scene.add(equator);





// ----------------------
// صفحه دایره البروج
// ----------------------

const ecliptic =
new THREE.Mesh(

    new THREE.RingGeometry(
        4.95,
        5.05,
        128
    ),

    new THREE.MeshBasicMaterial({

        color:0xffff00,
        transparent:true,
        opacity:0.5,
        side:THREE.DoubleSide

    })

);


// میل دایره البروج
ecliptic.rotation.x =
THREE.MathUtils.degToRad(23.44);


scene.add(ecliptic);





// ----------------------
// محورهای مختصات با فلش
// ----------------------

const axesLength = 7;


const xArrow =
new THREE.ArrowHelper(

    new THREE.Vector3(1,0,0),
    new THREE.Vector3(0,0,0),
    axesLength,
    0xff0000

);


const yArrow =
new THREE.ArrowHelper(

    new THREE.Vector3(0,1,0),
    new THREE.Vector3(0,0,0),
    axesLength,
    0x00ff00

);



const zArrow =
new THREE.ArrowHelper(

    new THREE.Vector3(0,0,1),
    new THREE.Vector3(0,0,0),
    axesLength,
    0x0000ff

);


scene.add(xArrow);
scene.add(yArrow);
scene.add(zArrow);




// نوشته محور ها

function createLabel(text,color){

    const canvas =
    document.createElement("canvas");

    const ctx =
    canvas.getContext("2d");

    ctx.font="60px Arial";
    ctx.fillStyle=color;
    ctx.fillText(text,10,60);


    const texture =
    new THREE.CanvasTexture(canvas);


    const sprite =
    new THREE.Sprite(
        new THREE.SpriteMaterial({
            map:texture
        })
    );


    sprite.scale.set(
        0.5,
        0.5,
        0.5
    );


    return sprite;

}


const xLabel=createLabel("X","red");
xLabel.position.set(7.2,0,0);

const yLabel=createLabel("Y","lime");
yLabel.position.set(0,7.2,0);

const zLabel=createLabel("Z","blue");
zLabel.position.set(0,0,7.2);


scene.add(xLabel);
scene.add(yLabel);
scene.add(zLabel);





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




// تغییر اندازه

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
