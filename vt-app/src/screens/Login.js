import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login(){
    return (
        <div className="container">
            <form>
                <div class="form-group w-25 mx-auto">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                    />
                    <small id="emailHelp" class="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>
                <div class="form-group w-25 mx-auto">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
