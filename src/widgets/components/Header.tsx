"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HeaderLogo from '@/shared/images/logo.svg'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { MobileNav, NavItems } from '@/features'
import { Button } from '@/shared'
import { useSession } from 'next-auth/react'
import { Loader2 } from 'lucide-react'
const Header =  () => {
  const {status} = useSession()
  return (
    <header className='w-full border-b h-[85px]'>
      <div className='wrapper flex items-center justify-between'>
        <Link href='/' className='w-36'>
          <Image src={HeaderLogo} width={128} height={38} alt='monfer logo' />
        </Link>

          <nav className='md:flex-between hidden w-full max-w-xs'>
            <NavItems />
          </nav>
        <div className='flex w-32 justify-end gap-3'>
            <MobileNav />
          {status == 'loading' &&
            <Loader2 className='mr-2 h-14 w-14 animate-spin mb-auto'/>
          }
          {status == 'unauthenticated' &&
            <Button asChild className='rounded-full mb-auto' size='lg'>
            <Link href='/sign-in'>
              Вход
            </Link>
          </Button>
          }
        </div>
      </div>
    </header>
  )
}

export default Header