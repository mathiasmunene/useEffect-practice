import UserList from "./components/UserList";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/users/"); // State for URL

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Ensure data is always an array for consistent rendering
        setUsers(Array.isArray(data) ? data : [data]);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, [url]); // URL as dependency

  return (
    <>
      <UserList users={users} url={url} setUrl={setUrl} />
    </>
  );
}

export default App;