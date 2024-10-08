import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { authConfig } from './auth.config'
import { guestUser } from './lib/user'
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
  const id = cookieStore.get('auth_session_id')?.value || crypto.randomUUID();
  const model = cookieStore.get('model')?.value || process.env.OPENAI_MODEL;
  const key = cookieStore.get('key')?.value || process.env.OPENAI_API_KEY;

  if (id && key) {
    const user = await guestUser(id);
    user.model = model || 'gpt-4-turbo';
    user.key = key;
    const session = {
      user: user,
    }
    // TODO pass as arg to the api call?
    process.env.OPENAI_API_KEY = key;
    return session;
  }

  return null;
}

export async function signOut() {
  return null;
}