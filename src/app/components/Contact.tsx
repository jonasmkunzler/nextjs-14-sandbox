"use client"

import { useEffect, useMemo, useState } from "react"

interface User {
  id:number,
  username:string,
}

type fibFunc = (n: number) => number 

const fib: fibFunc = (n) => {
  if (n < 2) return n 
  return fib(n - 1) + fib(n - 2) 
}

const myNum: number = 32 

function Contact() {
  const [user, setUser] = useState<User[]>()
  
  useEffect(() => {
    
    console.log('Montando...');
    console.log(user);
    
  
    return () => {
      console.log('desmontando...');
      
    }
  }, [user])
  
  const result = useMemo<number>(() => fib(myNum),[])
  
  console.log(result);
  
  return (
    <div>Contact</div>
  )
}
export default Contact