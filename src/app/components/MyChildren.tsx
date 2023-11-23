import { ReactNode } from "react"

type MyChildrenProps = {
  children:ReactNode
}

export default function MyChildren({children}:MyChildrenProps) {
return <h1>Minha Filha {children}</h1>
}
