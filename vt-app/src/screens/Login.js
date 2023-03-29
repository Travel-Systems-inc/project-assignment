import React from "react";

export default function Login(){
    return (
        <div className="container">
            <div className="formFields">
                <input
                    value=""
                    placeholder="Username"
                    size="large"
                    className="stringInput"
                />
                <input
                    value=""
                    placeholder="Password"
                    size="large"
                    type="password"
                    className="stringInput"
                />
            </div>
        </div>
    )
}
