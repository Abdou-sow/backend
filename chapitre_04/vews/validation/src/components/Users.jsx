import { useEffect, useState } from "react";

function Users () {
    const [users ,setUsers]=useState([])
    useEffect(()=>{
        fetch("http://localhost:9000")
        .then(res => res.json)
        .then(dataUsers => {
            setUsers(dataUsers)
        
        })
    console.log("users :",users);
    })
    return (
        <div>
            <h3>je suis dans users !</h3>
            
        </div>
    )

}

export default Users;
