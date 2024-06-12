"use client"
import { Button, useDebounce } from "@/shared";
import Link from "next/link";
import HeroLogo from '@/shared/images/hero.png'
import Image from 'next/image'
import Search from "@/widgets/components/Search";
import CategoryFilter from "@/widgets/components/CategoryFilter";
import Collected from "@/features/components/Collected";
import getLatest from "@/features/api/get-latest-events.action";
import getAllMuseums from "@/features/api/get-all-museums.action";
import { useEffect, useState } from "react";
import { IMuseum } from "@/entities/Museum/types";
import { FullEvent } from "@/features/api/get-related-events.action";
import { late } from "zod";
type SearchParamProps = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
export default function Home({ searchParams }: SearchParamProps) {
  let [museums, setMuseums] = useState<IMuseum[]>([])
  let [museum, setMuseum] = useState('Музей аптеки')
  let [prevMuseum, setPrevMuseum] = useState('')
  let [events, setEvents] = useState<FullEvent[]>([])
  let [regex, setRegex] = useState('')
  let [page, setPage] = useState('1')
  let [totalPages, setTotalPages] = useState(0)
  let debouncedRegex = useDebounce(regex, 500)
  let onChangeRegex = (str: string) => {
    setRegex(str)
  }
  let limit = 6
  let getEvents = async () => {
    let data = await getLatest({museum, limit, page, regex})
    setEvents(data.events)
    setTotalPages(data.totalPages)
  }
  let changePage = (el: number) => {
    setPage(page+=el)
    getEvents()
  }
  useEffect(() => {
    const getData = async () => {
      let muses = await getAllMuseums()
      setMuseums(muses)
      setMuseum(muses[1].title)
      getEvents()
    }
    getData()
  }, [])
  let onChangeMuseum = (val: string) => {
    if (prevMuseum) {
      setMuseum(prevMuseum)
      setPrevMuseum(val)
    } else {
      setPrevMuseum(val)
    }
    getEvents()
  }
  useEffect(() => {
    getEvents()
  }, [debouncedRegex])

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Историко-краеведческий музей</h1>
            <p className="p-regular-20 md:p-regular-24">Узнаваемое здание с круглой башенкой, которое находится на проспекте Луначарского, было построено в 1928 году специально для музея.</p>
            <div className="flex flex-row gap-4">
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">
                Афиша
              </Link>
            </Button>
            <Button size='lg' asChild className="button w-full sm:w-fit bg-red-500">
            <Link href="#events">
                Подробнее
              </Link>
            </Button>
            </div>
      
          </div>

          <Image 
            src={HeroLogo}
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section> 

      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Доверено <br/> десятками мероприятий</h2>

        <div className="flex w-full flex-col gap-5 md:flex-row ">
          <Search value={regex} onChange={(val: string) => onChangeRegex(val)}/>
          <CategoryFilter data={museums} onChange={(val: string) => onChangeMuseum(val)} defaultValue="Музей аптеки"/>
        </div>
        <div className="mt-3">
        <Collected data={events} page={Number(page)} totalPages={totalPages} changePage={changePage}/>
        </div>
      </section>
      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
      <h2 className="h2-bold">Афиша</h2>
      <h2 className="h2-bold">Последние новости</h2>
      </section>
    </>
  )
}