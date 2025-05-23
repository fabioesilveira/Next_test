import { useRouter } from "next/router"
import UserRow from "./components/UserRow"
import Link from "next/link";

export default function Home() {

  const router = useRouter();

  const users = [
    { id: 1, name: "Fabio", email: "fabio@gmail.com", address: "Sao Paulo" },
    { id: 2, name: "Allan", email: "allan@gmail.com", address: "Natal" },
    { id: 3, name: "Gabriela", email: "gaby@hotmail.com", address: "Ipatinga" },
    { id: 4, name: "Junior", email: "juninho@yahoo.com", address: "Rio de Janeiro" },
    { id: 5, name: "Amanda", email: "amanda.dj@msn.com", address: "Salvador" },
    { id: 6, name: "Clara", email: "clara.barros@gmail.com", address: "Belo Horizonte" },
    { id: 7, name: "Cristiano", email: "cris.varr@terra.com", address: "Campinas" },
    { id: 8, name: "Raimundo", email: "raimundo@gmail.com", address: "Manaus" },
  ]


  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
          {users.map((e, i) => (

            <UserRow key={e.id} user={e} />

          ))}
      </table>
      
    </div>
  )
}