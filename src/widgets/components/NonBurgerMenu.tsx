"use client"

import { BookMarked, ShieldCheck } from "lucide-react"
import { useState } from "react"
import LinksBar from "./sidebarLinksbar"

export default function NonBurgerMenu({unread_buckets, roles}: {unread_buckets: number, roles: string[]}) {
  let all_roles = ['Библиотекарь', 'Администратор']
  function getRole() {
    if (roles[0] == 'Библиотекарь') {
      return 0
    } else return 1
  }
  let [roleOrder, setRoleOrder] = useState(getRole())
  return (
    <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4 pt-2 gap-7">
              {roles.length > 1 && all_roles[roleOrder] == 'Библиотекарь' &&
                <BookMarked onClick={() => setRoleOrder(1)}/>
              }
              {roles.length > 1 && all_roles[roleOrder] == 'Администратор' &&
                <ShieldCheck onClick={() => setRoleOrder(0)}/>
              }
            <LinksBar unread_buckets={unread_buckets} is_burger={false} role={'Библиотекарь'}/>
            </nav>
          </div>
  )
}