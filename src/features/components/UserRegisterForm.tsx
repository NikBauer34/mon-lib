"use client"

import { DestructiveAlert, FormSkeleton } from "@/entities"
import { Badge, Button, CardContent, CardFooter, Input, Label, PasswordInput, cn, useInputValidation } from "@/shared"
import { Loader2 } from "lucide-react"
import { signIn } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import React, { SyntheticEvent, useEffect, useState } from "react"
import {register} from '@/features'
export default function UserRegisterForm() {
  const searchParams = useSearchParams()
  let username: any = useInputValidation('', {isEmpty: {value: true, message: 'Никнейм не может быть пустым'}, minLength: {value: 3, message: 'Никнейм не может быть меньше трех символов'}, maxLength: {value: 12, message: 'Никнейм не может быть больше 12 символов'}})
  let password:any = useInputValidation('', {isEmpty: {value: true, message: 'Пароль не может быть пустым'}, minLength: {value: 3, message: 'Пароль не может быть меньше трех символов'}, maxLength: {value: 12, message: 'Пароль не может быть больше 12 символов'}})
  let [loading, setLoading] = useState(false)
  let [serverError, setServerError] = useState('')
  const router = useRouter()
  async function onSubmit(e: React.SyntheticEvent) {
    e.preventDefault()
    setLoading(true)
    username = username.value
    password = password.value
    const data = await register(username, password)
    if (typeof data == 'string') {
      setServerError(data)
      setLoading(false)
      return
    }
    const res = await signIn('credentials', {
      username, password, redirect: false
    })
    if (!res?.ok) {
      setLoading(false)
      setServerError(res?.error || '')
    } else {
      router.push('/')
    }
  }
  return (
    <div className={cn("grid gap-6")}>

          <>
              <form>
              <div className="grid gap-5">
                <div className="grid gap-3">
            <Label htmlFor="login">
              Никнейм
            </Label>
            <Input
              id="login"
              placeholder="nikbauer34"
              type="text"
              autoCapitalize="none"
              autoComplete="none"
              autoCorrect="off"
              {...username}
              defaultValue={''}
              disabled={loading}
            />
            {(username.isDirty && username.isEmpty.value) && <Badge variant={'destructive'}>{username.isEmpty.message}</Badge>}
            {(username.isDirty && username.minLengthError.value) && <Badge variant={'destructive'}>{username.minLengthError.message}</Badge>}
            {(username.isDirty && username.maxLengthError.value) && <Badge variant={'destructive'}>{username.maxLengthError.message}</Badge>}
            <Label htmlFor="password">
              Пароль
            </Label>
            <PasswordInput
              {...password}
              defaultValue={''}
              disabled={loading}
            />
            {(password.isDirty && password.isEmpty.value) && <Badge variant={'destructive'}>{password.isEmpty.message}</Badge>}
            {(password.isDirty && password.minLengthError.value) && <Badge variant={'destructive'}>{password.minLengthError.message}</Badge>}
            {(password.isDirty && password.maxLengthError.value) && <Badge variant={'destructive'}>{password.maxLengthError.message}</Badge>}
          </div>
          <Button disabled={loading || (!username.isInputValid || !password.isInputValid)} onClick={async (e: SyntheticEvent) => await onSubmit(e)}>
            {loading &&
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
            
    </div>
  )
}