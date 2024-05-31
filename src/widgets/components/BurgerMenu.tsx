"use client"

import { Tabs, TabsList, TabsTrigger } from "@/shared"
import LinksBar from "./sidebarLinksbar"
import { useState } from "react"

export default function BurgerMenu({unread_buckets, roles}: {unread_buckets: number, roles: string[]}) {
  let [role, setRole] = useState(roles[0])
  return (
    <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4 pt-2 gap-7">
              {roles.length > 1 &&
                <Tabs defaultValue={roles[0]} className="w-[400px]">
                  <TabsList className="grid w-full grid-cols-2">
                    {roles.map(el => 
                      <TabsTrigger onClick={() => setRole(el)} value={el}></TabsTrigger>
                    )}
                  </TabsList>
                </Tabs>
              }
              <LinksBar unread_buckets={unread_buckets} is_burger={true} role={role}/>
            </nav>
          </div>
  )
}