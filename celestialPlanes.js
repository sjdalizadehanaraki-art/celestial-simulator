import * as THREE from "three";


export function createCelestialPlanes(parent){


    // -------------------------
    // صفحه استوای سماوی
    // -------------------------

    const equatorGeometry =
    new THREE.CircleGeometry(
        4.8,
        128
    );


    const equatorMaterial =
    new THREE.MeshBasicMaterial({

        color:0x00ff00,

        transparent:true,

        opacity:0.1,

        side:THREE.FrontSide,

        depthWrite:false

    });


    const celestialEquator =
    new THREE.Mesh(
        equatorGeometry,
        equatorMaterial
    );


    parent.add(
        celestialEquator
    );





    // -------------------------
    // صفحه دایره البروج
    // -------------------------

    const eclipticGeometry =
    new THREE.CircleGeometry(
        4.8,
        128
    );


    const eclipticMaterial =
    new THREE.MeshBasicMaterial({

        color:0xff8800,

        transparent:true,

        opacity:0.1,

        side:THREE.FrontSide,

        depthWrite:false

    });


    const ecliptic =
    new THREE.Mesh(
        eclipticGeometry,
        eclipticMaterial
    );


    // شیب دایره البروج

    ecliptic.rotation.x =
    THREE.MathUtils.degToRad(
        23.44
    );


    parent.add(
        ecliptic
    );


    return {

        celestialEquator,

        ecliptic

    };


}
