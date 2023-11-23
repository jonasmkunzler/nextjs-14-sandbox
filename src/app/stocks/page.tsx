
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:'Stocks',
}

 

 export default async function stockPage() { 
  
  return(
    <>
    <h1>Página Principal:</h1>
    

    <Link href="/stocks">
      <h2>
        Site Ações
      </h2>
    </Link>
    
    </>
  )
};


