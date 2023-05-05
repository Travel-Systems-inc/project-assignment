import React from 'react'
import './UIstyle.css'

export default function Menu(){
    return (
        <header>
            <div className="bar-color d-flex justify-content-between  py-2 ps-2 m-0 text-center">
                <i className="fa-sharp fa-solid fa-bars fa-xl align-self-center"/>
                <i className="fa-solid fa-location-dot "/>
                Hello
            </div>
        </header>
    )
}