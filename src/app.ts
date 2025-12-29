import { parseLetters } from './characters'
import { checkDeath } from './shared'
import { teamAction } from './actions'
import { serializeTeam } from './log'

export const start = (team1Letters: string, team2Letters: string) => {
	const team1 = parseLetters('t1', team1Letters)
	const team2 = parseLetters('t2', team2Letters)
	const checkEnd = () => checkDeath(team1) || checkDeath(team2)

	while (!checkEnd()) {
		teamAction(team1, team2)
		teamAction(team2, team1)
	}

	console.log(serializeTeam(team1))
	console.log(serializeTeam(team2))
}
