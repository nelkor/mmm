import type { Member } from '../types'

export const filterAlive = (team: Member[]) =>
  team.filter(member => member.health > 0)
