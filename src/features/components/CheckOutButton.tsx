"use client"
import { UpdateEvent } from '@/entities/Event/types'
import Link from 'next/link'
import React from 'react'
import { Button } from '@/shared'
import Checkout from './Checkout'
import { useSession } from 'next-auth/react'

const CheckoutButton = ({ event }: { event: UpdateEvent }) => {
  const {status, data} = useSession()

  return (
    <div className="flex items-center gap-3">
        <>
          {status == 'unauthenticated' &&
            <Button asChild className="button rounded-full" size="lg">
              <p>
              Забронировать
              </p>
          </Button>
          }
          {status == 'authenticated' &&
            <Button asChild className="button rounded-full" size="lg">
              <p>
              Забронировать
              </p>
          </Button>
          }
        </>
    </div>
  )
}

export default CheckoutButton