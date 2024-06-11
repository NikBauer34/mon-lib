import { JWT } from "next-auth/jwt"

export interface IUser {
  username: string
}
export interface LoginData {
  user: IUser,
  accessToken: JWT,
  refreshToken: JWT
  expiresIn: number
}