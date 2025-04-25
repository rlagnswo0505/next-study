import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export const { handlers, auth, signIn } = NextAuth({
  pages: {
    signIn: '/i/flow/login',
    newUser: '/i/flow/signup'
  },
  callbacks: {
    jwt({ token }) {
      console.log('auth.ts jwt', token)
      return token
    },
    session({ session, newSession, user }) {
      console.log('auth.ts session', session, newSession, user)
      return session
    }
  },
  providers: [
    Credentials({
      credentials: {
        username: {},
        password: {}
      },
      authorize: async request => {
        const url = process.env.NEXT_PUBLIC_BASE_URL

        const response = await fetch(`${url}/api/login`, {
          method: 'POST',
          body: JSON.stringify({
            id: request.username,
            password: request.password
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        })

        if (!response.ok) return null

        const user = await response.json()
        console.log('@@@user', user)

        return {
          email: user.userId,
          name: user.nickname,
          image: user.image,
          ...user
        }
      }
    })
  ]
})
