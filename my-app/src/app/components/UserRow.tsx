type User = {
    name: string,
    email: string,
    address: string
}

export default function UserRow({ user }: { user: User }) {
    return (
        <tbody>
            <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
            </tr>
        </tbody>
    );
}