import Credentials from '@auth/core/providers/credentials'
import NextAuth from 'next-auth'

export const {
  handlers: { GET, POST },
  auth,
  signIn
} = NextAuth({
  pages: {
    signIn: '/i/flow/login',
    newUser: '/i/flow/signup'
  },
  providers: [
    Credentials({
      credentials: {
        username: { label: 'Username' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize({ request }) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_AUTH_URL}/api/login`,
          {
            method: 'POST',
            body: JSON.stringify({
              id: request.body.get('username'),
              password: request.body.get('password')
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        if (!response.ok) return null

        const user = await response.json()
        return user ?? null
      }
    })
  ]
})
