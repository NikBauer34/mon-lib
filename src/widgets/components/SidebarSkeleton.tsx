import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, Sheet, SheetContent, SheetTrigger, Skeleton } from "@/shared";
import { Bell, CircleUser, Home, Menu, Package2 } from "lucide-react";
import Link from "next/link";

export default function SidebarSkeleton() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">Acme Inc</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4 pt-2 gap-7">
            <>
              <Skeleton className="gap-3 rounded-lg px-3 py-2 transition-all h-[50px] dark:bg-slate-50 bg-dark-1"/>
              <Skeleton className="gap-3 rounded-lg px-3 py-2 transition-all h-[50px] dark:bg-slate-50 bg-dark-1"/>
              <Skeleton className="gap-3 rounded-lg px-3 py-2 transition-all h-[50px] dark:bg-slate-50 bg-dark-1"/>
              <Skeleton className="gap-3 rounded-lg px-3 py-2 transition-all h-[50px] dark:bg-slate-50 bg-dark-1"/>
              <Skeleton className="gap-3 rounded-lg px-3 py-2 transition-all h-[50px] dark:bg-slate-50 bg-dark-1"/>
            </>
            </nav>
          </div>
          <div className="mt-auto p-4 ">
            <Card x-chunk="dashboard-02-chunk-0" className="flex flex-col justify-center">
              <CardHeader className="p-2 pt-0 md:p-4 ">
                <CardTitle className='self-center justify-center'>Отправьте сообщение</CardTitle>
                <CardDescription>
                  Напишите ученикам о грядущих событиях
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Написать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6 pb-2" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4 pt-2 gap-7">
            <>
              <Link
                href="/"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all lg:hover:text-primary h-15`}
              >
                  <Home className="h-8"/>
                  <h1 className="text-[20px]">Главная</h1>
              </Link>
              <Link
                href="/"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all lg:hover:text-primary h-15`}
              >
                  <Home className="h-8"/>
                  <h1 className="text-[20px]">Главная</h1>
              </Link>
              <Link
                href="/"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all lg:hover:text-primary h-15`}
              >
                  <Home className="h-8"/>
                  <h1 className="text-[20px]">Главная</h1>
              </Link>
              <Link
                href="/"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all lg:hover:text-primary h-15`}
              >
                  <Home className="h-8"/>
                  <h1 className="text-[20px]">Главная</h1>
              </Link>
              <Link
                href="/"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all lg:hover:text-primary h-15`}
              >
                  <Home className="h-8"/>
                  <h1 className="text-[20px]">Главная</h1>
              </Link>
            </>
            </nav>
          </div>
          <div className="mt-auto pt-8">
            <Card x-chunk="dashboard-02-chunk-0" className="flex flex-col justify-center pb-6 pt-5">
              <CardHeader className="p-2 pt-0 md:p-4 ">
                <CardTitle className='self-center justify-center'>Отправьте сообщение</CardTitle>
                <CardDescription className='self-center justify-center'>
                  Напишите ученикам о грядущих событиях
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0 pt-2">
                <Button size="sm" className="w-full">
                  Написать
                </Button>
              </CardContent>
            </Card>
          </div>
              </nav>
              
            </SheetContent>
          </Sheet>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <h1>Hi</h1>
        </main>
        
      </div>
    </div>
  )
}