"use client"
import { Badge, Button, Card, CardContent, CardDescription, CardHeader, CardTitle, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, Sheet, SheetContent, SheetTrigger } from "@/shared";
import { Bell, Book, CircleUser, GraduationCap, Home, LineChart, LucideIcon, Menu, Package, Package2, ShoppingBasket, ShoppingCart, TicketSlash, Users } from "lucide-react";
import Link from "next/link";
import { ReactNode, useState } from "react";
interface IOptions {
  href: string,
  title: string,
  icon: ReactNode
}
const LinksBar = ({unread_buckets, is_burger, role}: {unread_buckets: number, is_burger: boolean, role: string}) => {
  const [selected, setSelected] = useState('Главная')
  let LibrarianOptions: IOptions[] = [
    {
      href: '/',
      title: 'Главная',
      icon: <Home className="h-8" />
    },
    {
      href: '/books',
      title: 'Книги',
      icon: <Book className="h-8" />
    }
  ]
  function get() { 
    if (role == 'Библиотекарь') {
      return LibrarianOptions
    } else {
      return LibrarianOptions
    }
  }
  let [roleOptions, setRoleOptions] = useState<IOptions[]>(get())
  // if (role == 'Библиотекарь') {
  //   setRoleOptions([...roleOptions, ...LibrarianOptions])
  // }
  return (
    <>
      {roleOptions.map(el => 
        <Link 
          href={el.href}
          className={`flex ${selected == el.title ? "bg-dark-1 text-white": "bg-sky-2"} items-center gap-3 rounded-lg px-3 py-2 transition-all md:hover:text-primary h-15 ${!is_burger ? "max-md:w-[50px]" : ""}`}
          onClick={() => setSelected(el.title)}
        >
          {el.icon}
          <h1 className={`text-[20px] ${!is_burger ? "lg:block hidden": ""} `}>{el.title}</h1>
          
        </Link>
        
      )}
      {role == 'Библиотекарь' &&
        <Link
          href="#"
          className={`flex ${selected == 'Корзины' ? "bg-dark-1 text-white" : "bg-sky-2"} items-center gap-3 rounded-lg px-3 py-2 transition-all md:hover:text-primary h-15 ${!is_burger ? "max-md:w-[50px]" : ""}`}
          onClick={() => setSelected('Корзины')}
      >
        <ShoppingBasket className="h-8"/>
        <h1 className={`text-[20px] ${!is_burger ? "lg:block hidden": ""} `}>Корзины</h1>
        <Badge className={`ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full lg:block p-0 pl-[6.5px] pt-[3px] ${is_burger? "pl-0 pt-0": ""}`}>
          {unread_buckets}
        </Badge>
      </Link>
      }
    </>
  )
}
export default LinksBar