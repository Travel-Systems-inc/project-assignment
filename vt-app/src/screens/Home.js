import React, {useEffect, useMemo, useRef} from 'react'
import {GoogleMap, Marker, useLoadScript} from "@react-google-maps/api";
import mapStyle from "../components/mapStyle";

//class type reactjs file
export default function Home(){
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    })
    const mapRef = useRef(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                mapRef.current.panTo(pos);
                mapRef.current.setZoom(20);
            });
        }
    }, []);

    if (!isLoaded) return <div className="bar-color p-5">Loading...</div>
    return <Map />

    function Map(){
        const center = useMemo(
            ()=> ({lat:0, lng:0}), [])
        const mapOptions = {
            styles: mapStyle,
            streetViewControl: false, // Disable Street View (Pegman)
            mapTypeControl: false, // Disable map type (Satellite mode) control
        }
        return (
            <div style={{height: window.innerHeight-16*5-3}}>
                <GoogleMap
                    mapContainerStyle={{height: window.innerHeight-16*5-3}}
                    zoom={20}
                    center={center}
                    options={mapOptions}
                    onLoad={(map) => (mapRef.current = map)}
                >
                    <Marker position={center}/>
                </GoogleMap>
            </div>
        )
    }
}