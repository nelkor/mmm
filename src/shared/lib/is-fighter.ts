import type { Member, Fighter } from '../types'

export const isFighter = (member: Member): member is Fighter =>
  Object.hasOwn(member, 'attack')
