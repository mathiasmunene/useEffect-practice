export default function Search({ url, setUrl }) {
    const handleRandomUser = () => {
      const randomId = Math.floor(Math.random() * 10) + 1; // Random number 1–10
      setUrl(`https://jsonplaceholder.typicode.com/users/${randomId}`);
    };
  
    const handleAllUsers = () => {
      setUrl("https://jsonplaceholder.typicode.com/users/"); // Reset to all users
    };
  
    return (
      <div className="search">
        <button className="search-number" onClick={handleRandomUser}>
          Get Random User
        </button>
        <button className="all-users" onClick={handleAllUsers}>
          Get All Users
        </button>
      </div>
    );
  }