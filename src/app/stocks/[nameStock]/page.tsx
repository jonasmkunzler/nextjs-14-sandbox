import ShowStocks from "@/app/stocks/[nameStock]/components/ShowStocks"
import getAllStocks from "@/app/lib/getAllStocks"
import Link from "next/link"
import { Metadata } from "next"
import { notFound } from "next/navigation"

type Params = {
  params: {
    nameStock:string
  }
}

type PropsStock = {
  params: {
      nameStock: string,
  }
}

export async function generateMetadata({ params: { nameStock} }: PropsStock): Promise<Metadata> {
  
  if(!nameStock) {
    return{
      title: 'Stock not found'
    }
  }
  
  return {
      title: nameStock,
      description: `This is the page of ${nameStock}`
  }
}

//
export default async function SingleStockPage({ params : {nameStock}}:Params) {
  const stockDataGet: Promise<Stock[]> = getAllStocks(nameStock)
  //Pode ter mais fetch aqui
  const [stockData] = await Promise.all([stockDataGet])

  if(!stockData) return notFound()

  return (
    <div>
      <h2>{nameStock}</h2> 
      <Link href="/">Home</Link>
      <br/>
      <ShowStocks promise={stockData} />
    </div>
  )
}