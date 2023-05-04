import React, {useEffect} from 'react'
import loadGoogleMapsApi from 'load-google-maps-api'
//import './Home.css'

//class type reactjs file
export default function Home(){
    let map, infoWindow;
    var currentMarker;
    let markerLookUp = [];

    useEffect(() => {
        loadGoogleMapsApi({ key: process.env.REACT_APP_MAPS_API_KEY })
            .then(() => {
                initMap();
            })
            .catch((error) => {
                console.error('Error loading Google Maps API', error);
            });
    }, []);

    function initMap() {
        map = new window.google.maps.Map(document.getElementById("map"), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 20,
            streetViewControl: false
        });
        infoWindow = new window.google.maps.InfoWindow();

        const locationButton = document.createElement("button");

        locationButton.textContent = "Pan to Current Location";
        locationButton.classList.add("custom-map-control-button");
        map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(locationButton);
        locationButton.addEventListener("click", () => {
            // Try HTML5 geolocation.
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const pos = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        };

                        //make sure current location does not exist already
                        for (var i = 0, l = markerLookUp.length; i < l; i++){
                            if (markerLookUp[i][0] === pos[0] && markerLookUp[i][1] === pos[1]){
                                //nothing
                            }
                            else {
                                markerLookUp.push(pos);
                                currentMarker = new window.google.maps.Marker({
                                    position: pos,
                                    map: map,
                                    label: 'You',
                                    title: 'Current Location'
                                });
                            }
                        }
                        if (l == 0){
                            markerLookUp.push(pos);
                            currentMarker = new window.google.maps.Marker({
                                position: pos,
                                map: map,
                                label: 'You',
                                title: 'Current Location'
                            });
                        }

                        map.setCenter(pos);
                    },
                    () => {
                        handleLocationError(true, infoWindow, map.getCenter());
                    }
                );
            } else {
                // Browser doesn't support Geolocation
                handleLocationError(false, infoWindow, map.getCenter());
            }
        });
    }

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(
            browserHasGeolocation
                ? "Error: The Geolocation service failed."
                : "Error: Your browser doesn't support geolocation."
        );
        infoWindow.open(map);
    }

    window.initMap = initMap;
    return (
            <div id="map" style={{height: 100}}></div>
    )
}