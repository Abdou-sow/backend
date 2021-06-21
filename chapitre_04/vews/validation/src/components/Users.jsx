import { useEffect, useState } from "react";

function Users() {
    const [users, setUsers] = useState([])
    const [send, setSend] = useState(false)
    const [userselec,setUserselec] =useState('')

    useEffect(() => {
        fetch("http://localhost:9000/")
            .then(res => res.json())
            .then(dataUsers => {
                setUsers(dataUsers)

            })

    }, [])

    const sendInfoUser = () => {
        setSend(true);
        console.log();
    }
    console.log("user :",userselec);
    if (!send ) {
        return (
            <div>
                <h3>list des users !</h3>
                <ul>
                    {users.map(user => {
                        return <li key={user}><button onClick={sendInfoUser}>{user}</button></li>
                    })}
                </ul>

            </div>
        )
    }


    else {
        return (
            <div>

                <h3>impote les infos</h3>
            </div>
        )

    }


}

export default Users;
