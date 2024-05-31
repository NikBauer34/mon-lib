
import { Badge, Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, Input, Label, Pagination, PaginationContent, PaginationItem, Progress, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Separator, Sheet, SheetContent, SheetTrigger, Table, TableBody, TableCell, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, ToggleGroup, ToggleGroupItem, Tooltip, TooltipContent, TooltipTrigger,TooltipProvider } from "@/shared";
import { Bell, CircleUser, Home, LineChart, Menu, Package, Package2, PanelLeft, ShoppingCart, Users, Users2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import LinksBar from "./sidebarLinksbar";
import { ProfileDropdown } from "@/features";
import NonBurgerMenu from "./NonBurgerMenu";
import BurgerMenu from "./BurgerMenu";
import { signOut } from "next-auth/react";

export default function Sidebar({children, unread_buckets, roles}: {children: ReactNode, unread_buckets: number, roles: string[]}) {

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[70px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6"/>
              <span className="lg:block hidden">Acme Inc</span>
            </Link>
            

          </div>
          <NonBurgerMenu unread_buckets={unread_buckets} roles={roles}/>

        </div>
      </div>
      <div className="flex flex-col w-full">
        <header className="flex h-14 items-center lg:h-[60px] bg-muted/40">
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
            <SheetContent side="left" className="flex flex-col w-full min-[500px]:w-3/4">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6 pb-2" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <BurgerMenu unread_buckets={unread_buckets} roles={roles}/>
          
              </nav>
              
            </SheetContent>
          </Sheet>
          <Breadcrumb className="hidden md:flex pl-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#">Orders</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Recent Orders</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="relative ml-auto flex-1 mr-2 grow-1 md:grow-0">
            <search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[250px] lg:w-[336px]"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="mr-2">
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <Image
                  src="/placeholder-user.jpg"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                />
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
        <main className=" bg-muted/40 flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
        
      </div>
    </div>
  )
}