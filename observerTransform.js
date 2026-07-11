import * as THREE from "three";


export function createObserverTransform(
    observer
){



    const group =
    new THREE.Group();




    function update(){


        const latitude =
        observer.getLatitude();



        const latRad =
        THREE.MathUtils.degToRad(
            latitude
        );



        /*
        
        تبدیل دستگاه سماوی به دستگاه ناظر
        
        فعلاً فقط شیب ناشی از عرض جغرافیایی
        
        */

        group.rotation.x =
        -(Math.PI/2 - latRad);



    }




    update();




    return {

        group,

        update

    };

}
