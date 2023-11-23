import getAllTodos from "../lib/getAllTodos"

//export const revalidate = 20

export default async function TodosPage() {
  const todosData:Todos[] = await getAllTodos()
  return (
    <div>
      <h2>
        Todas as Tarefas a fazer:
      </h2>
      {
        todosData.map(todo => {
          return ( <div key={todo.id}>
            <p>{todo.completed && todo.title}</p>
          </div>
          )
      })
    }
    </div>
  )
}