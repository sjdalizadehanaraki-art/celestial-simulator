export function createObserver(){


    let latitude = 32.65; 
    // عرض جغرافیایی پیش فرض اصفهان


    let longitude = 51.67;



    function setLocation(
        lat,
        lon
    ){

        latitude = lat;
        longitude = lon;

    }



    function getLatitude(){

        return latitude;

    }



    function getLongitude(){

        return longitude;

    }



    return {

        setLocation,

        getLatitude,

        getLongitude

    };


}
