export function createHorizontalProjection(observer){


    function project(

        azimuth,
        altitude,

        width,
        height

    ){


        const size =
        Math.min(
            width,
            height
        ) * 0.8;



        const left =
        (width-size)/2;


        const top =
        (height-size)/2;



        // ----------------------------------
        // محور افقی
        // ----------------------------------

        const observerAz =
        observer.getLongitude();



        let azDeg =
        azimuth *
        180 /
        Math.PI;



        while(azDeg<0)
        azDeg+=360;


        while(azDeg>=360)
        azDeg-=360;



        let relativeAz =
        azDeg -
        observerAz;



        while(relativeAz<-180)
        relativeAz+=360;


        while(relativeAz>180)
        relativeAz-=360;



        // فقط ±90 درجه جلوی ناظر

        const x =

        left
        +

        (
            (relativeAz+90)
            /180
        )

        *size;



        // ----------------------------------
        // محور عمودی
        // ----------------------------------

        const altitudeDeg =
        altitude*
        180/
        Math.PI;



        const observerLat =
        observer.getLatitude();



        const relativeAlt =
        altitudeDeg -
        observerLat;



        const y =

        top
        +

        size

        -

        (
            (relativeAlt+90)
            /180
        )

        *size;



        return{

            x,

            y

        };


    }



    return{

        project

    };


}
