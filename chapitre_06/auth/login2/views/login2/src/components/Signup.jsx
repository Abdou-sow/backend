import axios from "axios";
import { useState } from "react";

function Signup() {
    const [email, setEmail] = useState("")
    const [PassWord, setPassWord] = useState("")
    const [confirPassword, setConfirPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [surName, setSurName] = useState("")
    const [birth, setBirth] = useState("")


    const validUser = (e) => {
        e.preventDefault();

        const url = "http://localhost:8002/signup"

        axios.post(url, {
            "email": email,
            "PassWord": PassWord,
            "confirPassword": confirPassword,
            "firstName": firstName,
            "surName": surName,
            "birth": birth
        }).then(res => {
            console.log("res :", res);
            console.log("res.data :", res.data);
        })
    }
    console.log("birth :",birth);

    return (
        <div>
            <h3>Add user</h3>
            <form onSubmit={validUser}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Password </label>
                    <input type="Password" className="form-control" onChange={(e) => setPassWord(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">confirPassword</label>
                    <input type="Password" className="form-control" onChange={(e) => setConfirPassword(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">fristName</label>
                    <input type="text" className="form-control" onChange={(e) => setFirstName(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">surName</label>
                    <input type="text" className="form-control" onChange={(e) => setSurName(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">birth</label>
                    <input type="date" className="form-control" onChange={(e) => setBirth(e.target.value)}></input>
                </div>
                <button type="submit" className="btn btn-primary">valider</button>
            </form>
        </div>
    )

}

export default Signup;