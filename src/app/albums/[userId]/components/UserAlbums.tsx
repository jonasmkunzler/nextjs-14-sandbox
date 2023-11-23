import getUserAlbums from "@/app/lib/getUserAlbums"
import getUserPosts from "@/app/lib/getUserPosts"

type Props = {
  userId: string
}

export default async function UserAlbums({ userId }: Props) {
  const posts = await getUserAlbums(userId)

  const content = posts.map((post:Album) => {
      return (
          <article key={post.id}>
              <h2>{post.title}</h2>
              <br />
          </article>
      )
  })

  return content
}