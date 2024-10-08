import { User } from './types'
import { kv } from '@vercel/kv'

export async function guestUser(id: string) {
  const email = id + '@example.com'
  const existingUser = await kv.hgetall<User>(`user:${email}`)

  if (existingUser) {
    return existingUser
  } else {
    const user = {
      id: crypto.randomUUID(),
      email
    } as User

    await kv.hmset(`user:${email}`, user)

    return user
  }
}
