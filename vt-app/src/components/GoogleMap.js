// components/GoogleMap.js
import React, { useEffect, useRef } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%',
};

const defaultCenter = {
    lat: 0,
    lng: 0,
};

function Map() {
    const mapRef = useRef(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                mapRef.current.panTo(pos);
                mapRef.current.setZoom(16);
            });
        }
    }, []);

    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={defaultCenter}
                zoom={2}
                onLoad={(map) => (mapRef.current = map)}
            >
                {navigator.geolocation && (
                    <Marker position={defaultCenter} onLoad={(marker) => marker.setVisible(false)} />
                )}
            </GoogleMap>
        </LoadScript>
    );
}

export default React.memo(Map);
