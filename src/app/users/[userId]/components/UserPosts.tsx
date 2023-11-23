import getUserPosts from "@/app/lib/getUserPosts"

type Props = {
  userId: string
}

export default async function UserPosts({ userId }: Props) {
  const posts = await getUserPosts(userId)

  const content = posts.map((post:Post) => {
      return (
          <article key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <br />
          </article>
      )
  })

  return content
}