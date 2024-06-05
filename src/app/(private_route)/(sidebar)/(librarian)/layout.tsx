import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const LibrarianLayout = async ({children}: {children: ReactNode}) => {
  const session = await getServerSession(authOptions)
  if (session?.user && session.user.roles) {
    let roles = session.user.roles.map(el => el.value)
    if (!roles.includes('Библиотекарь')) {
      redirect('/sign-in')
    }
  } else {
    redirect('/sign-in')
  }
  return <>{children}</>
}
export default LibrarianLayout