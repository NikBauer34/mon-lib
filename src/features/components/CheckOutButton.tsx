"use client"
import { UpdateEvent } from '@/entities/Event/types'
import Link from 'next/link'
import React, { useEffect, useMemo, useState } from 'react'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, Button, Checkbox, Input } from '@/shared'
import Checkout from './Checkout'
import { useSession } from 'next-auth/react'
import { IUser } from '@/entities/User/types'
import getUserData from '../api/get-user-data.action'
import getUserId from '../api/get-user-id.action'

const CheckoutButton = ({ event }: { event: UpdateEvent }) => {
  const {status, data} = useSession()
  let [form, setForm] = useState<IUser>({username: '', name: '', surname: '', patronymic: '', email: '', phone: ''})
  let [account, setAccount] = useState<{username: string, password: string}>({username: '', password: ''})
  let [isChecked, setChecked] = useState(true)
  let [userId, setUserId] = useState('')
  let setup = useMemo(() => {
    if (status == 'authenticated') {
      const getData = async () => {
        console.log('No')
        if (data?.user?.role == 'user') {
          console.log('woww')
          let userData = await getUserData(data.user.refreshToken)
          if (userData !== null) {
            setForm(userData)
            console.log(userData)
            let _id = await getUserId(data.user.refreshToken)
            setUserId(_id)
          }
        }
      }
      getData()
    }
  }, [status])

  return (
    <div className="flex items-center gap-3">
        <>
        {status == 'unauthenticated' &&
          <AlertDialog>
          <AlertDialogTrigger className="p-medium-14 flex w-full rounded-sm py-3 pl-8 text-primary-500 hover:bg-primary-50 focus:text-primary-500"><Button asChild className="button rounded-full" size="lg">
          <p>
          Забронировать
          </p>
      </Button></AlertDialogTrigger>
          <AlertDialogContent className="bg-white">
            <AlertDialogHeader>
              <AlertDialogTitle>Ваши данные:</AlertDialogTitle>
              <AlertDialogDescription>
                <Input type="text" placeholder="Имя" className="input-field mt-3" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})}/>
                <Input type="text" placeholder="Фамилия" className="input-field mt-3" value={form.surname} onChange={(e) => setForm({...form, surname: e.target.value})}/>
                <Input type="text" placeholder="Отчество" className="input-field mt-3" value={form.patronymic} onChange={(e) => setForm({...form, patronymic: e.target.value})}/>
                <Input type="text" placeholder="Телефон" className="input-field mt-3" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})}/>
                <Input type="text" placeholder="Эл. почта" className="input-field mt-3" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})}/>
                <p>Введите логин и пароль, чтобы смотреть все ваши заказы на сайти онлайн</p>
                <label htmlFor="isFree" className="whitespace-nowrap pr-3 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Заполнить данные</label>
                                <Checkbox
                                id="isFree" className="mr-2 h-5 w-5 border-2 border-primary-500" checked={isChecked} onCheckedChange={() => setChecked(!isChecked)}/>
                {isChecked &&
                  <>
                    <Input type="text" placeholder="Логин" className="input-field mt-3" value={account.username} onChange={(e) => setAccount({...account, username: e.target.value})}/>
                    <Input type="text" placeholder="Пароль" className="input-field mt-3" value={account.password} onChange={(e) => setAccount({...account, password: e.target.value})}/>
                  </>
                }
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Add</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      }
        {data?.user?.role == 'user' && 
          <AlertDialog>
          <AlertDialogTrigger className="p-medium-14 flex w-full rounded-sm py-3 pl-8 text-primary-500 hover:bg-primary-50 focus:text-primary-500"><Button asChild className="button rounded-full" size="lg">
          <p>
          Забронировать
          </p>
      </Button></AlertDialogTrigger>
          <AlertDialogContent className="bg-white">
            <AlertDialogHeader>
              <AlertDialogTitle>Ваши данные:</AlertDialogTitle>
              <AlertDialogDescription>
                <Input type="text" placeholder="Имя" className="input-field mt-3" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})}/>
                <Input type="text" placeholder="Фамилия" className="input-field mt-3" value={form.surname} onChange={(e) => setForm({...form, surname: e.target.value})}/>
                <Input type="text" placeholder="Отчество" className="input-field mt-3" value={form.patronymic} onChange={(e) => setForm({...form, patronymic: e.target.value})}/>
                <Input type="text" placeholder="Телефон" className="input-field mt-3" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})}/>
                <Input type="text" placeholder="Эл. почта" className="input-field mt-3" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})}/>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Обратно</AlertDialogCancel>
              <AlertDialogAction>Add</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        }
        
        {data?.user?.role == 'museum' &&
          <Button asChild className="button rounded-full" size="lg">
          <p>
          Посмотреть заказы
          </p>
      </Button>
        }
        </>
    </div>
  )
}

export default CheckoutButton