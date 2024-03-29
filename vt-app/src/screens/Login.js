import React from "react"
import {useState} from "react"
import {useNavigate} from "react-router-dom"

export default function Login(){
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onLogin = (e) => {
        navigate('/')
    }
    return (
        <div className="bar-color">
            <h1 className="text-center"><u>Log In</u></h1>
        <form>
            <div className="form-group w-25 mx-auto">
                <label for="exampleInputEmail1">Email address</label>
                <input
                    id="exampleInputEmail1"
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Email address"
                    required
                    onChange={(e)=>setEmail(e.target.value)}
                />

            </div>
            <div className="form-group w-25 mx-auto">
                <label for="exampleInputPassword1">Password</label>
                <input
                    id="exampleInputPassword1"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    required
                    onChange={(e)=>setPassword(e.target.value)}
                />
            </div>
            <div className="form-group text-center w-25 mx-auto">
            <br/>
            <button
                type="submit"
                className="btn btn-primary"
                onClick={onLogin}
            >
                Submit
            </button>
                <br/>
                <br/>
                <br/>
            </div>
        </form>
        </div>
    )
}