const getLocation = () => {
    
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser");
    }

};

const showPosition = (position) => {
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
    
    document.getElementById('q').value = lat + ',' + lng;
    document.getElementById('form').submit();
    console.log(lat, lng);
}

const showError = (error) => {
    switch(error.code) {

        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        
        case error.TIMEOUT:
            alert("The request to get user location timed out");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
        default:
            alert("An unknown error occurred.");
    };
    //https://www.google.com/maps?q=11.5503284,104.9303976
}