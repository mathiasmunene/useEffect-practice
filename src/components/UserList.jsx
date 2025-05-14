import UserCard from "./UserCard";
import Search from "./Search";

export default function UserList({ users, url, setUrl }) {
  // Check if URL points to a single user (contains an ID)
  const isSingleUser = url.includes("/users/") && url.split("/users/")[1];

  return (
    <>
      <Search url={url} setUrl={setUrl} />
      <div className="user-list">
        {isSingleUser ? (
          users.length > 0 && <UserCard {...users[0]} />
        ) : (
          users.map((user) => <UserCard key={user.id} {...user} />)
        )}
      </div>
    </>
  );
}