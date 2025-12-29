import { getDamage, randomFromArray, type Fighter, type Member } from '@/shared'

import { logArcherHit, logArcherMiss } from '../log'

export const archerAction = (archer: Fighter, enemies: Member[]) => {
  if (enemies.length === 0) {
    return
  }

  if (Math.random() > archer.accuracy) {
    logArcherMiss(archer)

    return
  }

  const target = randomFromArray(enemies)
  const isCritical = Math.random() < archer.critRate
  const damage = getDamage(archer, target, isCritical)

  target.health -= damage

  logArcherHit(archer, target, damage, isCritical)
}
