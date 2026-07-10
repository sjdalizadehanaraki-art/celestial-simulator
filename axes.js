import * as THREE from "three";
import { CSS2DObject } from "three/addons/renderers/CSS2DRenderer.js";


export function createAxes(scene){

    const length = 5;


    // ---------- X ----------

    scene.add(

        new THREE.ArrowHelper(

            new THREE.Vector3(1,0,0),

            new THREE.Vector3(0,0,0),

            length,

            0xff0000

        )

    );



    // ---------- Y ----------

    scene.add(

        new THREE.ArrowHelper(

            new THREE.Vector3(0,1,0),

            new THREE.Vector3(0,0,0),

            length,

            0x00ff00

        )

    );



    // ---------- Z ----------

    scene.add(

        new THREE.ArrowHelper(

            new THREE.Vector3(0,0,1),

            new THREE.Vector3(0,0,0),

            length,

            0x0088ff

        )

    );



    // برچسب ها

    scene.add(
        createLabel(
            "X",
            "red",
            5.3,
            0,
            0
        )
    );


    scene.add(
        createLabel(
            "Y",
            "lime",
            0,
            5.3,
            0
        )
    );


    scene.add(
        createLabel(
            "Z",
            "cyan",
            0,
            0,
            5.3
        )
    );

}



function createLabel(
    text,
    color,
    x,
    y,
    z
){

    const div =
    document.createElement("div");


    div.textContent =
    text;


    div.style.color =
    color;


    div.style.fontSize =
    "24px";


    div.style.fontWeight =
    "bold";


    div.style.fontFamily =
    "Arial";


    div.style.userSelect =
    "none";


    const label =
    new CSS2DObject(div);


    label.position.set(
        x,
        y,
        z
    );


    return label;

}
