type Props = {
  params: {
    searchTerm: string
  }
}
export default function page({params: { searchTerm }}: Props) {
  return (
    <div className="h-screen">Search Page {searchTerm}</div>
  )
}