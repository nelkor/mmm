import type { Character } from '../types'

export const checkDeath = (group: Character[]) =>
  group.every(member => member.health <= 0)
