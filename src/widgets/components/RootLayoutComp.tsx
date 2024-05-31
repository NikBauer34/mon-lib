"use client"
import { get_unread_buckets } from "@/features"
import { useSession } from "next-auth/react"
import Sidebar from "./Sidebar"
import { ReactNode } from "react"

export default async function RootLayoutComp({children}: {children: ReactNode}) {
  const {data: session} = useSession()
  console.log(session?.user.token)
  let {worker, worker_roles} = await get_unread_buckets(session?.user.token || '')
  let roles: string[] = []
  roles = worker_roles.map(el => el.value)
  return (
    <>
      {/* <Sidebar unread_buckets={6} roles={['Библиотекарь']}>
        {children}
      </Sidebar> */}
    </>
  )
}