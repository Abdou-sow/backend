import axios from "axios";
import { useState } from "react";

function Formuler() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const [ville, setVille] = useState("")


    const validUser = (e) => {
        e.preventDefault();

        const url = "http://localhost:9000/users/add"

        axios.post(url, {
            "username": username,
            "email": email,
            "age": age,
            "ville": ville
        }).then(res => {
            console.log("res :", res);
            console.log("res.data :", res.data);
        })
    }

    return (
        <div>
            <h3>Add user</h3>
            <form onSubmit={validUser}>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">username</label>
                    <input type="text" class="form-control" onChange={(e) => setUsername(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Age</label>
                    <input type="number" class="form-control" onChange={(e) => setAge(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">La ville de l'utilisateur</label>
                    <input type="text" class="form-control" onChange={(e) => setVille(e.target.value)}></input>
                </div>
                <button type="submit" class="btn btn-primary">valider</button>
            </form>
        </div>
    )

}

export default Formuler;