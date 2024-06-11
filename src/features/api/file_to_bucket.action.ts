
import { $api } from "@/shared"

export default async function fileToBucket(file: File) {
    try {
        const formData = new FormData()
        formData.append('image', file)
        const res = await $api.post<{file_path: string}>('/bucket/upload', formData)
        return res.data.file_path
    } catch (e: any) {
        console.log(e)
    }
  
}