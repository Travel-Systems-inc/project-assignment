import React from 'react'
import './UIstyle.css'
import {Link} from "react-router-dom";

export default function Footer(){
    return (
        <footer className="bar-color py-2">
            <Link className="bar-color" to="/">
                Travel Systems inc
            </Link>
        </footer>
    )
}