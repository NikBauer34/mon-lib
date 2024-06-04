"use client"

import { useEffect, useState } from "react"
import AuthenticationPage from "./LoginForm"

export default function TestLogin() {
  let [mounted, setMounted] = useState(false)
  useEffect(() => {
    setTimeout(() => setMounted(true), 4000)
  }, [])
  if (!mounted) {
    return (
      <div className="w-full h-full bg-black"></div>
    )
  }
  return (
    <AuthenticationPage />
  )
}