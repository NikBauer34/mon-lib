"use client"

import getLatest from "@/features/api/get-latest-events.action";
import getAllMuseums from "@/features/api/get-all-museums.action";
import { useEffect, useState } from "react";
import { IMuseum } from "@/entities/Museum/types";
import { FullEvent } from "@/features/api/get-related-events.action";
import { useDebounce } from "@/shared";
import Search from "./Search";
import CategoryFilter from "@/widgets/components/CategoryFilter";
import Collected from "@/features/components/Collected";
export default function HeroSearch() {
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
    <div className="flex w-full flex-col gap-5 md:flex-row ">
          <Search value={regex} onChange={(val: string) => onChangeRegex(val)}/>
          <CategoryFilter data={museums} onChange={(val: string) => onChangeMuseum(val)} defaultValue="Музей аптеки"/>
        </div>
        <div className="mt-3">
        <Collected data={events} page={Number(page)} totalPages={totalPages} changePage={changePage}/>
        </div></>
  )
}