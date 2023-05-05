import React, {useEffect, useRef} from 'react'
//import loadGoogleMapsApi from 'load-google-maps-api'
import './Home.css'
import GoogleMap from "../components/GoogleMap";

//class type reactjs file
export default function Home(){
    return (
        <div style={{height: window.innerHeight-16*5-3}}>
            <GoogleMap />
        </div>
    )
}