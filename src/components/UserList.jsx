import UserCard from './UserCard'
import Search from './Search'

export default function UserList({users}) {

    return (
        <>
            <Search />
            <div className="user-list">
                {users.map((user) => UserCard(user))}
            </div>
        </>
    )
}
