import { archerAction } from './archer'
import { healerAction } from './healer'
import { warriorAction } from './warrior'
import { type Member, isFighter, filterAlive } from '../shared'

export const teamAction = (team: Member[], enemies: Member[]) => {
  for (const member of filterAlive(team)) {
    if (isFighter(member)) {
      if (member.melee) {
        warriorAction(member, filterAlive(enemies))
      } else {
        archerAction(member, filterAlive(enemies))
      }
    } else {
      healerAction(member, filterAlive(team))
    }
  }
}
