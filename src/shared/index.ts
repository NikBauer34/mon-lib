import AuthProvider from "./lib/providers/AuthProvider";
import $api from "./api/axiosInstance";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb"
import {
  Textarea
} from './ui/textarea'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'
import { cn } from "./lib/utils";
import { buttonVariants, Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Toast, ToastAction } from "./ui/toast";
import { useToast } from "./ui/use-toast";
import { AlertCircle } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "./ui/alert";
import { Skeleton } from "./ui/skeleton";
import {Card, CardContent, CardHeader, CardDescription, CardTitle, CardFooter} from './ui/card'
import { useValidation, ValidationProp } from "./lib/hooks/useValidation";
import { Badge } from "./ui/badge";
import home from './icons/Home.svg'
import upcoming from './icons/upcoming.svg'
import previous from './icons/previous.svg'
import recordings from './icons/Video.svg'
import personal from './icons/add-personal.svg'
import logo from './icons/logo.svg'
import hamburger from './icons/hamburger.svg'
import { Sheet, SheetClose, SheetContent, SheetTrigger} from './ui/sheet'
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from './ui/dropdown-menu'
import ModeProvider from "./lib/providers/ThemeProvider";
import { Separator } from "./ui/separator";
import { Progress } from "./ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip'
import {
  Tabs, TabsContent, TabsList, TabsTrigger
} from './ui/tabs'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './ui/pagination'
export {
  AuthProvider,
  $api,
  cn,
  buttonVariants,
  Button,
  Label,
  Input,
  Toast,
  ToastAction,
  useToast,
  Alert,
  AlertTitle, AlertDescription,
  AlertCircle,
  Skeleton,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  useValidation,
  type ValidationProp,
  Badge,
  home,
  upcoming,
  previous,
  recordings,
  personal,
  logo,
  hamburger,
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  // DropdownMenu,
  // DropdownMenuContent,
  // DropdownMenuItem,
  // DropdownMenuLabel,
  // DropdownMenuSeparator,
  // DropdownMenuTrigger,
  ModeProvider,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Textarea,
  ToggleGroup,
  ToggleGroupItem,
  CardFooter,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Separator,
  Progress,
  Tabs, TabsContent, TabsList, TabsTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}