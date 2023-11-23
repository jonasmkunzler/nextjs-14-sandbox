import { Metadata } from "next"
import getAllUsers from "../lib/getAllUsers"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Users',
  description: ''
}

export default async function Users() {
  const userData: Promise<User[]> = getAllUsers()
  const users = await userData
  
  return (
    <section className="h-screen">
        <Link href='/'>
          <h2>Home</h2>
        </Link>
      <br />
      {users.map((user) => {
        return (
        <div key={user.id} >
            <p>
                <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
            <br />
        </div>
        )
      })}
    </section>
  )
}