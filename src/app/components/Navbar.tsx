import Link from "next/link";
import Search from "./Search";
import { cn } from "../lib/utils";
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '700',
  style: 'normal',
  subsets: ['latin'],
})

export default function Navbar() {
  return (
    <nav className="bg-stone-800 p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl opacity-90">
     <h1 className={cn(roboto.className,"text-3xl text-white grid place-content-center mb-2 md:mb-0")}>
        <Link href="/">
          NEXTJS 14 SANDBOX
        </Link>
      </h1>
      <Search />
    </nav>
  )
}