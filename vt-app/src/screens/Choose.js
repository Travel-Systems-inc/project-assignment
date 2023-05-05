import React from 'react'
import {Navigate} from "react-router-dom";

export default function Choose(){
    return (
        <div className="bar-color">
            <h1 className="text-center"><u>Log In</u></h1>
            <div className="form-group text-center w-25 mx-auto">
                <br/>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={<Navigate to={'/create/'}/>}
                >
                    Register
                </button>
            </div>
        </div>
    )
}