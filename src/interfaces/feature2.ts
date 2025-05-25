import type { User } from './user'

export interface Feature2 extends Omit<User, 'professional'> {
  id: number | string
  name: string
  photo?: string
  description?: string
}
