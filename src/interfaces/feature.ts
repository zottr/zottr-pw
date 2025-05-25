import type { User } from './user'

export interface Feature extends Omit<User, 'professional'> {
  description?: string
  // category: string
  // company?: {
  //   name: string
  //   logo: string
  // }
}
