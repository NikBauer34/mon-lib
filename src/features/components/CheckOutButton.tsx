"use client"
import { UpdateEvent } from '@/entities/Event/types'
import Link from 'next/link'
import React from 'react'
import { Button } from '@/shared'
import Checkout from './Checkout'
import { useSession } from 'next-auth/react'

const CheckoutButton = ({ event }: { event: UpdateEvent }) => {
  const hasEventFinished = new Date(event.endDate) < new Date();
  const {status, data} = useSession()

  return (
    <div className="flex items-center gap-3">
      {hasEventFinished ? (
        <p className="p-2 text-red-400">Sorry, tickets are no longer available.</p>
      ): (
        <>
          {status == 'unauthenticated' &&
            <Button asChild className="button rounded-full" size="lg">
            <Link href="/sign-in">
              Get Tickets
            </Link>
          </Button>
          }

          {status == 'authenticated' &&
            <Checkout event={event} />
          }

        </>
      )}
    </div>
  )
}

export default CheckoutButton