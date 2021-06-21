import { useEffect, useState } from "react";

function InfoUsers () {
    const [info ,setInfo]=useState([])
    useEffect(()=>{
        fetch("http://localhost:8000/users/userName/")
        .then(res => res.json())
        .then(dataUsers => {
            setUsers(dataUsers)
        
        })
        
    },[])

    return (
        <div>
            <h3>info users !</h3>
            
            
        </div>
    )

}

export default InfoUsers;
