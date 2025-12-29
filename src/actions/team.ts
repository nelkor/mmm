import { type Member, isFighter, filterAlive } from '../shared'
import { archerAction } from './archer'
import { warriorAction } from './warrior'
import { healerAction } from './healer'

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
