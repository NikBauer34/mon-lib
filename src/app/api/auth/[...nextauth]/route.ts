import { signin } from "@/features";
import NextAuth, { NextAuthOptions } from "next-auth";
import  CredentialsProvider from 'next-auth/providers/credentials'
import { IRole } from "@/entities";
import { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";
import { StyledString } from "next/dist/build/swc";

// declare module "next-auth" {
//   interface User {
//     name: string;
//     surname: string;
//     login: string;
//     token: string;
//     roles: IRole[];

//   }
//   interface Session extends DefaultSession {
//     user?: {
//       name: string;
//       surname: string;
//       login: string;
//       token: string;
//       roles: IRole[];
//     }
//   }
// }

// import { JWT } from "next-auth/jwt";

// declare module "next-auth/jwt" {
//   interface JWT {
//     roles: IRole[];
//     token: string
//   }
// }
export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {
        loginValue: {type: 'text'},
        passwordValue: {type: 'text'}
      },
      async authorize(credentials, req) {
        const {loginValue, passwordValue} = credentials as {
          loginValue: string;
          passwordValue: string
        }

        const data = await signin(loginValue, passwordValue)
        console.log(data)
        if (typeof data == 'string') {
          throw Error(`${data}`)
        }
        setTimeout(async() => console.log('ok'), 1000)

        return {
          name: data.worker.name,
          surname: data.worker.surname,
          login: data.worker.login,
          token: data.token,
          roles: data.roles
        }
      },
    })
  ],
  callbacks: {
    jwt(params) {
      if (params.user) {
        params.token.token = params.user.token
        params.token.roles = params.user.roles
      }

      return params.token
    },
    session({ session, token}) {
      if (session.user) {
        (session.user as { roles: IRole[] }).roles = token.roles as IRole[]
        (session.user as { token: JWT}).token = token.token as JWT
      }
      return session
    },
  }
}

const authHandler = NextAuth(authOptions)

export { authHandler as GET, authHandler as POST}