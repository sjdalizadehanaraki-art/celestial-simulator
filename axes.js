import * as THREE from "three";


export function createAxes(scene){


    const length = 5;



    // محور X (قرمز)

    scene.add(
        new THREE.ArrowHelper(
            new THREE.Vector3(1,0,0),
            new THREE.Vector3(0,0,0),
            length,
            0xff0000
        )
    );



    // محور Y (سبز)

    scene.add(
        new THREE.ArrowHelper(
            new THREE.Vector3(0,1,0),
            new THREE.Vector3(0,0,0),
            length,
            0x00ff00
        )
    );



    // محور Z (آبی)

    scene.add(
        new THREE.ArrowHelper(
            new THREE.Vector3(0,0,1),
            new THREE.Vector3(0,0,0),
            length,
            0x0088ff
        )
    );



    // برچسب ها

    const xLabel =
    createLabel("X", "red");

    xLabel.position.set(
        5.4,
        0,
        0
    );


    const yLabel =
    createLabel("Y", "lime");

    yLabel.position.set(
        0,
        5.4,
        0
    );


    const zLabel =
    createLabel("Z", "cyan");

    zLabel.position.set(
        0,
        0,
        5.4
    );



    scene.add(
        xLabel,
        yLabel,
        zLabel
    );

}





function createLabel(text,color){


    const canvas =
    document.createElement("canvas");


    const ctx =
    canvas.getContext("2d");


    canvas.width = 128;
    canvas.height = 128;


    ctx.font =
    "80px Arial";


    ctx.fillStyle =
    color;


    ctx.fillText(
        text,
        20,
        80
    );



    const texture =
    new THREE.CanvasTexture(
        canvas
    );


    const sprite =
    new THREE.Sprite(
        new THREE.SpriteMaterial({
            map:texture,
            transparent:true
        })
    );


    sprite.scale.set(
        0.5,
        0.5,
        0.5
    );


    return sprite;

}
