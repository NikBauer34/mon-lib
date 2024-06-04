
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

export default function AuthenticationPage() {
  return (
    <>
      <div className="w-full lg:grid  lg:grid-cols-2 min-h-screen">
        <Link
          href="/examples/authentication"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Бот
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
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
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[550px] lg:w-[500px] md:w-[650px] xl:w-[600px]">
            <div className="flex items-center justify-center py-10 flex-col mt-[170px] pl-3 pr-3">
              <Card className='mx-auto min-w-[100px]'>
                <CardHeader className="flex items-center">
                  <CardTitle className="text-2xl font-semibold tracking-tight">
                    Вход
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    Введите логин и пароль, чтобы войти в аккаунт
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col py-2">
                  <UserAuthForm />
                  <p className="px-8 text-center text-sm text-muted-foreground pt-4 pb-5">
                Входите в приложение в первый раз?{" "}
                
                <Link
                  href="/init"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Проинициализируйте аккаунт
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