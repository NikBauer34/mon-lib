"use client"
import { ValidationProp, useValidation } from "@/shared"
import { ChangeEvent, useState } from "react"

export const useInput = (initValue: string, validations: ValidationProp) => {
  const [value, setValue] = useState(initValue)
  const [isDirty, setDirty] = useState(false)
  const valid = useValidation(value, validations)
  const [readOnly, setReadOnly] = useState(true)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    setDirty(true)
  }

  const onBlur = () => {
    setDirty(true)
  }
  const onFocus = () => {
    setReadOnly(false)
  }

  return {
    value,
    onChange,
    onBlur,
    ...valid,
    isDirty,
    readOnly,
    onFocus
  }
}