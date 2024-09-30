import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { authConfig } from './auth.config'
import { guestUser } from './lib/auth'
import { cookies } from 'next/headers';

// TODO
export const { signIn } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        return null
      }
    })
  ]
})

export async function auth() {
  const cookieStore = cookies();
  const id = cookieStore.get('auth_session_id')?.value;
  const key = cookieStore.get('key')?.value;

  if (id && key) {
    const user = await guestUser(id, key);
    const session = {
      user: user,
    }
    return session;
  }

  return null;
}

export async function signOut() {
  return null;
}