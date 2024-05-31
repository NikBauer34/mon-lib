"use client"

import { signOut } from "next-auth/react"

const Home = () => {
  const g = async(e: any) => {
    e.preventDefault()
    await signOut()
  }
  
  return (
    <>
      <h1>Hi</h1>
      <button onClick={e => g(e)}>Sign Out</button>
    </>
  )
}
export default Home