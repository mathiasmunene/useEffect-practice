import UserList from "../components/UserList"
import {useState, useEffect} from "react";


function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users/")
      .then(response => response.json())
      .then(data => {
        setUsers(data)
      })
    }, [])

    return (
        <>
          <UserList users={users}/>
        </>
    )
}

export default App
