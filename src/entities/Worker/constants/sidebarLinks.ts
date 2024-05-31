import { home, recordings, upcoming } from "@/shared";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
interface sidebarLinkProps {
  imgURL: StaticImport,
  route: string,
  label: string
}
export const sidebarLinks: sidebarLinkProps[] = [
  {
    imgURL: home,
    route: '/',
    label: 'Главная'
  },
  {
    imgURL: upcoming,
    route: '/books',
    label: 'Книги'
  },
  {
    imgURL: recordings,
    route: '/students',
    label: 'Ученики'
  }
]