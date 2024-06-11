import { JWT } from "next-auth/jwt"

export interface IUser {
  name: string
  surname: string
  patronymic?: string
}
export interface LoginData {
  role: 'museum' | 'user'
  accessToken: JWT,
  refreshToken: JWT
  expiresIn: number
}