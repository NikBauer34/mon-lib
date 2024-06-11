"use client"
import qs from 'query-string'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { Button } from '@/shared'
export type UrlQueryParams = {
  params: string
  key: string
  value: string | null
}
export function formUrlQuery({ params, key, value }: UrlQueryParams) {
  const currentUrl = qs.parse(params)

  currentUrl[key] = value

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  )
}

type PaginationProps = {
  page: number | string,
  totalPages: number,
  urlParamName?: string,
}

const Pagination = ({ page, totalPages, urlParamName}: PaginationProps) => {

  const onClick = (btnType: string) => {
    const pageValue = btnType === 'next' 
      ? Number(page) + 1
      : Number(page) + 1
  }

  return (
    <div className="flex gap-2">
      <Button
        size="lg"
        variant="outline"
        className="w-28"
        onClick={() => onClick('prev')}
        disabled={Number(page) <= 1}
      >
        Previous
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="w-28"
        onClick={() => onClick('next')}
        disabled={Number(page) >= totalPages}
      >
        Next
      </Button>
    </div>
  )
}

export default Pagination