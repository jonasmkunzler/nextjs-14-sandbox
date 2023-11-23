import Link from "next/link";
import Heading from "./components/Heading";
import MyChildren from "./components/MyChildren";
import { eachStock } from "./constants";


export async function generateMetadata() {

}

export default async function page() {
 
  return (
    <main className="flex h-screen justify-center bg-stone-900">
      <div className="h-full w-full mx-auto max-w-screen-xl ">
        <div className="flex flex-row p-2  h-full">
          <div className="text-2xl p-4 m-2 border-2 border-stone-700 text-white w-full rounded-xl text-left bg-stone-800 shadow-4xl">
            <p>SSR Parallel:</p>
            {eachStock.map((nameStock, index) => (
              <p key={index}>
                <Link href={`/stocks/${nameStock.sigla}`}>{nameStock.name}</Link>
              </p>
            ))}
            <br />
            <p>SSR Sequential:</p>
            <Link href="/users">
              <p>User Page</p>
            </Link>
            <br />
            <p>ALBUMS SSG:</p>
            <Link href="/albums">
              <p>Albums Page</p>
            </Link>
            <br />
            <p>TO-DO LIST ISR:</p>
            <Link href="/todos">
              <p>Todos Page</p>
            </Link>
            <br />
            <p>PHOTOS USE CLIENT:</p>
            <Link href="/photos">
              <p>Photos</p>
            </Link>
          </div>
         {/*  <p className="text-2xl m-2 border-2 border-stone-700 text-white w-4/5 rounded-xl text-center bg-stone-800 shadow-4xl">
            MAIN
          </p> */}
        </div>
    
      </div>
    </main>
  )
}