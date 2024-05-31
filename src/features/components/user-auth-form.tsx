"use client"

import * as React from "react"

import { Badge, PasswordInput, ToastAction, cn, useToast } from "@/shared"
import { useInput } from "@/entities"
import { Button } from "@/shared"
import { Input } from "@/shared"
import { Label } from "@/shared"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { DestructiveAlert, FormSkeleton } from "@/entities"
import { Loader2 } from "lucide-react"
import { signIn } from "next-auth/react"
import Image from "next/image"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isInitLoading, setInitLoading] = React.useState(true)
  const [isLoading, setIsLoading] = React.useState(false)
  const [isSessionOver, setSessionOver] = React.useState(false)
  const [serverError, setServerError] = React.useState('')
  const { toast } = useToast()
  const searchParams = useSearchParams()
  const router = useRouter()
  const login = useInput('', {isEmpty: {value: true, message: 'Логин не может быть пустым'}, minLength: {value: 3, message: 'Логин не может быть меньше трех символов'}, maxLength: {value: 12, message: 'Логин не может быть больше 12 символов'}})
  const password = useInput('', {isEmpty: {value: true, message: 'Пароль не может быть пустым'}, minLength: {value: 3, message: 'Пароль не может быть меньше трех символов'}, maxLength: {value: 12, message: 'Пароль не может быть больше 12 символов'}}) 
  useEffect(() => {
    if (searchParams.has('session_over')) {
      setSessionOver(true)
    }
    setInitLoading(false)
  }, [])
  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)
    const loginValue = login.value
    const passwordValue = password.value
    const res = await signIn('credentials', {
      loginValue,
      passwordValue,
      redirect: false
    })
    if (!res?.ok) {
      setServerError(res?.error || '')
    } else {
      router.push('/')
    }
    setIsLoading(false)

  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>

          
            {isSessionOver && 
              <DestructiveAlert 
              title="Упс, сессия закончилась"
              description="Похоже, активная сессия закончилась. Просто перезайдите в аккаунт" />
            }
            {isInitLoading ?
              <FormSkeleton />
              : <>
              <form onSubmit={onSubmit}>
              <div className="grid gap-5">
                <div className="grid gap-3">
            <Label htmlFor="login">
              Логин
            </Label>
            <Input
              id="login"
              placeholder="nikbauer34"
              type="text"
              autoCapitalize="none"
              autoComplete="none"
              autoCorrect="off"
              {...login}
              defaultValue={''}
              disabled={isLoading}
            />
            {(login.isDirty && login.isEmpty.value) && <Badge variant={'destructive'}>{login.isEmpty.message}</Badge>}
            {(login.isDirty && login.minLengthError.value) && <Badge variant={'destructive'}>{login.minLengthError.message}</Badge>}
            {(login.isDirty && login.maxLengthError.value) && <Badge variant={'destructive'}>{login.maxLengthError.message}</Badge>}
            <Label htmlFor="password">
              Пароль
            </Label>
            <PasswordInput
              {...password}
              defaultValue={''}
              disabled={isLoading}
            />
            {(password.isDirty && password.isEmpty.value) && <Badge variant={'destructive'}>{password.isEmpty.message}</Badge>}
            {(password.isDirty && password.minLengthError.value) && <Badge variant={'destructive'}>{password.minLengthError.message}</Badge>}
            {(password.isDirty && password.maxLengthError.value) && <Badge variant={'destructive'}>{password.maxLengthError.message}</Badge>}
          </div>
          <Button disabled={isLoading || (!login.isInputValid || !password.isInputValid)} type="submit">
            {isLoading &&
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            }
            Войти
          </Button>
            {serverError &&
              <DestructiveAlert 
                title="Упс, ошибка сервера"
                description={serverError}
              />
            }
        </div>
      </form>
      </>
            }
    </div>
  )
}