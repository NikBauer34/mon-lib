import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { IRole } from "@/entities";
import { get_unread_buckets } from "@/features";
import { Navbar, Sidebar, SidebarSkeleton } from "@/widgets";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { ReactNode, Suspense } from "react";
import Loading from "./loading";
import { redirect } from "next/navigation";
export const metadata: Metadata = {
  title: 'Unilib',
  description: 'Админ-панель библиотеки unilib'
}

const RootLayout = async ({ children }: {children: ReactNode}) => {
  const session = await getServerSession(authOptions)
  const data = await get_unread_buckets('Bearer ' + String(session?.user?.token))
  let {worker, worker_roles} = data
  let unread_buckets = worker.unread_buckets
  let roles = worker_roles.map(el => el.value)
  console.log(unread_buckets)
  console.log(roles)
  // let unread_buckets = 45
  return (
    <>
    <Suspense fallback={<SidebarSkeleton/>}>
      <Sidebar unread_buckets={unread_buckets} roles={roles}>
        {children}
      </Sidebar>
    </Suspense>
    </>
  )
}
export default RootLayout