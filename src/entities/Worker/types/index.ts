import { IRole } from "@/entities";
import { JWT } from "next-auth/jwt";

export interface IWorker {
  _id: number;
  name: string;
  surname: string;
  login: string;
  password: string;
  chatId: number | null;
  library: number;
  unread_buckets: number;
}
export interface LoginData {
  worker: IWorker;
  token: JWT;
  roles: IRole[]
}