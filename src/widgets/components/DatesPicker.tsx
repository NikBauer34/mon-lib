"use client"
import Calendar from '@/shared/icons/calendar.svg'
import { Dispatch, SetStateAction } from "react"
import Image from "next/image"
import DatePicker from "react-datepicker";
import { Button } from "@/shared";
export default function DatesPicker({days, setDays}: {days: {
  monday: {startDate: Date, endDate: Date}[], 
  tuesday: {startDate: Date, endDate: Date}[], 
  wednesday: {startDate: Date, endDate: Date}[], 
  thursday: {startDate: Date, endDate: Date}[], 
  friday: {startDate: Date, endDate: Date}[], 
  saturday: {startDate: Date, endDate: Date}[], 
  sunday: {startDate: Date, endDate: Date}[]}, setDays: Dispatch<SetStateAction<{
    monday: {startDate: Date, endDate: Date}[], 
    tuesday: {startDate: Date, endDate: Date}[], 
    wednesday: {startDate: Date, endDate: Date}[], 
    thursday: {startDate: Date, endDate: Date}[], 
    friday: {startDate: Date, endDate: Date}[], 
    saturday: {startDate: Date, endDate: Date}[], 
    sunday: {startDate: Date, endDate: Date}[]}>>}) {
      const setMonday = () => {
        let new_moday = days.monday
        new_moday.push({endDate: new Date(), startDate: new Date()})
        setDays({...days, monday: days.monday})
      }
      const onMonday = (startDate: Date, endDate: Date, index: number) => {
        let monday = days.monday
        monday[index] = {startDate, endDate}
        setDays({...days, monday})
    
      }
      const setTuesday = () => {
        let new_tuesday = days.tuesday
        new_tuesday.push({endDate: new Date(), startDate: new Date()})
        setDays({...days, tuesday: days.tuesday})
      }
      const onTuesday = (startDate: Date, endDate: Date, index: number) => {
        let tuesday = days.tuesday
        tuesday[index] = {startDate, endDate}
        setDays({...days, tuesday})
    
      }
      const setWednesday = () => {
        let new_wednesday = days.wednesday
        new_wednesday.push({endDate: new Date(), startDate: new Date()})
        setDays({...days, wednesday: days.wednesday})
      }
      const onWednesday = (startDate: Date, endDate: Date, index: number) => {
        let wednesday = days.wednesday
        wednesday[index] = {startDate, endDate}
        setDays({...days, wednesday})
      }
      const onThursday = (startDate: Date, endDate: Date, index: number) => {
        let thursday = days.thursday
        thursday[index] = {startDate, endDate}
        setDays({...days, thursday})
      }
      const setThursday = () => {
        let new_wednesday = days.thursday
        new_wednesday.push({endDate: new Date(), startDate: new Date()})
        setDays({...days, thursday: days.thursday})
      }
      const onFriday = (startDate: Date, endDate: Date, index: number) => {
        let friday = days.friday
        friday[index] = {startDate, endDate}
        setDays({...days, friday})
      }
      const setFriday = () => {
        let new_friday = days.friday
        new_friday.push({endDate: new Date(), startDate: new Date()})
        setDays({...days, friday: days.friday})
      }
      const onSaturday = (startDate: Date, endDate: Date, index: number) => {
        let saturday = days.saturday
        saturday[index] = {startDate, endDate}
        setDays({...days, saturday})
      }
      const setSaturday = () => {
        let new_friday = days.saturday
        new_friday.push({endDate: new Date(), startDate: new Date()})
        setDays({...days, saturday: days.saturday})
      }
      const onSunday = (startDate: Date, endDate: Date, index: number) => {
        let sunday = days.sunday
        sunday[index] = {startDate, endDate}
        setDays({...days, sunday})
      }
      const setSunday = () => {
        let new_friday = days.sunday
        new_friday.push({endDate: new Date(), startDate: new Date()})
        setDays({...days, sunday: days.sunday})
      }
    return (
      <>
        <p className="input-field flex align-center justify-center">Понедельник</p>
        {days.monday.map((el, index) => (
          <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
            <Image src={Calendar} alt='calendar' width={24} height={24} className='filter-grey' />
            <p className="ml-3 whitespace-nowrap text-grey-600">Начало:</p>
            <DatePicker selected={el.startDate} onChange={(date: Date) => onMonday(date, days.monday[index].endDate, index)} showTimeSelect timeInputLabel='Time:' dateFormat="dd/MM/yyyy h:mm aa" wrapperClassName='datePicker' />

          </div>
          <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
          <Image src={Calendar} alt='calendar' width={24} height={24} className='filter-grey' />
            <p className="ml-3 whitespace-nowrap text-grey-600">Конец:</p>
            <DatePicker selected={el.endDate} onChange={(date: Date) => onMonday(days.monday[index].startDate,date, index)} showTimeSelect timeInputLabel='Time:' dateFormat="dd/MM/yyyy h:mm aa" wrapperClassName='datePicker' />
          </div>
          {/* <Button onClick={e => setMonday()}>Добавить ещё мероприятий на понедельник</Button> */}
        </div>

        ))
        }
        <Button onClick={e => setMonday()}>Добавить ещё мероприятий на понедельник</Button>
        <p className="input-field flex align-center justify-center">Вторник
        </p>
        {days.tuesday.map((el, index) => (
          <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
            <Image src={Calendar} alt='calendar' width={24} height={24} className='filter-grey' />
            <p className="ml-3 whitespace-nowrap text-grey-600">Начало:</p>
            <DatePicker selected={el.startDate} onChange={(date: Date) => onTuesday(date, days.tuesday[index].endDate, index)} showTimeSelect timeInputLabel='Time:' dateFormat="dd/MM/yyyy h:mm aa" wrapperClassName='datePicker' />

          </div>
          <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
          <Image src={Calendar} alt='calendar' width={24} height={24} className='filter-grey' />
            <p className="ml-3 whitespace-nowrap text-grey-600">Конец:</p>
            <DatePicker selected={el.endDate} onChange={(date: Date) => onTuesday(days.tuesday[index].startDate,date, index)} showTimeSelect timeInputLabel='Time:' dateFormat="dd/MM/yyyy h:mm aa" wrapperClassName='datePicker' />
          </div>
          {/* <Button onClick={e => setMonday()}>Добавить ещё мероприятий на понедельник</Button> */}
        </div>

        ))
        }
        <Button onClick={e => setTuesday()}>Добавить ещё мероприятий на вторник</Button>
        <Button onClick={() => console.log(days)}>Log</Button>
        <p className="input-field flex align-center justify-center">Среда
        </p>
        {days.wednesday.map((el, index) => (
          <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
            <Image src={Calendar} alt='calendar' width={24} height={24} className='filter-grey' />
            <p className="ml-3 whitespace-nowrap text-grey-600">Начало:</p>
            <DatePicker selected={el.startDate} onChange={(date: Date) => onWednesday(date, days.tuesday[index].endDate, index)} showTimeSelect timeInputLabel='Time:' dateFormat="dd/MM/yyyy h:mm aa" wrapperClassName='datePicker' />

          </div>
          <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
          <Image src={Calendar} alt='calendar' width={24} height={24} className='filter-grey' />
            <p className="ml-3 whitespace-nowrap text-grey-600">Конец:</p>
            <DatePicker selected={el.endDate} onChange={(date: Date) => onWednesday(days.tuesday[index].startDate,date, index)} showTimeSelect timeInputLabel='Time:' dateFormat="dd/MM/yyyy h:mm aa" wrapperClassName='datePicker' />
          </div>
          {/* <Button onClick={e => setMonday()}>Добавить ещё мероприятий на понедельник</Button> */}
        </div>

        ))
        }
        <Button onClick={e => setWednesday()}>Добавить ещё мероприятий на среду</Button>
        <Button onClick={() => console.log(days)}>Log</Button>
        <p className="input-field flex align-center justify-center">Четверг
        </p>
        {days.thursday.map((el, index) => (
          <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
            <Image src={Calendar} alt='calendar' width={24} height={24} className='filter-grey' />
            <p className="ml-3 whitespace-nowrap text-grey-600">Начало:</p>
            <DatePicker selected={el.startDate} onChange={(date: Date) => onThursday(date, days.thursday[index].endDate, index)} showTimeSelect timeInputLabel='Time:' dateFormat="dd/MM/yyyy h:mm aa" wrapperClassName='datePicker' />

          </div>
          <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
          <Image src={Calendar} alt='calendar' width={24} height={24} className='filter-grey' />
            <p className="ml-3 whitespace-nowrap text-grey-600">Конец:</p>
            <DatePicker selected={el.endDate} onChange={(date: Date) => onThursday(days.thursday[index].startDate,date, index)} showTimeSelect timeInputLabel='Time:' dateFormat="dd/MM/yyyy h:mm aa" wrapperClassName='datePicker' />
          </div>
          {/* <Button onClick={e => setMonday()}>Добавить ещё мероприятий на понедельник</Button> */}
        </div>

        ))
        }
        <Button onClick={e => setThursday()}>Добавить ещё мероприятий на четверг</Button>
        <p className="input-field flex align-center justify-center">Пятница
        </p>
        {days.friday.map((el, index) => (
          <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
            <Image src={Calendar} alt='calendar' width={24} height={24} className='filter-grey' />
            <p className="ml-3 whitespace-nowrap text-grey-600">Начало:</p>
            <DatePicker selected={el.startDate} onChange={(date: Date) => onFriday(date, days.friday[index].endDate, index)} showTimeSelect timeInputLabel='Time:' dateFormat="dd/MM/yyyy h:mm aa" wrapperClassName='datePicker' />

          </div>
          <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
          <Image src={Calendar} alt='calendar' width={24} height={24} className='filter-grey' />
            <p className="ml-3 whitespace-nowrap text-grey-600">Конец:</p>
            <DatePicker selected={el.endDate} onChange={(date: Date) => onFriday(days.friday[index].startDate,date, index)} showTimeSelect timeInputLabel='Time:' dateFormat="dd/MM/yyyy h:mm aa" wrapperClassName='datePicker' />
          </div>
          {/* <Button onClick={e => setMonday()}>Добавить ещё мероприятий на понедельник</Button> */}
        </div>

        ))
        }
        <Button onClick={e => setFriday()}>Добавить ещё мероприятий на пятницу</Button>
        <p className="input-field flex align-center justify-center">Суббота
        </p>
        {days.saturday.map((el, index) => (
          <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
            <Image src={Calendar} alt='calendar' width={24} height={24} className='filter-grey' />
            <p className="ml-3 whitespace-nowrap text-grey-600">Начало:</p>
            <DatePicker selected={el.startDate} onChange={(date: Date) => onSaturday(date, days.saturday[index].endDate, index)} showTimeSelect timeInputLabel='Time:' dateFormat="dd/MM/yyyy h:mm aa" wrapperClassName='datePicker' />

          </div>
          <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
          <Image src={Calendar} alt='calendar' width={24} height={24} className='filter-grey' />
            <p className="ml-3 whitespace-nowrap text-grey-600">Конец:</p>
            <DatePicker selected={el.endDate} onChange={(date: Date) => onSaturday(days.saturday[index].startDate,date, index)} showTimeSelect timeInputLabel='Time:' dateFormat="dd/MM/yyyy h:mm aa" wrapperClassName='datePicker' />
          </div>
          {/* <Button onClick={e => setMonday()}>Добавить ещё мероприятий на понедельник</Button> */}
        </div>

        ))
        }
        <Button onClick={e => setSaturday()}>Добавить ещё мероприятий на субботу</Button>
        <p className="input-field flex align-center justify-center">Воскресенье
        </p>
        {days.sunday.map((el, index) => (
          <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
            <Image src={Calendar} alt='calendar' width={24} height={24} className='filter-grey' />
            <p className="ml-3 whitespace-nowrap text-grey-600">Начало:</p>
            <DatePicker selected={el.startDate} onChange={(date: Date) => onSunday(date, days.sunday[index].endDate, index)} showTimeSelect timeInputLabel='Time:' dateFormat="dd/MM/yyyy h:mm aa" wrapperClassName='datePicker' />

          </div>
          <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
          <Image src={Calendar} alt='calendar' width={24} height={24} className='filter-grey' />
            <p className="ml-3 whitespace-nowrap text-grey-600">Конец:</p>
            <DatePicker selected={el.endDate} onChange={(date: Date) => onSunday(days.sunday[index].startDate,date, index)} showTimeSelect timeInputLabel='Time:' dateFormat="dd/MM/yyyy h:mm aa" wrapperClassName='datePicker' />
          </div>
          {/* <Button onClick={e => setMonday()}>Добавить ещё мероприятий на понедельник</Button> */}
        </div>

        ))
        }
        <Button onClick={e => setSunday()}>Добавить ещё мероприятий на воскресенье</Button>
      </>
    )
  }