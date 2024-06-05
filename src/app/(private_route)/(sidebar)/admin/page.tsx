import { useSession } from "next-auth/react"

export default function Test() {
  const {data} = useSession()
  return (
    <h1> No</h1>
  )
}