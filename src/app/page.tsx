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
            <h2>SSR Parallel:</h2>
            {eachStock.map((nameStock, index) => (
              <p key={index}>
                <Link href={`/stocks/${nameStock.sigla}`}>{nameStock.name}</Link>
              </p>
            ))}
            <br />
            <h2>SSR Sequential:</h2>
            <Link href="/users">
              <p>User Page</p>
            </Link>
            <br />
            <h2>ALBUMS SSG:</h2>
            <Link href="/albums">
              <p>Albums Page</p>
            </Link>
            <br />
            <h2>TO-DO LIST ISR:</h2>
            <Link href="/todos">
              <p>Todos Page</p>
            </Link>
            <br />
            <h2>PHOTOS USE CLIENT:</h2>
            <Link href="/photos">
              <p>(com useReducer)</p>
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