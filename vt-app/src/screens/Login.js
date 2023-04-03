import React from "react"
import useState from "react"
import useNavigate from "react-router-dom"
import signInWithEmailAndPassword from "firebase/auth"
import auth from "../firebaseSetup"

export default function Login(){
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/home")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }

    return (
        <div className="container">
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
                    <small id="emailHelp" class="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
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
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={onLogin}>
                    Submit
                </button>
            </form>
        </div>
    )
}