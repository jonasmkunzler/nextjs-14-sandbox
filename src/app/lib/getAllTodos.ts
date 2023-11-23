export default async function getAllTodos() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`, { next: {revalidate: 60}})
  console.log("60 RUN");
  
  if(!res) return undefined
  return res.json()

}