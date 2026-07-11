import * as THREE from "three";


export function createSunTrail(){


    const points = [];



    const geometry =
    new THREE.BufferGeometry();



    const material =
    new THREE.LineBasicMaterial({

        color:0xffff00,

        transparent:true,

        opacity:0.8

    });




    const line =
    new THREE.Line(
        geometry,
        material
    );





    let lastMinute = -1;



    function rebuild(){


        geometry.setFromPoints(
            points
        );


    }






    function addPoint(
        position,
        minute
    ){



        // فقط یک نقطه برای هر دقیقه

        if(
            minute === lastMinute
        ){

            return;

        }



        lastMinute =
        minute;




        points.push(

            position.clone()

        );




        rebuild();


    }









    function clear(){



        points.length = 0;


        lastMinute = -1;



        rebuild();


    }








    function show(){


        line.visible =
        true;


    }








    function hide(){


        line.visible =
        false;


    }








    function toggle(){


        line.visible =
        !line.visible;


    }








    function isVisible(){


        return line.visible;


    }








    return {


        line,


        addPoint,


        clear,


        show,


        hide,


        toggle,


        isVisible


    };


}
