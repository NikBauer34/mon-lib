"use client"
import { UpdateEvent } from '@/entities/Event/types';
import { Button } from '@/shared';
// import { checkoutOrder } from '@/lib/actions/order.actions';
import { useEffect, useMemo, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { FullEvent } from '../api/get-related-events.action';
import getUserId from '../api/get-user-id.action';
import { useSession } from 'next-auth/react';
import { checkoutOrder } from '../api/checkout-order.action';
import createOrder from '../api/create-order.action';
import { redirect } from 'next/navigation';
loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const Checkout = ({ event }: { event: UpdateEvent }) => {
  const {data, status} = useSession()
  let [userId, setUserId] = useState('')
  const setup = useMemo(async () => {
    if (status == 'authenticated') {
      const id = await getUserId(data.user?.refreshToken)
      setUserId(id)
    }
  }, [])
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const getData = async () => {
      const query = new URLSearchParams(window.location.search);
      if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
      console.log(data)
      alert('Успешно')
      redirect('/profile')
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
    }
    getData()
  }, []);

  const onCheckout = async () => {
    const order = {
      eventTitle: event.title,
      eventId: event._id,
      price: event.price,
      isFree: event.isFree,
      buyerId: userId
    }

    await checkoutOrder(order);
  }

  return (
    <form action={onCheckout} method="post">
      <Button type="submit" role="link" size="lg" className="button sm:w-fit" disabled={!userId}>
        {event.isFree ? 'Get Ticket' : 'Buy Ticket'}
      </Button>
    </form>
  )
}

export default Checkout