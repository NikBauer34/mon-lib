"use client"
import { Badge, Button, Card, CardContent, CardDescription, CardHeader, CardTitle, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, Sheet, SheetContent, SheetTrigger } from "@/shared";
import { Bell, Book, CircleUser, GraduationCap, Home, LineChart, LucideIcon, Menu, Package, Package2, ShoppingBasket, ShoppingCart, TicketSlash, Users } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { ReactNode, useEffect, useMemo, useState } from "react";
interface IOptions {
  href: string,
  title: string,
  icon: ReactNode
}
const LinksBar = ({unread_buckets, is_burger, role}: {unread_buckets: number, is_burger: boolean, role: string}) => {
  const [selected, setSelected] = useState('Главная')
  const {theme, resolvedTheme} = useTheme()
  console.log('role ', role)
  let mounted = useMemo(() => theme, [theme])
  // useEffect(() => {
  //   console.log('theme ', resolvedTheme)
  // }, [])
  // console.log(resolvedTheme)
  let LibrarianOptions: IOptions[] = [
    {
      href: '/',
      title: 'Главная',
      icon: <Home className="h-8" />
    },
    {
      href: '/',
      title: 'Книги',
      icon: <Book className="h-8" />
    },
    {
      href: '/',
      title: 'Корзины',
      icon: <ShoppingBasket className="h-8" />
    }
  ]
  let AdminOptions: IOptions[] = [{
    href:'/',
    title: 'Главная',
    icon: <Home className="h-8" />
  }]
  function get() { 
    if (role == 'Библиотекарь') {
      console.log('yeah')
      return LibrarianOptions
    } else {
      console.log('no')
      return AdminOptions
    }
  }
  let [roleOptions, setRoleOptions] = useState<IOptions[]>(get())
  useEffect(() => {
    setRoleOptions(get())
  }, [role])
  // if (role == 'Библиотекарь') {
  //   setRoleOptions([...roleOptions, ...LibrarianOptions])
  // }
  return (
    <>
      {roleOptions.map(el => 
        <Link 
          href={el.href}
          className={`flex ${selected == el.title ? resolvedTheme=='light' ?"bg-dark-1 text-white" : "bg-white text-black" : resolvedTheme=='light' ? "bg-white text-black" : "bg-black/5 text-white"} items-center gap-3 rounded-lg px-3 py-2 transition-all md:hover:text-primary h-15 ${!is_burger ? "max-md:w-[50px]" : ""}`}
          onClick={() => setSelected(el.title)}
        >
          {el.icon}
          <h1 className={`text-[20px] ${!is_burger ? "lg:block hidden": ""} `}>{el.title}</h1>
          
        </Link>
        
      )}
    </>
  )
}
export default LinksBar