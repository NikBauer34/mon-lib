import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/shared/lib/utils"
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Input, Label, buttonVariants } from "@/shared/index"
import { UserAuthForm } from "@/features"

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
}

export default function InitiatePage() {
  return (
    <>
      <div className="w-full lg:grid lg:min-h-[960px] lg:grid-cols-2 xl:min-h-[960px]">
        <Link
          href="/sign-in"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute left-4 top-4 md:left-8 md:top-8"
          )}
        >
          Вход
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r order-2">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Acme Inc
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This library has saved me countless hours of work and
                helped me deliver stunning designs to my clients faster than
                ever before.&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        <div>
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[550px] lg:w-[500px] md:w-[650px] xl:w-[600px] order-1">
            <div className="flex items-center justify-center py-10 flex-col mt-[170px] pl-3 pr-3">
              <Card className='mx-auto min-w-[100px]'>
                <CardHeader className="flex items-center">
                  <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    Инициализация аккаунта
                  </h2>
                </CardHeader>
                <CardContent className="flex flex-col py-2">
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                  <li><Link href={'sign-in'} className="underline underline-offset-4 text-primary">Откройте телеграмм-бота</Link> и нажмите Начать (Запустить)</li>
                  <li>Войдите в приложение бота, введите информацию об аккаунте</li>
                  <li>Если бот сказал об успешности операции, можете <Link href={'sign-in'} className="underline underline-offset-4 text-primary">Войти в аккаунт</Link></li>
                </ul>
                  <p className="px-8 text-center text-sm text-muted-foreground pt-4 pb-5">
                Входите в приложение не в первый раз?{" "}
                
                <Link
                  href="/sign-in"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Войдите в аккаунт
                </Link>
                .
              </p>
            </CardContent>
            </Card>
          </div>
        </div>
        <div className="hidden">
        <Image
          src="/examples/authentication-light.png"
          width={1000}
          height={1000}
          alt="Authentication"
          className="block dark:hidden sm:hidden"
        />
        <Image
          src="/examples/authentication-dark.png"
          width={1000}
          height={1000}
          alt="Authentication"
          className="hidden dark:block sm:hidden"
        />
      </div>
      </div>
      </div>
    </>
  )
}