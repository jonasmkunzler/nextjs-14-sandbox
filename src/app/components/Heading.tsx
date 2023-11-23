import { ReactElement } from "react"

type HeadingProps = { title:string }

export default function Heading({title} : HeadingProps) {
  return <h1>{title}</h1>
}