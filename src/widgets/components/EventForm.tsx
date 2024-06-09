"use client"
const eventDefaultValues = {
  title: '',
  description: '',
  location: '',
  imageUrl: '',
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: '',
  price: '',
  isFree: false,
  url: '',
}
import LocationGrey from '@/shared/icons/location-grey.svg'
import Calendar from '@/shared/icons/calendar.svg'
import Dollar from '@/shared/icons/dollar.svg'
import Link from '@/shared/icons/link.svg'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button, useInputValidation } from "@/shared"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/shared"
import { Input } from "@/shared"
import { CreateEventParams, ICategory, eventFormSchema } from "@/entities"
import * as z from 'zod'
import { CategoryDropdown as Dropdown, getAllCategories } from "@/features"
import { Textarea } from "@/shared"
import { FileUploader } from "@/features"
import { useEffect, useState } from "react"
import Image from "next/image"
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Checkbox } from "@/shared"
import { useRouter } from "next/navigation"
import { createEvent, updateEvent } from "@/features"
import { IEvent } from "@/entities"
import { generateComponents } from "@uploadthing/react"
import fileToBucket from "@/features/api/file_to_bucket.action"
import { Loader2 } from 'lucide-react'


type EventFormProps = {
  userId: string
  type: "Create" | "Update"
  event?: IEvent,
  eventId?: string
}

const EventForm = () => {
  let [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const onChangeCategory = (title: string) => {
    setCategory(title)
  }
  const [imageURL, setImageURL] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const onChangeFile = async (file: File) => {
    const fileName = URL.createObjectURL(file)
    setImageURL(fileName)
  }
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [price, setPrice] = useState('')
  const [isFree, setIsFree] = useState(false)
  const [siteURL, setSiteURL] = useState('')
  const [loading, setLoading] = useState(false)
  const onSubmit = async () => {
    const info: CreateEventParams = {event: {title, description, category, imageURL, location, startDate, endDate, price, isFree, siteURL}}
    setLoading(true)
    const data = await createEvent(info)
    setLoading(false)
  }
  return (
    <>  
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 md:flex-row">
                <Input placeholder="Event title" className="input-field" value={title} onChange={e => setTitle(e.target.value)}/>
                <Dropdown value={category} onChangeHandler={onChangeCategory} />
                
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
                  <Textarea placeholder="Description" className="h-72 textarea rounded-2xl"value={description} onChange={e => setDescription(e.target.value)} ></Textarea>
                  <FileUploader imageURL={imageURL} setFile={setFile} onFieldChange={onChangeFile} />
                </div>
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
            <Image src={LocationGrey} alt='calendar' width={24} height={24} />
            </div>
            <Input placeholder='Event Location or Online' className='input-field' value={location} onChange={e => setLocation(e.target.value)}/>
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
            <Image src={Calendar} alt='calendar' width={24} height={24} className='filter-grey' />
            <p className="ml-3 whitespace-nowrap text-grey-600">Start Date:</p>
            <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} showTimeSelect timeInputLabel='Time:' dateFormat="MM/dd/yyyy h:mm aa" wrapperClassName='datePicker' />

          </div>
          <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
          <Image src={Calendar} alt='calendar' width={24} height={24} className='filter-grey' />
            <p className="ml-3 whitespace-nowrap text-grey-600">End Date:</p>
            <DatePicker selected={endDate} onChange={(date: Date) => setEndDate(date)} showTimeSelect timeInputLabel='Time:' dateFormat="MM/dd/yyyy h:mm aa" wrapperClassName='datePicker' />
          </div>
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
            <Image src={Dollar} alt='dollar' width={24} height={24} className='filter-grey' />
            <Input type="number" placeholder="Price" className="p-regular-16 border-0 bg-grey-50 outline-offset-0 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0" value={isFree ? '0' : price} onChange={e => (!isFree && setPrice(e.target.value))}/>
            <div className="flex items-center">
            <label htmlFor="isFree" className="whitespace-nowrap pr-3 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Free Ticket</label>
                                <Checkbox
                                id="isFree" className="mr-2 h-5 w-5 border-2 border-primary-500" checked={isFree} onCheckedChange={() => setIsFree(!isFree)}/>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
        <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
          <Image src={Link} alt='link' width={24} height={24} />
          <Input placeholder='URL' className='input-field' value={siteURL} onChange={e => setSiteURL(e.target.value)}></Input>
        </div>
        </div>
      </div>
      <Button size='lg' className='button col-span-2 w-full mt-4' disabled={loading} onClick={async () => await onSubmit()}>
        {loading && 
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        }
        Create Event
      </Button>
    </>
  )
}

export default EventForm