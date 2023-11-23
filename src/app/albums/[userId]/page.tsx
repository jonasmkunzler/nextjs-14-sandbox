import getUser from "@/app/lib/getUser"
import getUserPosts from "@/app/lib/getUserPosts"
import { Metadata } from "next"
import { Suspense } from "react"
import UserAlbums from "./components/UserAlbums"
import getAllUsers from "@/app/lib/getAllUsers"
import { notFound } from "next/navigation"


type Params ={
  params: {
    userId:string
  }
}

export async function generateMetadata({ params: { userId } }: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId)
  const user: User = await userData

  if(!user) return notFound()

  return {
      title: user.name,
      description: `This is the page of ${user.name}`
  }
}

//Esse é um exemplo de fetch sequencial, onde o segundo fetch precisa dos dados do primeiro fetch, ou seja, fetch encadeado.
export default async function AlbumPage({ params: { userId } }: Params) {
  const userData = await getUser(userId)
  const user = await userData
  
  if(!user.name) return notFound()
  
    return (
        <>
            <h2>SSG</h2>
            <br/>
            <h2>{user.name}</h2>
            <br />
            <Suspense fallback={<h2>Loading...</h2>}>
              <UserAlbums userId={user.id.toString()} />
            </Suspense>
        </>
  )
}

export async function generateStaticParams() {
  const usersData: Promise<User[]> = await getAllUsers()
  const users = await usersData
  return users.map((user) => ({ userId: user.id.toString() }))

}