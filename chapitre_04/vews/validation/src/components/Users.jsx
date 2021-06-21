import { useEffect, useState } from "react";

function Users () {
    const [users ,setUsers]=useState([])
    useEffect(()=>{
        fetch("http://localhost:9000/")
        .then(res => res.json())
        .then(dataUsers => {
            setUsers(dataUsers)
        
        })
        
    },[])
    
    return (
        <div>
            <h3>list des users !</h3>
            <ul>
                {users.map(user=>{
                    return<li>{user}</li>
                })}
            </ul>
            
        </div>
    )

}

export default Users;
