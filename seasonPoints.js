import * as THREE from "three";


export function createSeasonPoints(scene){


    const radius = 5;


    const points = [

        {
            name:"Spring Equinox",
            angle:0,
            color:0x00ff00
        },


        {
            name:"Summer Solstice",
            angle:Math.PI/2,
            color:0xffff00
        },


        {
            name:"Autumn Equinox",
            angle:Math.PI,
            color:0xff8800
        },


        {
            name:"Winter Solstice",
            angle:Math.PI*1.5,
            color:0x0088ff
        }

    ];



    points.forEach(p=>{


        const obliquity =
        THREE.MathUtils.degToRad(23.44);



        let declination = 0;



        if(
            p.name === "Summer Solstice"
        ){

            declination =
            obliquity;

        }



        if(
            p.name === "Winter Solstice"
        ){

            declination =
            -obliquity;

        }



        const x =
        radius *
        Math.cos(declination) *
        Math.cos(p.angle);



        const y =
        radius *
        Math.cos(declination) *
        Math.sin(p.angle);



        const z =
        radius *
        Math.sin(declination);



        const marker =
        new THREE.Mesh(

            new THREE.SphereGeometry(
                0.08,
                24,
                24
            ),


            new THREE.MeshBasicMaterial({

                color:p.color

            })

        );


        marker.position.set(
            x,
            y,
            z
        );


        scene.add(marker);



    });


}
