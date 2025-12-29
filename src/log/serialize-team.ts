import type { Member } from '../shared'

export const serializeTeam = (team: Member[]) =>
  team
    .map(member => `${member.id}: ${member.health ? 'жив' : 'мёртв'}`)
    .join(', ') + '.'
