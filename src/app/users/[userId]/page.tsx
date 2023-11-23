import getUser from "@/app/lib/getUser"
import getUserPosts from "@/app/lib/getUserPosts"
import { Metadata } from "next"
import { Suspense } from "react"
import UserPosts from "./components/UserPosts"
import { notFound } from "next/navigation"

type Params ={
  params: {
    userId:string
  }
}

export async function generateMetadata({ params: { userId } }: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId)
  const user: User = await userData

  return {
      title: user.name,
      description: `This is the page of ${user.name}`
  }

}

//Esse é um exemplo de fetch sequencial, onde o segundo fetch precisa dos dados do primeiro fetch, ou seja, fetch encadeado.
export default async function UserPage({ params: { userId } }: Params) {
  const userData = await getUser(userId)
  const user = await userData

  if(!user.name) return notFound()

    return (
        <>
            <h2>{user.name}</h2>
            <br />
            <Suspense fallback={<h2>Loading...</h2>}>
              <UserPosts userId={user.id.toString()} />
            </Suspense>
        </>
  )
}