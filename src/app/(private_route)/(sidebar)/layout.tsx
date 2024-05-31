import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { IRole } from "@/entities";
import { get_unread_buckets } from "@/features";
import { Navbar, Sidebar, SidebarSkeleton } from "@/widgets";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { ReactNode, Suspense } from "react";
import Loading from "./loading";
export const metadata: Metadata = {
  title: 'Unilib',
  description: 'Админ-панель библиотеки unilib'
}

const RootLayout = async ({ children }: {children: ReactNode}) => {
  let unread_buckets = 4
  return (
    <>
      <Sidebar unread_buckets={unread_buckets} roles={['Библиотекарь']}>
        {children}
      </Sidebar>
    </>
  )
}
export default RootLayout