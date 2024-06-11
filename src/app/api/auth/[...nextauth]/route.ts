import { signin } from "@/features";
import { $api } from "@/shared";
import { getCookie, setCookie } from "cookies-next";
import NextAuth, { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
async function refreshToken(token: JWT): Promise<JWT> {
  const res = await $api.get<{accessToken: JWT, refreshToken: JWT, expiresIn: number}>('/auth/refresh', {
    headers: {
      authorization: `${token.refreshToken}`,
    },
  });

  return {
    ...token,
    accessToken: res.data.accessToken
  };
}
export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'username',
          type: 'text'
        },
        password: {label: 'password', type: 'password'}
      },
      async authorize(credentials, req) {
        if (!credentials?.username || !credentials?.password) return null;
        const { username, password } = credentials;
        console.log('here')
        const data = await signin(username, password)
        if (typeof data == 'string') {
          throw Error(`${data}`)
        }
        // setCookie('accessToken', data.accessToken)
        // setCookie('refreshToken', data.refreshToken)
        // setCookie('expiresIn', data.expiresIn)
        // console.log(getCookie('accessToken'))
        
        return {
          username,
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
          expiresIn: data.expiresIn
        }
      },
      
    })
  ],
  callbacks: {
    async jwt({token, user}) {
      if (user) return {...token, ...user}

      const expiresIn = getCookie('expiresIn')
      if (new Date().getTime() < token.expiresIn) {
        return token
      }
      return await refreshToken(token)
    },
    async session({token, session}) {
      session.user = {...token}
      return session
    },
  }
}
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };