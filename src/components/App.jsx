import UserList from "./UserList";
import { useState, useEffect } from "react";

/**We need to:

- Add a state for the URL.
- Update useEffect to fetch data based on the URL.
- Pass the URL and a function to update it to UserList. */


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
      // not neccessary but It catches any failures in the fetch request chain

  }, [url]); // URL as dependency

  return (
    <>
      <UserList users={users} url={url} setUrl={setUrl} />
    </>
  );
}

export default App;