// import { getServerSession } from "next-auth";
// import { ReactNode } from "react";
// import { authOptions } from "../api/auth/[...nextauth]/route";
// import { redirect } from "next/navigation";

import { ReactNode } from "react";

export default async function PrivateLayout({ children }: {children: ReactNode}) {
  // const session = await getServerSession(authOptions)

  // if(!session?.user) redirect('/sign-in')

  return <>{children}</>
}