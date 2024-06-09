"use server"

import { $api } from "@/shared"

export default async function fileToBucket(file: File) {
    const res = await $api.post<{file_path: string}>('/bucket/upload', {image: file})
    return res.data.file_path
  
}