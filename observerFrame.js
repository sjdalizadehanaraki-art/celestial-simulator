import * as THREE from "three";


export function createObserverFrame(
    scene,
    observer
){


    const group =
    new THREE.Group();


    scene.add(
        group
    );





    function update(){


        const latitude =
        observer.getLatitude();


        const latRad =
        THREE.MathUtils.degToRad(
            latitude
        );



        /*
        
        محور ناظر:

        Y  = Zenith
        شمال روی افق
        جنوب مقابل آن
        
        */



        group.rotation.set(
            0,
            0,
            0
        );


        /*
        
        چرخش سیستم برای عرض جغرافیایی
        
        در این مرحله فقط Tilt را می‌سازیم
        
        */


        group.rotation.x =
        -latRad;



    }





    update();




    return {


        group,


        update


    };


}
