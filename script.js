import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
alert("VERSION 3");


const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);


//  دوربین
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    100
);

// نگاه از سمت Y به مرکز تا Z بالا دیده شود
camera.position.set(-8, -8, 8);
camera.up.set(0, 0, 1);
camera.lookAt(0, 0, 0);


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

renderer.outputColorSpace =
THREE.SRGBColorSpace;

document.body.appendChild(
    renderer.domElement
);



// کنترل
const controls =
new OrbitControls(
    camera,
    renderer.domElement
);

controls.enableDamping = true;
controls.dampingFactor = 0.05;

controls.enablePan = false;

controls.minDistance = 3;
controls.maxDistance = 30;

controls.target.set(0,0,0);
controls.update();




// نور
scene.add(
    new THREE.AmbientLight(
        0xffffff,
        0.5
    )
);


const light =
new THREE.DirectionalLight(
    0xffffff,
    2
);

light.position.set(
    5,
    -5,
    5
);

scene.add(light);





// زمین

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
        map:earthTexture,
        roughness:1
    })

);

scene.add(earth);






// کره سماوی

const celestialSphere =
new THREE.Mesh(

    new THREE.SphereGeometry(
        5,
        64,
        64
    ),

    new THREE.MeshBasicMaterial({

        color:0x3366ff,
        transparent:true,
        opacity:0.12,
        side:THREE.BackSide

    })

);


scene.add(celestialSphere);







// استوای سماوی
// صفحه XY

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
        opacity:0.6,
        side:THREE.DoubleSide

    })

);


scene.add(equator);







// دایره البروج
// کج شدن نسبت به استوا حول X

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
        opacity:0.6,
        side:THREE.DoubleSide

    })

);


ecliptic.rotation.x =
THREE.MathUtils.degToRad(23.44);


scene.add(ecliptic);







// محورهای مختصات

const axisLength = 7;


// X اعتدال بهاری

scene.add(
new THREE.ArrowHelper(
    new THREE.Vector3(1,0,0),
    new THREE.Vector3(0,0,0),
    axisLength,
    0xff0000
)
);


// Y طول 90 درجه

scene.add(
new THREE.ArrowHelper(
    new THREE.Vector3(0,1,0),
    new THREE.Vector3(0,0,0),
    axisLength,
    0x00ff00
)
);


// Z قطب شمال

scene.add(
new THREE.ArrowHelper(
    new THREE.Vector3(0,0,1),
    new THREE.Vector3(0,0,0),
    axisLength,
    0x0088ff
)
);






// برچسب محورها

function createLabel(text,color){

    const canvas =
    document.createElement("canvas");

    const ctx =
    canvas.getContext("2d");


    ctx.font =
    "70px Arial";

    ctx.fillStyle=color;

    ctx.fillText(
        text,
        10,
        70
    );


    const texture =
    new THREE.CanvasTexture(canvas);


    const sprite =
    new THREE.Sprite(
        new THREE.SpriteMaterial({
            map:texture
        })
    );


    sprite.scale.set(
        0.6,
        0.6,
        0.6
    );


    return sprite;
}



const xLabel =
createLabel("X","red");

xLabel.position.set(
    7.3,0,0
);



const yLabel =
createLabel("Y","lime");

yLabel.position.set(
    0,7.3,0
);



const zLabel =
createLabel("Z","cyan");

zLabel.position.set(
    0,0,7.3
);


scene.add(
    xLabel,
    yLabel,
    zLabel
);







function animate(){

    requestAnimationFrame(
        animate
    );

    controls.update();


    renderer.render(
        scene,
        camera
    );

}


animate();






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
