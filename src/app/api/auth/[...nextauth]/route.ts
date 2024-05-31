
import { signin } from "@/features";
import NextAuth, { NextAuthOptions } from "next-auth";
import  CredentialsProvider from 'next-auth/providers/credentials'
import { IRole } from "@/entities";
import { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

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

        return {
          token: ((data.token) as unknown) as JWT,
          name: data.worker.name,
          surname: data.worker.surname, 
          login: data.worker.login,
          roles: data.roles
        }
      },
    })
  ],
  callbacks: {
    jwt(params) {
      if (params.user?.roles) {
        params.token.role = params.user.roles
        params.token = params.user.token
      }

      return params.token
    },
    session({ session, token}) {
      if (session.user) {
        (session.user as { roles: IRole[] }).roles = token.roles as IRole[]
      }
      return session
    },
  }
}

const authHandler = NextAuth(authOptions)

export { authHandler as GET, authHandler as POST}